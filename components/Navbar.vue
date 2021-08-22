<template>
  <div class="navbar container flex justify-between items-center">
    <div class="flex">
      <!-- logo_web.svg
      <nuxt-link to="/" class="logo mr-3" />
      <h1>侑欣科技設計整合有限公司<br><span class="inline-block mt-1 text-sm">Yooxin Technology Co.,Ltd.</span></h1> -->
      <h1 class="h1-logo">
        <nuxt-link to="/" class="navbar-logo">
          侑欣科技設計整合有限公司
        </nuxt-link>
      </h1>
    </div>
    <ul class="hidden lg:flex">
      <li v-for="(link, index) in links" :key="index" class="font-medium lg:mr-6 xl:mr-16 last:mr-0">
        <nuxt-link :to="link.to">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
    <div class="block lg:hidden">
      <Burger
        :open="open"
        @toggle="toggle"
      />
    </div>
  </div>
</template>

<script>
import Burger from '@/components/Burger'

export default {
  components: {
    Burger
  },
  data () {
    return {
      open: false,

      links: [
        { name: '關於公司', to: 'about' },
        { name: '服務內容', to: 'service' },
        { name: '加工設備', to: 'equipment' },
        { name: '品質檢驗流程', to: 'quality' },
        { name: '合作客戶', to: 'client' },
        { name: '聯繫我們', to: 'contact' }
      ]
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}

</script>
<style lang="scss" scoped>

.navbar {
  height: 105px;

  .navbar-logo {
    background-image: url('~assets/img/logo/logo_web.svg');
    text-indent: 101%;
    overflow:hidden;
    background-repeat: no-repeat;
    white-space: nowrap;
    float:left;
    height: 45px;
    // width: 40px;
    // width: 104px;
  }

}

/* .logo {
  width: 48px;
  height: 48px;
  background-color: #21219c;
} */

</style>
