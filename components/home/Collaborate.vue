<template>
  <div class="container pt-18 md:pt-23 pb-46">
    <div class="collaborate">
      <h2 class="text-4xl mb-1 md:mb-14  text-center">
        合作客戶
      </h2>

      <ul class="collaborate__list flex flex-wrap md:flex-nowrap md:pl-25">
        <li v-for="(item, index) in items" :key="index" class="w-1/2 md:w-1/3 md:mr-12">
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
  &__list {
    overflow-x: auto;

    li img {
      width: 320px;
      height: 84px;
    }
  }
}

</style>
