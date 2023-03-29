import './featured-collection.scss'
import AccessibleSwiper from '@scripts/components/accessible-swiper'

(() => {
  if (typeof window.customElements.get('featured-collection') !== 'undefined') { return }
  window.customElements.define('featured-collection', class FeaturedCollection extends AccessibleSwiper { // eslint-disable-line
    constructor () {
      super()

      if (this.dataset.swiperEnabled !== 'true') { return }
      this.slider = this
      this.next = this.querySelector('[data-swiper-next]')
      this.prev = this.querySelector('[data-swiper-prev]')

      this.options = {
        ...this.options,
        spaceBetween: 15,
        slidesPerView: 'auto',
        threshold: 10,
        breakpoints: {
          750: {
            spaceBetween: 0,
            enabled: false
          }
        },
        navigation: {
          nextEl: this.next,
          prevEl: this.prev
        }
      }

      this.accessibleSwiper()
    }
  })
})()
