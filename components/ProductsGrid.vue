<template>
  <div class="grid grid-rows-1 grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-20 xs:gap-20 mb-5 xs:mb-9 md:mb-28 md:px-4 lg:px-0">
    <div v-for="(item, i) in items" :key="i" class="">
      <div class="product">
          <img :src="item.img" alt="">
        <div class="designInfo mt-3 xs:mt-4">
          <h3 class="font-medium">{{ item.name }}</h3>
          <h3 class="desc text-gray-500 mt-2">{{ item.content }}</h3>
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

<style>

</style>