# Starter Theme

A barebones starting point for theme development

All of the nitty-gritty stuff is already taken care of, so you can focus on the fun part — building out a beautiful front-end

### Getting Started

The following steps assume you have [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) installed on your machine and you have setup [SSH keys with GitHub](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Read more [2.0 Starter Theme Info](https://www.notion.so/pointer/2-0-Theme-Info-ea9018bb98cd4656a0a27ef8d1327577)

1. [Generate a new repo based on this template](https://github.com/pointercreative/Pointer-Starter-Theme/generate). It should be a private repo.

2. Open your terminal and navigate to the directory where your projects live. Clone the new repo to your local machine:

   `git clone git@github.com:pointercreative/new-repo-name.git`

3. Navigate into the folder in your terminal
   `cd new-repo-name`

4. Run `yarn install`

5. Ensure you have the [Shopify CLI](https://github.com/Shopify/shopify-cli) installed and login to your desired store with `shopify login --store example-store.myshopify.com`

6. Run `yarn start` to build and launch the Webpack watcher (which will compile scss/js and output the correct folder structure)

7. Open a new terminal tab, and run `yarn serve` to launch the Shopify CLI local theme preview.

8. In the `/src/` directory rename `.shopifyignore.example` to `.shopifyignore` (the ignore file needs to be added after your initial serve, otherwise the base templates will not get pushed up to your development theme)

**Note:** If you are working on an existing project for the first time it will likely already have a `.shopifyignore` file. Before your first `yarn start` and `yarn serve` delete the ignore rules in the file, then re-add them after. This will ensure the templates get pushed up to your development theme.

### Commands

|                      |                                                  |
| -------------------- | ------------------------------------------------ |
| `yarn start`         | Development watch mode (required before serve).  |
| `yarn serve`         | Launch dev theme preview                         |
| `yarn push`          | Build and push to pre-exisiting theme            |
| `yarn push-new`      | Build and push to new theme                      |
| `yarn sync`          | Pull down settings from a theme                  |
| `shopify login`      | Authenticates you with Shopify CLI               |
| `shopify switch`     | Switch between stores without logging in/out     |
| `yarn new-section`   | Create a new section from an availiable template |
| `yarn clone-section` | Clone an existing section                        |

### Syncing Settings

If you’re looking to sync settings from a specific theme into your development theme take the following steps:

1. Create a `sync.yml` file (see `sync.yml.example`)

2. Run `yarn start`

3. Open a second terminal window and run `yarn sync`

4. Select the theme you want to sync settings from

5. Delete the ignore paths in `/src/.shopifyignore`

6. Run `yarn serve`

7. Quit the process once it completes

8. Re-add the ignore paths to `/src/.shopifyignore`

9. Discard changes to the `settings_data.json` file and `/templates/*.json` files

### SCSS

Global styles should be added to `src/views/layout/theme/theme.scss`

Global variables should be added to `src/styles/helpers/_variables.scss`

Section specific styles should be imported into a matching JS file.

Example:

If you have a `hero.scss` file in the `src/views/sections/hero` directory, you need to import this file into a JS file called `hero.js` in the same directory.

### Grid
This theme uses the [Bootstrap 5.1 Grid](https://getbootstrap.com/docs/5.1/layout/grid/)

### Helper Classes

`text-center` - This will center your text

`text-right` - This will right align your text

`text-left` - This will left align your text

`clearfix` - This will clear your element

`visually-hidden` - This will hide your element but allow screen readers to detect it

### Fonts

To add custom fonts to your project take the following steps:

1. Add your font family to `/src/assets/fonts/`

2. **@font-face** import your font family in `/views/snippets/style-fonts/style-fonts.liquid`

3. Create a global variable for your font in `/src/styles/helpers/_variables.scss`

4. Start using your newly declared font variable

### Icons

Icons added to `/src/assets/svgs/` will automatically generate a new snippet with the prefix `icon-`

To add a new icon to your project take the following steps:

1. Add your icon to `/src/assets/svgs/`

2. Add `{% render 'icon-name' %}` where you want your icon to appear.

### Javascript

Javascript should be added to `/src/scripts/`

**Note:** If you use a `<script>` tag within a template always wrap your code in a `DOMContentLoaded` function

Example:

```
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Woohoo!');
    });
</script>
```

### Syncing code

If you suspect code changes have been made to the production theme you will have to sync those changes to your `/src/` folder

To sync the code take the following steps:

1. Remove `dist` from the `.gitignore` file

2. Run `yarn build`

3. Run `git add .`

4. Run `git commit -m 'Track dist folder'`

5. Run `git push`

6. Navigate to `/dist` in your terminal

7. From the `/dist` folder, run `shopify theme pull` and select the theme to download from

8. Use the built in diff comparison in your editor to see if any files have changed

9. Copy over any changes to your `/src/` folder

10. Re-add `dist` to the `.gitignore` file

11. Navigate to the root of the project in your terminal

12. Run `git rm --cached dist -r`

13. Run `git add .`

14. Run `git commit -m 'Resync with shop'`

15. Run `git push`

## New Section From Template

Use the `yarn new-section` command to generate a new section from one of the templates availiable in [Pointer Section Templates](https://github.com/pointercreative/pointer-section-templates).

Setup:

1. Copy `github-token.yml.example` and rename it to `github-token.yml`

2. Generate a GitHub [Personal Access Token](https://github.com/settings/tokens) and replace 'example_github_token' with your generated token in `github-token.yml`.

3. Run `yarn new-section` and follow prompts
