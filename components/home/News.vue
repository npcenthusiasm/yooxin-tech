<template>
  <div class="container pt-18 md:pt-23 pb-15">
    <div class="news">
      <h2 class="news__title mb-10 text-center">
        最新消息
      </h2>

      <ul class="news__list md:px-25">
        <li v-for="(item, index) in items" :key="index" class="new-item flex flex-col md:flex-row py-6 md:py-9 border-t">
          <div class="date mb-2 md:mb-0 md:mr-18 font-blod">
            {{ item.date }}
          </div>
          <h3 class="title mb-2 md:mb-0 md:mr-23 font-medium">
            {{ item.title }}
          </h3>
          <p class="desc text-gray-400">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { date: '2021.07.10', title: '產線場地規劃', description: '擴充生產線場地-3條 / 倉庫擴充' },
        { date: '2021.07.10', title: '產線擴充', description: '新增一條 8 米產線工作桌' },
        { date: '2021.07.10', title: '添購新機', description: 'USB 延長線電測儀器交機' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.news {
  &__title {
    font-size: 30px;
  }

&__list {
    li {
      border-color: #dbdbdb;

      &:last-child {
        border-bottom: 1px solid #dbdbdb;
      }
    }
  }

  .news-item {
    .title {
      flex-basis: 160px;
    }
  }
}

</style>
