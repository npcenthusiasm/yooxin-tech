<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-2 gap-x-5 mt-40 mb-48">
      <div class="clientProduct flex bg-gray-100 py-11 mb-12" v-for="(item, i) in product" :key="i">
        <div class="img px-11">
          <img :src="item.img" alt="">
        </div>
        <div class="info pr-11 mt-4">
          <span>{{ item.brand }}</span>
          <h2 class="text-1xl mb-4">{{ item.name }}</h2>
          <p class="text-sm text-gray-400 mb-16">{{ item.item.term }} : {{ item.item.termName }}</p>
          <div class="btn flex justify-end">
          <button class="py-1 px-7 border-2 border-deepblue font-medium text-deepblue text-sm">看看產品</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: [
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '名稱、名稱、名稱、名稱、名稱'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '名稱、名稱、名稱、名稱、名稱'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '名稱、名稱、名稱、名稱、名稱'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '名稱、名稱、名稱、名稱、名稱'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '名稱、名稱、名稱、名稱、名稱'
          }
        }
      ]
    }
  }
}
</script>
