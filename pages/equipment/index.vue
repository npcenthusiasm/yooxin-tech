<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-1 xs:grid-cols-3 md:grid-cols-5 gap-x-5 mt-40 mb-43 justify-between" >
      <div class="equipementProduct mb-18" v-for="(item, i) in product" :key="i">
        <div class="productImg">
         <img :src="item.img" alt="" class="mb-5">
        </div>
        <span class="title flex justify-center font-medium text-black"><a href="service#testT">{{ item.name }}</a></span>
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
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '空壓機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '熱收縮機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '熱熔機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '地極測試機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '負載測試機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '自動輸送帶機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '自動出錫機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '手動沖床'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '錫爐'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '剝線機'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '電壓檢測器'
        },
        {
          img: 'http://fakeimg.pl/240x240/282828/EAE0D0/',
          name: '恆溫焊槍'
        },
        {
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
