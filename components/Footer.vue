<template>
  <div class="bg-lightgray pt-22 pb-16">
    <div class="container text-center">
      <nuxt-link to="/contact" class="relative inline-block font-medium py-5 w-full md:w-1/3 mb-25 border border-deepblue bg-shonwhite">
        聯繫我們
        <img loading="lazy" src="@/assets/img/arrow.svg" alt="arrow" class="arrow-icon">
      </nuxt-link>

      <div class="text-sm text-black-300">
        侑欣科技設計整合有限公司<br>
        <span class="inline-block text-xs mt-2">Copyright © oooooooooo.com All Rights Reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">

.arrow-icon {
  height: 22px;
  position: absolute;
  right: 16px;
  top:50%;
  transform:translateY(-50%);
}
</style>
