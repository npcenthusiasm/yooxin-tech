<template>
  <div class="bg-lightgray pt-22 pb-27 ">
    <div class="container  px-7">
      <div>
        <p class="company__desc mb-6 lg:mb-18 lg:px-44 text-xl">
          以成品代工服務為核心，串連起設計生產及包材服務，透過優秀的專業團隊為客戶代勞。讓客戶不需再依製程分包不同代工廠，減少品質管控上的風險，降低成本以提升產品競爭力。
        </p>
      </div>

      <ul class="descgroup grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-5">
        <li v-for="item in descriptionGroup" :key="item.title" class="pt-7 pb-6 flex items-center border border-deepblue">
          <div class="descgroup__title w-1/2 text-deepblue text-1xl text-center font-medium">
            {{ item.title }}
          </div>
          <ul class="w-1/2">
            <li v-for="desc in item.items" :key="desc.title" class="descgroup__desc mb-6 last:mb-0 flex flex-wrap">
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
          items: [{ title: '3C 電子組裝' }, { title: 'PCB 焊接' }, { title: '熱縮包裝' }, { title: '各類手加工' }]
        },
        {
          title: '設計生產',
          items: [{ title: 'ID 設計' }, { title: 'MD 設計' }, { title: '模具開發' }, { title: '塑膠射出' }]
        },
        {
          title: '包材',
          items: [{ title: '彩盒' }, { title: '牛皮紙盒' }, { title: '軋盒' }, { title: '紙塑' }]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.company__desc {
  line-height: 30px;
  letter-spacing: 0.9px;
}

.descgroup {
  &__title {
    line-height: 24px;
    letter-spacing: 1.1px;
  }
  &__desc {
    line-height: 24px;
    letter-spacing: 0.8px;
  }
}

</style>
