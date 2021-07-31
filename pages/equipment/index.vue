<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-5 gap-x-5 mt-23 xs:mt-40 mb-25 xs:mb-43 xs:justify-between px-7 xs:px-0" >
      <div class="equipementProduct mb-8 xs:mb-18" v-for="(item, i) in product" :key="i">
         <img :src="item.img" alt="" class=" mb-3 xs:mb-5">
        <h3 class="title flex xs:justify-center font-medium text-black"><a :href="`service#${item.category}`">{{ item.name }}</a></h3>
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
          category: 'foundry',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '空壓機'
        },
        {
          category: 'foundry',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '熱收縮機'
        },
        {
          category: 'foundry',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '熱熔機'
        },
        {
          category: 'foundry',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '地極測試機'
        },
        {
          category: 'foundry',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '負載測試機'
        },
        {
          category: 'design',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '自動輸送帶機'
        },
        {
          category: 'design',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '自動出錫機'
        },
        {
          category: 'design',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '手動沖床'
        },
        {
          category: 'design',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '錫爐'
        },
        {
          category: 'design',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '剝線機'
        },
        {
          category: 'pack',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '電壓檢測器'
        },
        {
          category: 'pack',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '恆溫焊槍'
        },
        {
          category: 'pack',
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '熱風槍'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.title{
font-family: PingFangTC;
color: #27272d;
}
</style>
