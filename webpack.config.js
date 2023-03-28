const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin')
const path = require('path')
const term = require('terminal-kit').terminal
const fs = require('fs').promises

const distPath = path.resolve(__dirname, 'dist')

const removeFoldersFromPath = (path) => path.replace(/^.*[\\\/]/, '') // eslint-disable-line

const removeFragmentComments = (fragment) => {
  const htmlStyleCommentRegEx = new RegExp(
    '<!--[\\s\\S]*?(?:-->)?' +
    '<!---+>?' +
    '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?' +
    '|<[?][^>]*>?',
    'g'
  )
  return fragment.toString().replace(htmlStyleCommentRegEx, '')
}

const getFragmentParamArray = (paramString) => {
  return paramString
    .replace('|| ', '||')
    .replace(' ||', '||')
    .split('||')
}

const removeComma = (string) => string.replace(',', '')

const fragmentRegex = /FRAGMENT\.(.*?)(?:\((.*)\))?(?:,)?$/gm

const fragmentInjection = async (content) => {
  let sectionContent = content

  for (const match of sectionContent.matchAll(fragmentRegex)) {
    const [fragString, fragKey, fragParams] = match

    let fragment = await fs.readFile(`src/views/fragments/${fragKey}.liquid`)
    if (!fragment) continue

    fragment = removeFragmentComments(fragment)

    if (fragParams) {
      getFragmentParamArray(fragParams).forEach((param, index) => {
        const paramRegEx = new RegExp(`PARAM.${index + 1}`, 'g')
        fragment = fragment.replace(paramRegEx, param)
      })
    }

    sectionContent = sectionContent.replace(removeComma(fragString), fragment)
  }

  return sectionContent
}

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'eval-cheap-source-map' : 'none',
  stats: argv.mode === 'development' ? 'errors-only' : { children: false },
  entry: WebpackWatchedGlobEntries.getEntries(
    [
      path.resolve(__dirname, 'src/views/layout/**/*.js'),
      path.resolve(__dirname, 'src/views/sections/**/*.js')
    ]
  ),
  output: {
    filename: (pathData) => {
      return './assets/' + removeFoldersFromPath(pathData.chunk.name) + '.js'
    },
    path: distPath
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin([
      // templates
      {
        from: 'src/views/templates/**/*',
        to: 'templates/[name].[ext]',
        ignore: [
          '**/customers/**/*'
        ]
      },
      // templates - customer
      {
        from: 'src/views/templates/customers/**/*',
        to: 'templates/customers/[name].[ext]'
      },
      /* Section JSON */
      {
        from: 'src/views/sections/**/*.json',
        to: 'sections/[name].[ext]'
      },
      /* Sections */
      {
        from: 'src/views/sections/**/*.liquid',
        to: 'sections/[name].[ext]',
        async transform (content, absoluteFrom) {
          try {
            return await fragmentInjection(content.toString())
          } catch (error) {
            console.error(error)
            return content
          }
        }
      },
      // layout
      {
        from: 'src/views/layout/**/*.liquid',
        to: 'layout/[name].[ext]'
      },
      /* Snippets */
      {
        from: 'src/views/snippets/**/*.liquid',
        to: 'snippets/[name].[ext]'
      },
      // config
      {
        from: 'src/config/*',
        to: 'config/[name].[ext]'
      },
      // locales
      {
        from: 'src/locales/*.json',
        to: 'locales/[name].[ext]'
      },
      // assets
      {
        from: 'src/assets/**/*',
        to: 'assets/',
        ignore: ['.DS_Store'],
        flatten: true
      },
      // icons
      {
        from: 'src/icons/*.svg',
        to: 'snippets/icon-[name].liquid',
        transform (content, name) {
          const iconName = name.split('/icons/')[1].split('.')[0]
          return content.toString().replace('<svg ', `<svg class="icon icon-${iconName}" aria-hidden="true" focusable="false" role="presentation" `)
        }
      },
      // shopifyignore
      {
        from: 'src/.shopifyignore'
      },
      // fragments
      {
        from: 'src/views/fragments/**/*.liquid',
        ignore: ['*.liquid']
      }
    ]),
    new MiniCssExtractPlugin({
      filename: (pathData) => {
        return './assets/' + removeFoldersFromPath(pathData.chunk.name) + '.css'
      }
    }),
    function () {
      this.hooks.watchRun.tap('WatchRun', (comp) => {
        const changedTimes = comp.watchFileSystem.watcher.mtimes
        const changedFiles = Object.keys(changedTimes)
          .map(file => `\n  ${file}`)
          .join('')
        if (changedFiles.length) {
          console.clear()
          term.green('\nWatching for changes...\n')
        }
      })
    },
    function () {
      let isFirstCompile = true
      let isFirstDone = true
      let isWatching = false

      this.hooks.watchRun.tapAsync('watchRun', (stats, callback) => {
        isWatching = true
        callback()
      })

      this.hooks.beforeCompile.tapAsync('beforeCompile', (stats, callback) => {
        if (isFirstCompile) {
          term.green('\nBuilding theme... \n')
          isFirstCompile = false
        }
        callback()
      })

      this.hooks.done.tapAsync('done', (stats, callback) => {
        if (isFirstDone) {
          if (stats.compilation.errors.length > 0) {
            console.log(stats.compilation.errors)
            process.exit(1)
          }

          const outputCommand = (command, description) => {
            term.cyan(`\n\`${command}\`: `)
            term.white(description)
          }

          if (isWatching) {
            term.cyan('\n==================================================')
            outputCommand('yarn serve', 'Launch dev theme preview')
            outputCommand('yarn push', 'Build and push to pre-exisiting theme')
            outputCommand('yarn push-new', 'Build and push to new theme')
            outputCommand('yarn sync', 'Pull down settings from a theme')
            outputCommand('shopify login', 'Authenticates you with Shopify CLI')
            outputCommand('shopify switch', 'Switch between stores without logging in/out')
            outputCommand('yarn new-section', 'Create a new section from an availiable template')
            outputCommand('yarn clone-section', 'Clone an existing section')
            term.cyan('\n==================================================')

            term.green('\n\nTheme built successfully! Ensure you are logged into the correct store above. \nThen run')
            term.cyan(' yarn serve ')
            term.green('from a new terminal')
            term.green('\n\nWatching for changes...')
          }

          isFirstDone = false
        }
        callback()
      })
    }
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@sections': path.resolve(__dirname, 'src/views/sections'),
      '@snippets': path.resolve(__dirname, 'src/views/snippets'),
      '@templates': path.resolve(__dirname, 'src/views/templates')
    },
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  watchOptions: {
    poll: true,
    ignored: ['**/dist', '**/node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
})
