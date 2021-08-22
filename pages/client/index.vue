<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-x-5 mt-20 xs:mt-40 mb-32 xs:mb-48 px-7 lg:px-0">
      <div class="clientProduct flex bg-backgroundgray mb-5 xs:mb-12 md:p-4 lg:p-0" v-for="(item, i) in product" :key="i">
        <img :src="item.img" alt="" class="productImg mt-6 ml-6 mr-9 md:m-4 lg:m-11 xs:mr-10">
        <ul class="info mt-14 mr-14 xs:m-0 sm:mt-7 lg:mt-11 xs:mr-0 sm:ml-6 lg:ml-0">
          <li class="mb-1 sm:mb-2">{{ item.brand }}</li>
          <li class="text-base xs:text-1xl">{{ item.name }}</li>
        </ul>
        <div class="content mt-6 xlg:mt-0 sm:mr-16">
          <h4 class="text-base xs:text-sm text-left text-titlegray px-6 lg:px-0" >{{ item.item.term }} : {{ item.item.termName }} </h4>
          <div class="btn m-6 mb-8 xs:m-0 xs:mt-11 flex flex-col xlg:items-end md:ml-7 lg:ml-0">
          <a :href="item.link" target="_blank" class="w-full sm:w-11/12  lg:mb-4 xlg:mb-0 xlg:w-5/12 py-3 md:py-2 px-8 md:px-0 border-2 border-deepblue font-medium text-deepblue text-base xs:text-sm text-center ">看看產品</a>
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
          link: 'https://www.unipapa.com/products/extension-cord',
          item: {
            term: '負責項目',
            termName: ' 零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: require('../../assets/img/clientImg/client 02.jpg'),
          brand: 'unipapa',
          name: '有序掛勾組',
          link: 'https://www.unipapa.com/products/wall-hook',
          item: {
            term: '負責項目',
            termName: ' 零件採買、半成品檢驗、組裝生產、完成品檢驗、包裝出貨'
          }
        },
        {
          img: require('../../assets/img/clientImg/client 03.jpg'),
          brand: 'unipapa',
          name: '有序轉接頭',
          link: 'https://www.unipapa.com/products/extension-cord',
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
.content > h4 {
  opacity: 0.35;
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
@media screen and (max-width:640px) {
  .clientProduct{
   grid-template-areas:  "img img info info"
                         "img img info info"
                         "content content content content"
                         "content content content content";
}
}

@media screen and (max-width:1120px) {
img{
  max-width: 190px;
  max-height: 190px;
}
}

@media screen and (max-width:768px) {
img{
  max-width: 150px;
  max-height: 150px;
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
