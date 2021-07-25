<template>
  <div class="bg-lightgray pt-22 pb-23">
    <div class="container">
      <div>
        <p class="company__desc mb-8">
          侑欣科技成立於 2012 年 9 月，初期為 IC 代測加工廠起家，之後再進入記憶體產業從事 FLASHIC、晶片代測、晶片買賣。<br>
          為了能更全方位及服務更多客戶群，另再成立 3C 成品電子組裝、包裝、PCB 焊接、各類產品加工及包材 ; 在ID 設計、MD 設計、模具開發、塑膠射出上都有專業優良團隊著手服務 ; 除了研發以外也有完整的代工代料服務，包括產品資料核對、客供料 (consign) 物料、進料檢驗、倉儲及庫存管理、組裝、包裝、出貨檢驗等一條龍服務。客戶不需再依製程分包不同代工廠，減少品質管控上的風險，提升產品競爭力。
        </p>
      </div>

      <ul class="descgroup grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-5">
        <li v-for="item in descriptionGroup" :key="item.title" class="pt-7 pb-6 flex items-center border border-deepblue">
          <div class="descgroup__title w-1/2 text-deepblue text-1xl text-center text-medium">
            {{ item.title }}
          </div>
          <ul class="w-1/2">
            <li v-for="desc in item.items" :key="desc.title" class="descgroup__desc mb-6 last:mb-0">
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
          items: [{ title: '成品組裝' }, { title: '品檢' }, { title: '包裝出貨' }]
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
