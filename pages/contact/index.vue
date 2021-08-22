<template>
  <div class="contact-page pt-16 md:pt-29 pb-43">
    <div class="container">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="compnay-info mb-23 md:mb-0 md:w-1/2 md:mr-15 lg:mr-10" style="max-width: 416px">
          <h2 class="area-title mb-12 md:mb-8">公司資訊</h2>
          <ul class="contact-list">
            <li class="flex mb-6">
              <span class="title">電話</span>
              <span>02-2999-2935</span>
            </li>
            <li class="flex mb-6">
              <span class="title">手機</span>
              <span>0932-207-962 ( 李先生 )</span>
            </li>
            <li class="flex mb-6">
              <span class="title">Email</span>
              <span>dennis@yooxin.com.tw</span>
            </li>
            <li class="flex mb-6">
              <span class="title">地址</span>
              <span>新北市三重區光復路一段 54 巷 1 號 5 樓</span>
            </li>
          </ul>
          <iframe src="https://snazzymaps.com/embed/333494" width="100%" height="260px" style="border:none;" />
        </div>
    <!-- </div> -->

    <!-- <div class="container"> -->

        <div class="contact__form md:w-1/2">
          <h2 class="area-title mb-12 md:mb-8">表單填寫</h2>

          <form class="contact__list">
            <div class="mb-5">
              <label class="title" for="name">
                公司名稱
              </label>
              <input v-model="company"  id="name" type="text" name="name" class="appearance-none border border-1 border-lightgraybr focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-5">
              <label class="title" for="phone">
                電話
              </label>
              <input v-model="phone" id="phone" type="text" name="phone" class="appearance-none border border-1 border-lightgraybr focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-5">
              <label class="title" for="email">
                Email
              </label>
              <input v-model="email"  id="email" type="email" name="email" class="appearance-none border border-1 border-lightgraybr focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-13">
              <label class="title" for="content">
                內容
              </label>
              <textarea v-model="content" id="content" name="content" cols="30" rows="8" class="appearance-none border border-1 border-lightgraybr focus:outline-none focus:shadow-outline" />
            </div>

            <div class="text-right">
              <button @click.prevent="openMail" type="submit" class="second-btn-hover w-full lg:w-49 text-white border-2 border-deepblue bg-deepblue px-4 py-3">
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
export default {
  data() {
    return {
      content: '',
      email: '',
      company: '',
      phone: '',

    }
  },
  methods: {
    openMail () {
      console.log(window)
      const message = `公司名稱：${this.company}%0D%0AEmail：${this.email}%0D%0A電話：${this.phone}%0D%0A%0D%0A${this.content}`
      window.open(`mailto:${'dennis@yooxin.com.tw'}?subject=&body=${message}`);
    }
  }
}
</script>

<style lang="scss" scoped>


.contact-page {
  #content {
    padding: 10px;
  }

  .area-title {
    @apply text-4xl md:text-2xl pb-6 border-b border-lightgraybr;
    // font-weight: 500;
    line-height: 28px;
  }

  .contact-list {
    .title {
      flex-basis: 88px;
      flex-shrink: 0;
    }
  }

  
  .contact__form {
    label {
      display: block;
    }
  
    input, textarea {
      @apply w-full border rounded-sm bg-shonwhite border-lightgraybr pl-2;
      border: 1px solid #dcdcdc;
      outline: none;

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
}


</style>
