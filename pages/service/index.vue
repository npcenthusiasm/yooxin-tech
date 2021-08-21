<template>
  <div>
     <!-- <div class="banner mb-25 xs:mb-32 ">
        <img src="http://fakeimg.pl/1440x286/282828/EAE0D0/" class="mx-auto" alt="">
      </div> -->
    <div class="container px-7 xs:px-0 mt-30 xs:mt-33 mb-12 xs:mb-24">
      <h2 class="text-3xl mb-13 xs:mb-10 font-medium" id="foundry">
        成品代工
      </h2>
      <div class="foundry grid grid-rows-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-x-5 xs:gap-x-20 mb-5 xs:mb-9">
      <div v-for="(item, i) in foundry" :key="i" class="foundryCard mb-12 xs:mb-19">
        <div class="foundryProduct">
            <img :src="item.img" alt="">
          <div class="designInfo mt-3 xs:mt-4">
            <h3 class="font-semibold">{{ item.name }}</h3>
            <h3 class="text-gray-500 mt-2">{{ item.content }}</h3>
          </div>
        </div>
      </div>
      </div>
      <hr>
      <h2 class="text-3xl mb-13 xs:mb-10 mt-23 xs:mt-33 font-medium" id="design">
        設計&生產
      </h2>
      <div class="design grid grid-rows-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-x-5 xs:gap-x-20 mb-5 xs:mb-26">
      <div v-for="(item, i) in design" :key="'design'+i" class="designCard mb-12 xs:mb-0">
        <div class="designProduct">
          <div class="div">
            <img :src="item.img" alt="">
            </div>
          <div class="designInfo mt-4">
            <h3 class="font-semibold">{{ item.name }}</h3>
            <h3 class="text-gray-500 mt-2">{{ item.content }}</h3>
          </div>
        </div>
      </div>
      </div>
      <hr>
      <h2 class="text-3xl mb-13 xs:mb-10 mt-23 xs:mt-33 font-medium" id="pack">
        包裝
      </h2>
      <div class="pack grid grid-rows-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-x-5 xs:gap-x-20">
      <div v-for="(item, i) in pack" :key="'pack'+i" class="packCard mb-12 xs:mb-0">
        <div class="packProduct">
            <img :src="item.img" alt="">
          <div class="packInfo mt-4">
            <h3 class="font-semibold">{{ item.name }}</h3>
            <h3 class="text-gray-500 mt-2">{{ item.content }}</h3>
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
      foundry: [
        {
          img: require('../../assets/img/serviceImg/compose 01.jpeg'),
          name: 'PCB 焊接',
          content: 'PCB 板焊接、銅片焊接'
        },
        {
          img: require('../../assets/img/serviceImg/compose 02.jpeg'),
          name: '塑膠熱熔',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: require('../../assets/img/serviceImg/compose 03.jpeg'),
          name: '螺絲所附',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '打端子',
          content: '簡易模具沖壓床加工、組裝、檢驗'
        },
        {
          img: require('../../assets/img/serviceImg/compose 05.jpeg'),
          name: '產品電測',
          content: '改成可以寫成可以測試電壓範圍之類的'
        },
        {
          img: require('../../assets/img/serviceImg/compose 06.jpeg'),
          name: '3C 產品組裝',
          content: '各類 3C 產品組裝包裝加工'
        },
        {
          img: require('../../assets/img/serviceImg/compose 07.jpeg'),
          name: '彩盒包裝',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: require('../../assets/img/serviceImg/compose 08.jpeg'),
          name: '各類手加工',
          content: '品質檢驗後，把檢測有問題的零件拆解及修復'
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
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: require('../../assets/img/serviceImg/design 02.jpeg'),
          name: 'MD 設計',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '模具開發',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '塑膠射出',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        }
      ],
      pack: [
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '彩盒',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: require('../../assets/img/serviceImg/package 02.jpeg'),
          name: '牛皮紙盒',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: require('../../assets/img/serviceImg/package 04.jpeg'),
          name: '紙塑',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        }
      ]
    }
  },
  mounted () {
    const anchor = this.$route.hash
    if (anchor) {
      const el = document.querySelector(anchor)
      setTimeout(function () { el.scrollIntoView() }, 1000)
    }
  }
}
</script>
<style>
img{
  max-width: 192px;
  max-height: 192px;
}
.banner>img{
  height: 286px;
}

@media screen and (max-width:375px) {
img{
  max-width: 150px;
  max-height: 150px;
}
}
</style>
