<template>
  <div class="grid grid-rows-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-10 lg:gap-20 mb-17 md:mb-26 md:px-4 lg:px-0">
  <!-- <div class="grid grid-rows-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-10 lg:gap-20 mb-17 md:mb-26 md:px-4 lg:px-0"> -->
    <div v-for="(item, i) in items" :key="i" class="">
      <div class="product">
          <img v-if="item.img" :src="item.img" alt="">
          <div v-else class="div-img" style="padding-bottom:100%">

          </div>
          <!-- <div class="div-img"></div> -->

        <div class="designInfo mt-3 xs:mt-4">
          <h3 class="font-medium">{{ item.name }}</h3>
          <h3 class="desc text-dark-600 mt-2">{{ item.content }}</h3>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/rwd';

.product {
  .desc {
      // color: rgba(39, 39, 45, 50%);
    }
  }

  img, .div-img{
    // max-width: 150px;
    // max-height: 150px;

    @include ipad {
      // max-width: 192px;
      // max-height: 192px;
    }
  }

  .div-img {
    background-color: #DCDCDC;
    // height: 192px;
    width: 100%;
  }
  // .banner>img{
  //   height: 286px;
  // }
  
  // @media screen and (max-width:375px) {
  //   img{
  //   }
  // }
</style>