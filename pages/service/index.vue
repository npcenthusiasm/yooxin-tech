<template>
  <div class="service-page">
    <!-- <div class="banner mb-25 xs:mb-32 ">
        <img src="http://fakeimg.pl/1440x286/282828/EAE0D0/" class="mx-auto" alt="">
      </div> -->
    <div class="container mt-20 xs:mt-33 mb-12 xs:mb-24">
      <!-- <h2 class="text-4xl mb-13 xs:mb-10 md:pl-4 lg:pl-0" id="foundry">
        成品代工
      </h2> -->
      <ProductsGridTitle title="成品代工" id="foundry" />
      <ProductsGrid :items="foundry" class=""/>
      <!-- <div class="grid grid-rows-1 grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-20 xs:gap-20 mb-5 xs:mb-9 md:px-4 lg:px-0">
        <div v-for="(item, i) in foundry" :key="i" class="">
          <div class="product">
              <img :src="item.img" alt="">
            <div class="designInfo mt-3 xs:mt-4">
              <h3 class="font-medium">{{ item.name }}</h3>
              <h3 class="desc text-gray-500 mt-2">{{ item.content }}</h3>
            </div>
          </div>
        </div>
      </div> -->
      <hr class="mb-22 md:mb-28">
      <!-- <h2 class="text-3xl mb-13 xs:mb-10 mt-23 xs:mt-33 font-medium md:pl-4 lg:pl-0" id="design">
        
      </h2> -->
      <ProductsGridTitle title="設計&生產" id="design" /> 

      <ProductsGrid :items="design " />
      <!-- <div class="design grid grid-rows-1 grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-x-5 xs:gap-x-20 mb-5 xs:mb-26 md:px-4 lg:px-0">
      <div v-for="(item, i) in design" :key="'design'+i" class="designCard mb-12 lg:mb-0">
        <div class="designProduct">
          <div class="div">
            <img :src="item.img" alt="">
            </div>
          <div class="designInfo mt-4">
            <h3 class="font-medium">{{ item.name }}</h3>
            <h3 class="text-gray-500 mt-2">{{ item.content }}</h3>
          </div>
        </div>
      </div>
      </div> -->
      <hr class="mb-22 md:mb-28">
      <!-- <h2 class="text-3xl mb-13 xs:mb-10 mt-23 xs:mt-33 font-medium md:pl-4 lg:pl-0" id="pack">
        
      </h2> -->
      <ProductsGridTitle title="包裝" id="pack" />

      <ProductsGrid :items="pack"/>

      <!-- <div class="pack grid grid-rows-1 grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-x-5 xs:gap-x-20 md:px-4 lg:px-0">
      <div v-for="(item, i) in pack" :key="'pack'+i" class="packCard mb-12 xs:mb-0">
        <div class="packProduct">
            <img :src="item.img" alt="">
          <div class="packInfo mt-4">
            <h3 class="font-medium">{{ item.name }}</h3>
            <h3 class="text-gray-500 mt-2">{{ item.content }}</h3>
          </div>
        </div>
      </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import ProductsGridTitle from '@/components/ProductsGridTitle.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'

export default {
  components: {
    ProductsGrid,
    ProductsGridTitle
  },
  data () {
    return {
      foundry: [
        {
          img: require('../../assets/img/serviceImg/compose 01.jpeg'),
          name: 'PCB 焊接',
          content: 'PCB 板焊接、銅片焊接'
        },
        {
          img: require('../../assets/img/serviceImg/compose 02.jpeg'),
          name: '塑膠熱熔',
          content: ''
        },
        {
          img: require('../../assets/img/serviceImg/compose 03.jpeg'),
          name: '螺絲所附',
          content: '用適當的扭力鎖緊產品'
        },
        {
          img: '',
          name: '打端子',
          content: '簡易模具沖壓床加工、組裝、檢驗'
        },
        {
          img: require('../../assets/img/serviceImg/compose 05.jpeg'),
          name: '產品電測',
          content: '檢測產品電壓'
        },
        {
          img: require('../../assets/img/serviceImg/compose 06.jpeg'),
          name: '3C 產品組裝',
          content: '各類 3C 產品組裝加工'
        },
        {
          img: require('../../assets/img/serviceImg/compose 08.jpeg'),
          name: '各類手加工',
          content: '品質檢驗後，把檢測有問題的零件拆解及修復'
        },
        {
          img: require('../../assets/img/serviceImg/compose 07.jpeg'),
          name: '彩盒包裝',
          content: '將產品放進折好的包裝盒'
        },
        {
          img: require('../../assets/img/serviceImg/compose 09.jpeg'),
          name: '熱收縮機包裝',
          content: '用熱收縮膜包覆外盒'
        }
      ],
      design: [
        {
          img: require('../../assets/img/serviceImg/design 01.jpeg'),
          name: 'ID 設計',
          content: '收集並整理產品相關資訊，提出合適的構想'
        },
        {
          img: require('../../assets/img/serviceImg/design 02.jpeg'),
          name: 'MD 設計',
          content: '除了維持外觀完整性，也要有好的生產考量'
        },
        {
          img: require('../../assets/img/serviceImg/design 03.jpeg'),
          name: '模具開發',
          content: '讓產品的生產過程合理有效率'
        },
        {
          img: require('../../assets/img/serviceImg/design 04.jpeg'),
          name: '塑膠射出',
          content: '透過品質檢測，把關觸感、顏色、良率'
        }
      ],
      pack: [
        {
          img: require('../../assets/img/serviceImg/package 01.jpeg'),
          name: '彩盒',
          content: ''
        },
        {
          img: require('../../assets/img/serviceImg/package 02.jpeg'),
          name: '牛皮紙盒',
          content: ''
        },
        {
          img: require('../../assets/img/serviceImg/package 04.jpeg'),
          name: '紙塑',
          content: ''
        }
      ]
    }
  },
  mounted () {
    // const anchor = this.$route.hash
    // if (anchor) {
    //   const el = document.querySelector(anchor)
    //   setTimeout(function () { el.scrollIntoView() }, 1000)
    // }

    const anchor = this.$route.query.search
    if (anchor) {
      const el = document.querySelector(`#${anchor}'`)
      console.log('el: ', el)
      setTimeout(function () { el.scrollIntoView() }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.service-page {

}
</style>
