<template>
  <div class="quality-page">
    <div class="container pt-13 pb-16 md:pt-21 md:pb-21">
      <picture class="quality-img">
        <source media="(min-width: 1024px)" srcset="~assets/img/qualityImg/form_web.png" />
        <img src="~assets/img/qualityImg/form_mobile.png" alt="品檢留流程圖" />
      </picture>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/rwd';

.quality-page {

  img {

    @include ipad {
      max-width: 580px;
      margin: auto;
    }
  
    @include laptop {
      max-width: 100%;
    }
  }
}
</style>