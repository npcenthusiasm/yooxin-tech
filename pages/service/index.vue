<template>
  <div>
     <div class="banner mb-32">
        <img src="http://fakeimg.pl/1440x286/282828/EAE0D0/" class="mx-auto" alt="">
      </div>
    <div class="container">
      <h2 class="text-3xl mb-10 font-medium">
        <a href="#test">
        成品代工
        </a>
      </h2>
      <div class="foundry grid grid-rows-1 grid-cols-1 xs:grid-cols-3 md:grid-cols-5 gap-x-20 mb-9">
      <div v-for="(item, i) in foundry" :key="i" class="foundryCard mb-19">
        <div class="foundryProduct">
          <div class="productImg">
            <img :src="item.img" alt="">
          </div>
          <div class="designInfo mt-4">
            <span class="font-semibold">{{ item.name }}</span>
            <p class="text-gray-500 mt-2">{{ item.content }}</p>
          </div>
        </div>
      </div>
      </div>
      <hr>
      <h2 class="text-3xl mb-10 mt-32 font-medium">
        設計&生產
      </h2>
      <div class="design grid grid-rows-1 grid-cols-5 gap-x-20 mb-26">
      <div v-for="(item, i) in design" :key="'design'+i" class="designCard">
        <div class="designProduct">
          <div class="productImg">
            <img :src="item.img" alt="">
          </div>
          <div class="designInfo mt-4">
            <span class="font-semibold">{{ item.name }}</span>
            <p class="text-gray-500 mt-2">{{ item.content }}</p>
          </div>
        </div>
      </div>
      </div>
      <hr>
      <h2 class="text-3xl mb-10 mt-33 font-medium" name="testT">
        包裝
      </h2>
      <div class="pack grid grid-rows-1 grid-cols-5 gap-x-20 mb-27">
      <div v-for="(item, i) in pack" :key="'pack'+i" class="packCard">
        <div class="packProduct">
          <div class="productImg">
            <img :src="item.img" alt="">
          </div>
          <div class="packInfo mt-4">
            <span class="font-semibold">{{ item.name }}</span>
            <p class="text-gray-500 mt-2">{{ item.content }}</p>
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
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: 'PCBA 焊接',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '塑膠熱熔',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '螺絲所附',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '打端子',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '產品電測',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '3C 產品組裝',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '彩盒包裝',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '各類手加工',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '熱收縮機包裝',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        }
      ],
      design: [
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: 'ID 設計',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
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
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '牛皮紙盒',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '軋盒',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        },
        {
          img: 'http://fakeimg.pl/192x192/282828/EAE0D0/',
          name: '紙塑',
          content: '敘述敘述敘述敘述敘述敘述敘述敘述敘述敘述'
        }
      ]
    }
  }
}
</script>
