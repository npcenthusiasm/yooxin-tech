<template>
  <div class="contact pt-20 md:pt-29 pb-43">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="contact__compnay-info mb-10 md:mb-0 md:1/2 lg:w-1/4">
          <h2 class="font-medium mb-8">
            公司資訊
          </h2>
          <ul class="contact__list">
            <li class="flex mb-6">
              <span class="title">電話</span>
              <span>00-0000000</span>
            </li>
            <li class="flex mb-6">
              <span class="title">Email</span>
              <span>oooooo@gmail.com</span>
            </li>
            <li class="flex mb-6">
              <span class="title">地址</span>
              <span>新北市三重區光復路一段 54 巷 1 號 5 樓</span>
            </li>
          </ul>
          <iframe src="https://snazzymaps.com/embed/327926" width="100%" height="260px" style="border:none;" />
        </div>

        <div class="contact__form md:w-1/2">
          <h2 class="font-medium mb-8">
            表單填寫
          </h2>

          <form class="contact__list">
            <div class="mb-5">
              <label class="title" for="name">
                公司名稱
              </label>
              <input id="name" type="number" name="phone">
            </div>

            <div class="mb-5">
              <label class="title" for="phone">
                電話
              </label>
              <input id="phone" type="number" name="phone">
            </div>

            <div class="mb-5">
              <label class="title" for="email">
                Email
              </label>
              <input id="email" type="email" name="email">
            </div>

            <div class="mb-13">
              <label class="title" for="content">
                內容
              </label>
              <textarea id="content" name="content" cols="30" rows="8" />
            </div>

            <div class="text-right">
              <button type="submit" class="w-full md:w-49 text-white bg-deepblue px-20 py-3">
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.contact {
  h2 {
    @apply text-2xl pb-6 border-b border-lightgraybr;

    line-height: 28px;

  }
  &__list {
    .title {
      flex-basis: 88px;
      flex-shrink: 0;
    }
  }
}

.contact__form {
  label {
    display: block;
  }

  input, textarea {
    @apply w-full border rounded-sm bg-shonwhite border-lightgraybr pl-2;
    &:focus {
      outline: none;
    }
    min-height: 48px;
  }

  textarea {
    resize: none;
  }

  .title {
    @apply mb-1;
  }
}

</style>
