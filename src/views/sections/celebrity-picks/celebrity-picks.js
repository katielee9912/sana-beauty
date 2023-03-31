import './celebrity-picks.scss'
import AccessibleSwiper from '@scripts/components/accessible-swiper'

(() => {
  if (typeof window.customElements.get('celebrity-picks') !== 'undefined') { return }
  window.customElements.define('celebrity-picks', class CelebrityPicks extends AccessibleSwiper { // eslint-disable-line
    constructor () {
      super()

      this.slider = this.querySelector('[data-swiper-slider]')
      this.next = this.querySelector('[data-swiper-next]')
      this.prev = this.querySelector('[data-swiper-prev]')

      this.options = {
        ...this.options,
        spaceBetween: 24,
        slidesPerView: 'auto',
        threshold: 10,
        navigation: {
          nextEl: this.next,
          prevEl: this.prev
        }
      }

      this.accessibleSwiper()
    }
  })
})()
