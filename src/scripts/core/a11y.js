import { focusHash, bindInPageLinks } from '@shopify/theme-a11y'

function tabOutline () {
  const siteBody = document.querySelector('[data-site-body]')

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') { return }
    siteBody.classList.add('tab-outline')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  focusHash()
  bindInPageLinks()
  tabOutline()
})
