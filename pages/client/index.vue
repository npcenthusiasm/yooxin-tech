<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-x-5 mt-23 xs:mt-40 mb-32 xs:mb-48 px-7 xs:px-0">
      <div class="clientProduct flex bg-gray-100 mb-5 xs:mb-12" v-for="(item, i) in product" :key="i">
        <img :src="item.img" alt="" class="productImg mt-6 ml-6 mr-9 xs:m-11 xs:mr-10">
        <ul class="info mt-14 mr-14 xs:m-0 xs:mt-11 xs:mr-0">
          <li class="mb-0">{{ item.brand }}</li>
          <li class="text-base xs:text-1xl">{{ item.name }}</li>
        </ul>
        <div class="content mt-6 xs:mt-0 xs:mr-11">
          <h4 class="text-base xs:text-sm text-left text-gray-400 px-6 xs:px-0" >{{ item.item.term }} : {{ item.item.termName }}</h4>
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
          img: require('../../assets/img/clientImg/client 01.jpg'),
          brand: 'unipapa',
          name: '有序延長線',
          item: {
            term: '負責項目',
            termName: ' 零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: require('../../assets/img/clientImg/client 02.jpg'),
          brand: 'unipapa',
          name: '有序掛勾組',
          item: {
            term: '負責項目',
            termName: ' 零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: require('../../assets/img/clientImg/client 03.jpg'),
          brand: 'unipapa',
          name: '有序轉接頭',
          item: {
            term: '負責項目',
            termName: ' 零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped >
img{
  max-width: 220px;
  max-height: 220px;
}
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

@media screen and (max-width:375px) {
img{
  max-width: 120px;
  max-height: 120px;
}
.info{
  word-break: keep-all;
}
}
</style>
