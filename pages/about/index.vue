<template>
  <div class="about">
    <div class="container pt-22 pb-35 flex flex-col md:flex-row justify-between">
      <div class="about__carsoul about__carsoul-content md:w-132 bg-lightgray mb-5 md:mb-0 md:mr-31">
        <div class="" />
      </div>

      <div class="about__desc">
        <div class="mb-8 md:pr-10 pb-8 border-b border-lightgray">
          <p class="mb-5">
            侑欣設立於 2012 年，為 IC 代測加工廠起家，之後進入記憶體產業從事 FLASH IC、積體電路、晶片買賣等。成立以來，一直秉持著「服務」、「專業」、「創新」的宗旨服務客戶，在資訊電子業產銷分工結構模式中，扮演著橋樑角色。
          </p>
          <p>並以「誠信務實」 「客戶至上」的經營理念為公司文化發展的主要根基，強調唯有講求誠信及務實經營，與客戶建立起長期穩定的合作關係。以更宏觀的格局與視野，奠定永續經營的基石。</p>
        </div>

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
        { title: '主要技術', desc: '晶片、FLASH IC、SSD 硬碟、電子組裝、包裝後加工、重工等相關測試<br>代工作業' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.about {
  &__carsoul-content {
    width: 100%;
    max-width: 528px;
    aspect-ratio: 528 / 490;
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
