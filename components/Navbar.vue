<template>
  <div class="navbar flex justify-between items-center">
    <div class="flex">
      <nuxt-link to="/" class="logo mr-3" />
      <h1>侑欣科技設計整合有限公司<br><span class="inline-block mt-1 text-sm">Yooxin Technology Co.,Ltd.</span></h1>
    </div>
    <ul class="flex">
      <li v-for="(link, index) in links" :key="index" class="font-medium mr-16 last:mr-0">
        <nuxt-link :to="link.to">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: '關於公司', to: 'about' },
        { name: '服務內容', to: 'service' },
        { name: '加工設備', to: 'equipment' },
        { name: '品質檢驗流程', to: 'quality' },
        { name: '合作客戶', to: 'client' },
        { name: '聯繫我們', to: 'contact' }
      ]
    }
  }
}

</script>
<style lang="css">

.navbar {
  height: 105px;
}

.logo {
  width: 48px;
  height: 48px;
  background-color: #21219c;
}

</style>
