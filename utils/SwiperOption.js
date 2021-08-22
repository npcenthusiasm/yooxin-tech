class SwiperOption {
  constructor ({ breakpoints, slidesPerView, slidesPerGroup } = {}) {
    this.slidesPerView = slidesPerView || 2
    this.spaceBetween = 8
    this.slidesPerGroup = slidesPerGroup || 2
    this.loop = false
    this.loopFillGroupWithBlank = true
    this.pagination = {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },
    this.navigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    this.breakpoints = breakpoints || {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
    }
  }
}

export default SwiperOption