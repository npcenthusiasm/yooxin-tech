<template>
  <div>
    <div class="container">
      {{ $route.name }} page
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
        },
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
        },
      ],
      package: [
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
        },
      ]
    }
  },
}
</script>
