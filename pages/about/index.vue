<template>
  <div class="about">

    <div class="md:container mb-30 flex flex-col lg:flex-row justify-between pt-0 lg:pt-12">

<!-- lg:mr-12 lg:mr-31 -->
      <div class="about__carsoul mb-10 lg:mb-5  lg:w-5/12">
        <div v-if="isMounted && imgs.length > 0" class="mb-5 lg:mb-5">
          <client-only>
            <div ref="productSwiper" v-swiper="swiperOption"  @slideChangeTransitionStart="slideChangeTransitionStart">
              <div class="swiper-wrapper">
                <div v-for="(item, i) in imgs" :key="`1 +${i}`" class="swiper-slide" >
                    <img class="about-item-img" :src="item.img" alt="">
                </div>
              </div>
            </div>
          </client-only>
        </div>

        <div class="flex px-7 md:px-0">
          <div class="pagination-item" v-for="(item, index) in imgs" :key="index" :class="{'active': activeImgIndex === index}" @click="slideToImg(index)"></div>
        </div>
      </div>


      <div class="container md:px-0 about-desc-area lg:w-7/12">
        <div class="mb-12 lg:mb-8 lg:pr-10">
          <p class="mb-6">
            侑欣設立於 2012 年，以 IC 代測加工廠起家，之後進入記憶體產業從事 FLASH IC、積體電路、晶片買賣等，在資訊電子業產銷分工結構模式中，扮演著橋樑角色。
          </p>
          <p class="mb-6">
            2020 年為了能更全方位及服務更多客戶群，另再成立 3C 成品電子組裝部，提供成品組裝、品質檢驗、包裝出貨等服務。並建立完整的代工代料服務，包括產品資料核對、進料檢驗、倉儲及庫存管理、組裝、包裝、出貨檢驗。讓客戶不需再依製程分包不同代工廠，減少品質管控上的風險，提升產品競爭力。
          </p>
          <p>另外在 ID 設計、MD 設計、模具開發、塑膠射出上也都有專業團隊合作。</p>
        </div>

        <div style="height: 1px" class="mb-13 lg:mb-11 w-full bg-lightgraybr" />

        <ul class="about-list text-base lg:text-sm lg:pr-10">
          <li v-for="(item, index) in items" :key="index" class="flex mb-2 lg:mb-1 last:mb-0">
            <div class="title mr-9">
              {{ item.title }}
            </div>
            <!-- eslint-disable vue/no-v-html  -->
            <div v-html="item.desc" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import SwiperOption from '@/utils/SwiperOption'

export default {
  data () {
    return {
      isMounted: false,
      activeImgIndex: 0,
      swiperOption: {
        // init: false,
        effect: 'slide',
        loop: false,
        autoplay: {
          delay: 4000
        },
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      imgs: [
        {
          img: require('~/assets/img/aboutImg/about_01.jpeg')
        },
        {
          img: require('~/assets/img/aboutImg/about_02.jpeg')
        },
        {
          img: require('~/assets/img/aboutImg/about_03.jpeg')
        }
      ],
      items: [
        { title: '公司建立', desc: '2012 年 9 月' },
        { title: '資本額', desc: 'NTD 7,000,000' },
        { title: '工廠位置', desc: '新北市三重區' },
        { title: '坪數', desc: '120 坪' },
        { title: '員工', desc: '11 人' },
        { title: '主要技術', desc: '電子組裝代工、 PCBA焊接 、 3C產品電測 、各類手加工' }
      ]
    }
  },
  mounted() {
    this.isMounted = true
    // setTimeout(() => {
    //   this.productSwiper.init()
    //     this.productSwiper.autoplay.start()
    // }, 3000);
  },
  // watch: {
  //   productSwiper (v) {
  //     console.log('v: ', v)
  //   }
  // },
  computed: {
    productSwiper() {
      if (!this.isMounted)
        return

      return this.$refs.productSwiper.swiper
    },
  },
  methods: {
    slideChangeTransitionStart (e) {
      console.log('e: ', e)
      console.log(123)
      const activeIndex = this.productSwiper.realIndex
      this.activeImgIndex = activeIndex
      console.log('activeIndex: ', activeIndex)
    },
    slideToImg (index) {
      console.log('index: ', index)
      console.log('this.productSwiper: ', this.productSwiper);
      this.productSwiper.slideTo(index )
      // this.productSwiper.autoplay.play()

    }
  }
}
</script>


<style lang="scss" scoped>

@import '~/assets/scss/rwd';

.about {

  .about__carsoul {
      max-width: 100%;

    @include laptop {
      max-width: 520px;
      margin-right: calc(100% * 1/12);
    }
  }
  .about-item-img {
    // width: 520px;
    width: 100%;
  }

  .pagination-item {
    width: 100px;
    height: 8px;
    border: solid 1px #dcdcdc;   
    margin-right: 12px;
    cursor: pointer;

    &.active {
      border: solid 2px #21219c;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }

  .about-desc-area {
    letter-spacing: 0.8px;
    line-height: 28px;
  }

  .about-list {
    line-height: 28px;

    .title {
      flex-basis: 70px;
      flex-shrink: 0;

      @include ipad {
        flex-basis: 70px;
      }

      @include laptop {
        flex-basis: 60px;
      }
    }
  }

}
</style>
