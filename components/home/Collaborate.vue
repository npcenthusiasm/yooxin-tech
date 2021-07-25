<template>
  <div class="container pt-22 pb-46">
    <div class="collaborate">
      <h2 class="collaborate__title mb-12 text-center">
        合作客戶
      </h2>

      <ul class="collaborate__list flex md:pl-25">
        <li v-for="(item, index) in items" :key="index" class="mr-12 bg-lightgray">
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
        { img: '', alt: '' },
        { img: '', alt: '' },
        { img: '', alt: '' },
        { img: '', alt: '' },
        { img: '', alt: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.collaborate{
  &__title {
    font-size: 30px;
  }

  &__list {
    overflow-x: auto;

    li img {
      width: 320px;
      height: 84px;
    }
  }
}

</style>
