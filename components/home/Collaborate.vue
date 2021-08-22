<template>
  <div class="container pt-10 pb-30  md:pt-23 md:pb-46">
    <div class="collaborate">
      <h2 class="text-4xl mb-10 md:mb-14  text-center">合作客戶</h2>

      <ul class="collaborate__list flex flex-wrap md:flex-nowrap">
        <li v-for="(item, index) in items" :key="index" class="w-1/2 md:w-1/3 md:mr-6">
          <img :src="item.img" :alt="item.alt">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          img: require('~/assets/img/HomeImg/client 01.svg')
        },
        {
          img: require('~/assets/img/HomeImg/client 02.svg')
        },
        {
          img: require('~/assets/img/HomeImg/client 03.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.collaborate{
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;

  &__list {
    // overflow-x: auto;

    li img {
      width: 320px;
      height: 84px;
    }
  }
}

</style>
