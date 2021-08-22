<template>
  <div>
    <div class="container grid grid-rows-1 grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 mt-20 xs:mt-40 mb-17 xs:mb-25 xs:justify-between" >
      <div class="equipementProduct mb-8 xs:mb-21" v-for="(item, i) in product" :key="i">
        <div class="mx-auto">
          <img :src="item.img" :alt="item.name" class="mb-3 lg:mb-4">
        </div>
        <h3 class="title flex xs:justify-center font-medium xs:font-medium text-dark"><a :href="`service#${item.category}`">{{ item.name }}</a></h3>
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
          img: require('../../assets/img/equipmentImg/device 01.jpeg'),
          name: '空壓機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 02.jpeg'),
          name: '熱收縮機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 03.jpeg'),
          name: '自動收縮機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 04.jpeg'),
          name: 'CCD 量測儀'
        },
        {
          img: require('../../assets/img/equipmentImg/device 05.jpeg'),
          name: '地極測試機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 06.jpeg'),
          name: '半自動沖壓機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 07.jpeg'),
          name: '熱熔機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 08.jpeg'),
          name: '手動沖床'
        },
        {
          img: require('../../assets/img/equipmentImg/device 09.jpeg'),
          name: '剝線機'
        },
        {
          img: require('../../assets/img/equipmentImg/device 10.jpeg'),
          name: '顯微鏡'
        },
        {
          img: require('../../assets/img/equipmentImg/device 11.jpeg'),
          name: '錫爐'
        },
        {
          img: require('../../assets/img/equipmentImg/device 12.jpeg'),
          name: '電壓檢測器'
        },
        {
          img: require('../../assets/img/equipmentImg/device 13.jpeg'),
          name: '熱風槍'
        },
        {
          img: require('../../assets/img/equipmentImg/device 14.jpeg'),
          name: '電動起子'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import '~/assets/scss/rwd';

img{
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  margin-left: auto;
  margin-right: auto;

  @include ipad {
    max-width: 240px;
    max-height: 240px;
  }
}


.title{
// font-family: PingFangTC;
  // color: #27272d;
}

// @media screen and (max-width:768px) {
// img{
//   max-width: 192px;
//   max-height: 192px;
// }
// .title{
//   max-width: 192px;
// }
// }

// @media screen and (max-width:375px) {
// img{
//   max-width: 150px;
//   max-height: 150px;
// }
// }
</style>
