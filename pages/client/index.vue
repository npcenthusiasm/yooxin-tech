<template>
  <div class="client-page">
    <!-- <div class="container grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-x-5 mt-20 xs:mt-25 mb-32 xs:mb-48 px-7 lg:px-0">
      <div class="clientProduct flex bg-backgroundgray mb-5 xs:mb-12 md:p-4 lg:p-0" v-for="(item, i) in product" :key="i">
        <img :src="item.img" alt="" class="productImg mt-6 ml-6 mr-9 md:m-4 lg:m-11 xs:mr-10">
        <ul class="info mt-14 mr-14 xs:m-0 sm:mt-7 lg:mt-11 xs:mr-0 sm:ml-6 lg:ml-0">
          <li class="mb-1 sm:mb-2">{{ item.brand }}</li>
          <li class="text-base xs:text-1xl">{{ item.name }}</li>
        </ul>
        <div class="content mt-6 xlg:mt-0 sm:mr-16">
          <h4 class="text-base xs:text-sm text-left text-titlegray px-6 lg:px-0" >{{ item.item.term }} : {{ item.item.termName }} </h4>
          <div class="btn m-6 mb-8 xs:m-0 xs:mt-11 flex flex-col xlg:items-end md:ml-7 lg:ml-0">
          <a :href="item.link" target="_blank" class="main-btn-hover w-full sm:w-11/12  lg:mb-4 xlg:mb-0 xlg:w-5/12 py-3 md:py-2 px-8 md:px-0 border-2 border-deepblue font-medium text-deepblue text-base xs:text-sm text-center ">看看產品</a>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container mt-20 md:mt-25 mb-32 md:mb-48">

      <div class="grid grid-rows-1 xl:grid-cols-2 gap-x-5 gap-y-12">

        <!-- mobile -->
        <div class="client-item md:hidden" v-for="(item, i) in product" :key="i">
          <div class="header">
            <img class="product-img" :src="item.img" alt="" >
            <div class="product-info">
              <div class="brand">{{ item.brand }}</div>
              <div class="title">{{ item.name }}</div>
            </div>
          </div>

          <h4 class="desc" >{{ item.item.term }} : {{ item.item.termName }} </h4>
          <a :href="item.link" target="_blank" class="product-btn main-btn-hover">看看產品</a>
        </div>

        <!-- desktop -->

        <div class="client-item hidden md:block" v-for="(item, i) in product" :key="i">
          <div class="header">
            <img class="product-img" :src="item.img" alt="" >
            <div class="product-info">
              <div class="brand">{{ item.brand }}</div>
              <div class="title">{{ item.name }}</div>
              <h4 class="desc" >{{ item.item.term }} : {{ item.item.termName }} </h4>
              <a :href="item.link" target="_blank" class="product-btn main-btn-hover">看看產品</a>
            </div>
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

<style lang="scss" scoped>
@import '~/assets/scss/rwd';

.client-page {

  .client-item-grid {
    
  }
  .client-item {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 32px;
    background-color: #f5f5f5;
    // margin-bottom: 20px;

    @include ipad {
      padding-left: 44px;
      padding-right: 44px;
      padding-top: 44px;
      padding-bottom: 44px;
      // margin-bottom: 48px;
    }


    .header {
      display: flex;
      // justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      @include ipad {
        align-items: flex-start;
      }


      .product-img {
        width: 50%;
        img {
          // max-width: 120px;
          // max-height: 120px;
        }
        @include ipad {
          max-width: 220px;
        }
      }

      .product-info {
        width: 50%;
        // flex-shrink: 0;
        padding-left: 36px;

        // padding-right: 12px;
        @include ipad {
          width: auto;
          align-self: stretch;

          display: flex;
          flex-direction: column; 
        }

        .title {
          // font-size: 14px;
          @include ipad {
            font-size: 22px;
            margin-bottom: 16px;
          }
        }

        .brand {
          margin-bottom: 4px;
          @include ipad {
            margin-bottom: 8px;
          }
        }
      }
    }

    .desc {
      color: rgba(39, 39, 45, 0.35);
      margin-bottom: 24px;
    }
        

        // w-full sm:w-11/12  lg:mb-4 xlg:mb-0
        //  xlg:w-5/12 py-3 md:py-2 px-8 md:px-0 
        // border-2 border-deepblue font-medium text-deepblue text-base xs:text-sm text-center

    .product-btn {
      display: block;
      width: 100%;
      color: #21219c;
      text-align: center;
      border: 2px solid #21219c;
      padding: 12px 32px;
      font-weight: 500;

      @include ipad {
        margin-top: auto;
        margin-left: auto;
        font-size: 14px;
        width: 40%;
        // max-width: 116px;
        padding: 4px 16px;
      }

      @include laptop {
        // width: 50%;
        padding: 4px 16px;
        width: 116px;

      }
    }
  }
}


</style>
