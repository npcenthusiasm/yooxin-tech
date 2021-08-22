<template>
  <div class="company-desc-wrapper pt-11 pb-19 md:pt-22 md:pb-23">
    <div class="container">
      <div>
        <p class="company-desc text-lg md:text-xl mb-6 lg:mb-18 lg:px-44 text-center">
          以成品代工服務為核心，串連起設計生產及包材服務，透過優秀的專業團隊為客戶代勞。<br class="hidden md:block">讓客戶不需再依製程分包不同代工廠，減少品質管控上的風險，降低成本以提升產品競爭力。
        </p>
      </div>

      <!-- <ul class="descgroup grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-5">
        <li v-for="item in descriptionGroup" :key="item.title" class="flex justify-between items-center px-6 pt-4 pb-4 md:pt-7 md:pb-6 md:px-15 border-2 md:border border-deepblue bg-shonwhite font-medium">
          <div class="descgroup__title w-1/4 md:w-1/2 md:flex-basis text-deepblue md:text-1xl text-center">
            {{ item.title }}
          </div>
          <ul class="descgroup__list  md:pl-8 md:p-6 w-3/4 md:w-1/2 flex flex-wrap justify-between">
            <li v-for="desc in item.items" :key="desc.title" class="descgroup__desc mb-1 md:mb-3 w-1/2 md:w-full last:mb-0">
              {{ desc.title }}
            </li>
          </ul>
        </li>
      </ul> -->

      <ul class="descgroup grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-5">
        <li v-for="item in descriptionGroup" :key="item.title" class="company-item flex justify-between items-center px-5 pt-4 pb-4 lg:pt-0 lg:pb-0 lg:px-0 border-2  border-deepblue bg-shonwhite font-medium"
          @click="goPage(item.target)">
          <div class="descgroup__title  lg:pl-15 lg:p-6 w-1/4 lg:w-1/2 lg:flex-basis text-deepblue lg:text-1xl text-center lg:text-left">
            {{ item.title }}
          </div>
          <ul class="descgroup__list  lg:pl-8 lg:p-6 w-3/4 lg:w-1/2 flex flex-wrap justify-between">
            <li v-for="desc in item.items" :key="desc.title" class="descgroup__desc mb-1 lg:mb-3 w-1/2 lg:w-full last:mb-0">
              {{ desc.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      descriptionGroup: [
        {
          title: '成品代工',
          target: 'foundry',
          items: [{ title: '3C 電子組裝' }, { title: 'PCB 焊接' }, { title: '熱縮包裝' }, { title: '各類手加工' }]
        },
        {
          title: '設計生產',
          target: 'design',

          items: [{ title: 'ID 設計' }, { title: 'MD 設計' }, { title: '模具開發' }, { title: '塑膠射出' }]
        },
        {
          title: '包材',
          target: 'pack',
          items: [{ title: '彩盒' }, { title: '牛皮紙盒' }, { title: '紙塑' }]
        }
      ]
    }
  },
  methods: {
    goPage (target) {
      this.$router.push({ name: 'service', query: { search: target } })
    }
  }
}
</script>

<style lang="scss" scoped>

.company-desc-wrapper {
  background-color: #f5f5f5;


  .company-item {
      transition: .2s all ease-in-out;
    
    .descgroup__title,
    .descgroup__desc {
      transition: .2s all ease-in-out;
      
    }
    &:hover {
      // background-color: #efefef;
      background-color: #21219c;
      color: #fcfcfc;

      .descgroup__title {
        color: #fcfcfc;
      }
    }
  }
  
  .company-desc {
    line-height: 35px;
    letter-spacing: 1px;
  }
  
  .descgroup {
  
  
    &__title {
      line-height: 24px;
      letter-spacing: 1.1px;
      flex-basis: 36px;
      flex-shrink: 0;
  
      @screen md {
        flex-basis: initial;
      }
    }
    &__desc {
      // transition: .2s all ease-in-out;
      line-height: 24px;
      letter-spacing: 0.8px;
      // flex-grow: 1;
      flex-basis: 97px;
  
      @screen md {
        flex-basis: initial;
      }
    }
  }
}

</style>
