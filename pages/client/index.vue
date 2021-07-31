<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-x-5 mt-23 xs:mt-40 mb-32 xs:mb-48 px-7 xs:px-0">
      <div class="clientProduct flex bg-gray-100 mb-5 xs:mb-12" v-for="(item, i) in product" :key="i">
        <img :src="item.img" alt="" class="productImg pt-6 pl-6 pr-9 xs:p-11 xs:pr-10">
        <ul class="info mt-14 xs:m-0 xs:mt-12 ">
          <li class="mb-0">{{ item.brand }}</li>
          <li class="text-base xs:text-1xl">{{ item.name }}</li>
        </ul>
        <div class="content mt-6 xs:mt-0 xs:mr-11">
          <h4 class="text-base xs:text-sm text-left text-gray-400 px-7 xs:px-0" >{{ item.item.term }} : {{ item.item.termName }}</h4>
          <div class="btn m-6 mb-8 xs:m-0 xs:mt-15 flex flex-col items-end">
          <NuxtLink to="#test123" class="w-full xs:w-5/12 py-3 xs:py-1 px-7 xs:px-0 border-2 border-deepblue font-medium text-deepblue text-base xs:text-sm text-center "><button >看看產品</button></NuxtLink>
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
            termName: '零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: 'http://fakeimg.pl/220x220/282828/EAE0D0/',
          brand: '品牌名',
          name: '產品名',
          item: {
            term: '負責項目',
            termName: '零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        }
      ]
    }
  }
}
</script>
<style>
.clientProduct{
  display: grid;
   grid-template-areas:  "img img info info"
                         "img img content content"
                         "img img content content"
                         "img img content content";
}
.productImg{
   grid-area: img;
}
.info{
  grid-area: info;
}
.content{
  grid-area: content;
}
@media screen and (max-width:768px) {
  .clientProduct{
   grid-template-areas:  "img img info info"
                         "img img info info"
                         "content content content content"
                         "content content content content";
}
}
</style>
