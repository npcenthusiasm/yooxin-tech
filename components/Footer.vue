<template>
  <div class="bg-lightgray pt-13 md:pt-15 pb-6">
    <div class="container">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 lg:w-1/4 mb-14 md:mb-0">
          <div class="mb-6 font-medium">聯繫方式</div>
          <ul>
            <li class="mb-3">02-2999-2935</li>
            <li class="mb-3">dennis@yooxin.com.tw</li>
          </ul>
        </div>

        <div class="w-full md:w-1/3 lg:w-1/4">
          <div class="mb-6 font-medium">技術合作夥伴</div>
          <ul>
            <li class="mb-3">
              <a class="link-hover" href="https://www.bs-ic.com.tw/" target="_blank">晟宇資訊</a>
            </li>
            <!-- <li class="mb-3">曜泰國際</li> -->
          </ul>
        </div>
      </div>

      <div class="pt-30 md:pt-11 text-sm text-black-300 text-center md:text-right">
        <!-- 侑欣科技設計整合有限公司<br> -->
        <span class="footer-text inline-block text-xs mt-2">Copyright © yooxin-tech.com All Rights Reserved.</span>
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

.link-hover {
  /* 21219c */
}

.footer-text {
  letter-spacing: 0.05em;
}
</style>
