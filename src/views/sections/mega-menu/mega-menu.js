import trapFocus from '@scripts/core/trap-focus'

;(() => {
  if (typeof window.customElements.get('mega-menu') !== 'undefined') { return }

  window.customElements.define('mega-menu', class MegaMenu extends HTMLElement { // eslint-disable-line
    constructor () {
      super()

      this.navItems = this.querySelectorAll('[data-mega-menu-nav-item]')
      this.dropdowns = this.querySelectorAll('[data-mega-menu-dropdown]')
      this.primaryLinks = this.querySelectorAll('[data-mega-menu-primary-link]')
      this.tabbableElements = null
      this.primaryLinks = [...this.primaryLinks]
      this.menuEnterTimer = setTimeout(() => {})
      this.menuLeaveTimer = setTimeout(() => {})
      this.isDropdownOpen = false
      this.activeDropdown = null
      this.init()
    }

    init () {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && this.isDropdownOpen) {
          this.closeDropdowns()
        }
      })

      const navItems = [...this.navItems]

      navItems.forEach(navItem => {
        const dropdown = navItem.querySelector('[data-mega-menu-dropdown]')
        let dropdownLinks = dropdown.querySelectorAll('[data-mega-menu-link]')
        dropdownLinks = [...dropdownLinks]
        const navLink = navItem.querySelector('[data-mega-menu-primary-link]')

        // Hover delay events
        navLink.addEventListener('mouseenter', () => {
          this.openDropdown(dropdown)
          this.tabbableElements = dropdownLinks
        })
        navLink.addEventListener('click', (event) => {
          event.preventDefault()
        })
        navItem.addEventListener('mouseleave', () => {
          this.closeDropdowns([dropdown])
        })
        dropdown.addEventListener('mouseleave', () => {
          if (dropdown === this.activeDropdown) { return }
          this.closeDropdowns()
          this.tabbableElements = null
        })

        // Keyboard control events
        navLink.addEventListener('keydown', (event) => {
          if (
            // close dropdowns from main nav
            dropdown === this.activeDropdown &&
            (event.key === 'Enter' ||
            event.key === 'ArrowUp' ||
            event.key === ' ')
          ) {
            this.closeDropdowns([dropdown])
          } else if (
            // open dropdowns from main nav
            !this.isDropdownOpen &&
            (event.key === 'Enter' ||
            event.key === 'ArrowDown' ||
            event.key === ' ')
          ) {
            this.openDropdown(dropdown, navItem)
          } else if (
            // enter into dropdown from main nav
            this.isDropdownOpen &&
            (dropdown === this.activeDropdown &&
            event.key === 'ArrowDown')
          ) {
            this.stepNext(dropdownLinks)
          } else if (event.key === 'ArrowRight') {
            // navigate between main nav items
            this.stepNext(this.primaryLinks)
          } else if (event.key === 'ArrowLeft') {
            this.stepPrev(this.primaryLinks)
          } else if (event.keyCode >= 65 && event.keyCode <= 90) {
            // jump to main nav items by char
            this.focusChar(event, this.primaryLinks)
          }
        })

        dropdownLinks.forEach(dropdownLink => {
          let secondaryLinks = dropdown.querySelectorAll('[data-mega-menu-secondary-link]')
          secondaryLinks = [...secondaryLinks]

          dropdownLink.addEventListener('keydown', (event) => {
            // move between links within dropdown
            if (this.isDropdownOpen && event.key === 'ArrowDown') {
              this.stepNext(dropdownLinks)
            } else if (this.isDropdownOpen && event.key === 'ArrowUp') {
              this.stepPrev(dropdownLinks)
            } else if (
              this.isDropdownOpen &&
              (event.key === 'ArrowRight' &&
              !dropdownLink.hasAttribute('data-mega-menu-image'))
            ) {
              this.stepNext(secondaryLinks, true)
            } else if (
              this.isDropdownOpen &&
              (event.key === 'ArrowLeft' &&
              !dropdownLink.hasAttribute('data-mega-menu-image'))
            ) {
              this.stepPrev(secondaryLinks, true)
            } else if (event.keyCode >= 65 && event.keyCode <= 90) {
              // jump to main nav items by char
              this.focusChar(event, secondaryLinks)
            }
            if (
              // return to main nav from dropdown
              this.isDropdownOpen &&
              (dropdownLinks.indexOf(document.activeElement) === 0 &&
              event.key === 'ArrowUp')
            ) {
              this.stepNext(this.primaryLinks)
            }
          })
        })
      })
    }

    async closeDropdowns (targets = this.dropdowns) {
      await new Promise(resolve => setTimeout(() => resolve(true), 300))
      targets.forEach(dropdown => {
        trapFocus.close(dropdown)
        dropdown.classList.remove('open')
        dropdown.setAttribute('aria-hidden', 'true')
        this.isDropdownOpen = false
        this.activeDropdown = null
      })
      this.index = 0
      this.secondaryIndex = 0
    }

    async openDropdown (dropdown, navItem = null) {
      await this.closeDropdowns()
      if (navItem) {
        trapFocus.open(navItem)
      }
      this.activeDropdown = dropdown
      dropdown.classList.add('open')
      dropdown.setAttribute('aria-hidden', 'false')
      this.isDropdownOpen = true
    }

    stepNext (linkList, secondaryHeaders = false) {
      let focusedElement = document.activeElement
      focusedElement = secondaryHeaders
        ? focusedElement.closest('[role=menu').querySelector('[data-mega-menu-secondary-link')
        : focusedElement

      const activeIndex = linkList.indexOf(focusedElement)
      if (activeIndex + 1 < linkList.length) {
        linkList[activeIndex + 1].focus()
      }
    }

    stepPrev (linkList, secondaryHeaders = false) {
      let focusedElement = document.activeElement
      focusedElement = secondaryHeaders
        ? focusedElement.closest('[role=menu').querySelector('[data-mega-menu-secondary-link')
        : focusedElement

      const activeIndex = linkList.indexOf(focusedElement)
      if (activeIndex - 1 >= 0) {
        linkList[activeIndex - 1].focus()
      }
    }

    focusChar (event, linkList) {
      // Find all elements where the first letter is the pressed key AND the active element
      const relevantArray = [...linkList].filter(child => child.textContent.trim().toLowerCase().charAt(0) === event.key || child === document.activeElement)
      // Get current active element index
      const activeIndex = [...relevantArray].findIndex(child => child === document.activeElement)

      // Offset the array by the current active element. Allows using the focus function to select the next/prev
      const offsetArray = this.offsetArray(relevantArray, activeIndex)

      // Get only the relevant key items (removes active element if it does not match)
      const characterArray = [...offsetArray].filter(child => child.textContent.trim().toLowerCase().charAt(0) === event.key)
      if (!characterArray.length) { return }

      this.stepNext(characterArray)
    }

    offsetArray (array, offset) {
      return [...[...array].slice(offset), ...[...array].slice(0, offset)]
    }
  })
})()
