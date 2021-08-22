<template>
  <div class="navbar">
    <div class="desktop-nav hidden md:flex">
      <div class="container flex justify-between items-center">

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
        <ul class="flex">
          <li v-for="(link, index) in links" :key="index" class="font-medium md:text-sm lg:text-base md:mr-1 lg:mr-6 xl:mr-16 last:mr-0">
            <nuxt-link :to="link.to">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="mobile-nav flex md:hidden">
      <div class="relative w-full">
        <div class="container flex justify-between items-center">
          <h1 class="h1-logo">
            <nuxt-link to="/" class="navbar-logo">
              侑欣科技設計整合有限公司
            </nuxt-link>
          </h1>
          <div class="block lg:hidden">
            <Burger
              :open="open"
              @toggle="toggle"
            />
          </div>
        </div>
        <ul class="mobile-nav-menu" :class="{'open': open}">
          <li v-for="(link, index) in links" :key="index" class="menu-item font-medium lg:mr-6 xl:mr-16 last:mr-0">
            <nuxt-link :to="link.to" class="block" @click.native="open = false">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div style="height:80px" class="w-full md:hidden"></div>
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
  
  .desktop-nav {
    height: 105px;
    // display: flex;
    align-items: center;

  }


  .mobile-nav {
    position: fixed; 
    left: 0;
    right: 0;
    z-index: 1000;
    // display: flex;
    align-items: center;
    background-color: #fcfcfc;
    height: 80px;

    .mobile-nav-menu {
      position: absolute;
      top: 45px;
      left: 0;
      right: 0;
      background-color: #fcfcfc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      opacity: 0;
      transform: translateY(-20px);
      transition: all .5s ease-in-out;

      .menu-item {
        padding: 20px 10px;

      }

      &.open {
        opacity: 1;
        transform: translateY(0);
      }


    }

  }
}


/* .logo {
  width: 48px;
  height: 48px;
  background-color: #21219c;
} */

</style>
