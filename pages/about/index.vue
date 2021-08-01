<template>
  <div class="about">
    <div class="container pt-22 mb-11 flex flex-col md:flex-row justify-between">
      <div class="about__carsoul about__carsoul-content bg-lightgray mb-5 md:mb-0 md:mr-31">
        <div class="" />
      </div>

      <div class="about__desc">
        <div class="mb-8 md:pr-10">
          <p class="mb-6">
            侑欣設立於 2012 年，以 IC 代測加工廠起家，之後進入記憶體產業從事 FLASH IC、積體電路、晶片買賣等，在資訊電子業產銷分工結構模式中，扮演著橋樑角色。
          </p>
          <p class="mb-6">
            2020 年為了能更全方位及服務更多客戶群，另再成立 3C 成品電子組裝部，提供成品組裝、品質檢驗、包裝出貨等服務。並建立完整的代工代料服務，包括產品資料核對、進料檢驗、倉儲及庫存管理、組裝、包裝、出貨檢驗。讓客戶不需再依製程分包不同代工廠，減少品質管控上的風險，提升產品競爭力。
          </p>
          <p>另外在 ID 設計、MD 設計、模具開發、塑膠射出上也都有專業團隊合作。</p>
        </div>

        <div style="height: 1px" class="mb-11 w-full bg-lightgraybr" />

        <ul class="about__list text-sm md:pr-10">
          <li v-for="(item, index) in items" :key="index" class="flex mb-1 last:mb-0">
            <div class="about__list-title mr-9">
              {{ item.title }}
            </div>
            <!-- eslint-disable vue/no-v-html  -->
            <div v-html="item.desc" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '公司建立', desc: '2012 年 9 月' },
        { title: '資本額', desc: 'NTD 7,000,000' },
        { title: '工廠位置', desc: '新北市三重區' },
        { title: '坪數', desc: '120 坪' },
        { title: '員工', desc: '11 人' },
        { title: '主要技術', desc: '電子組裝代工、 PCBA焊接 、 3C產品電測 、各類手加工' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.about {
  &__carsoul-content {
    width: 100%;
    // max-width: 528px;

    @screens sm {
      // width: 528px;
      // height: 528px;
      aspect-ratio: 528 / 490;
    }
    width: 528px;
    height: 528px;
    flex-shrink: 0;
  }

  &__desc {
    line-height: 28px;
  }

  &__list {
    line-height: 28px;

    &-title {
      flex-basis: 60px;
      flex-shrink: 0;
    }
  }

}
</style>
