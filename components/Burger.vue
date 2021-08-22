<template>
  <div class="burger">
    <!-- <div class="relative sm:max-w-xl mx-auto">
      <nav class="flex items-center">
        <button class="burger-btn relative focus:outline-none" @click="toggle">
          <div class="block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              class="block absolute bg-current transform transition duration-200 ease-in-out"
              :class="{'rotate-45': open,' -translate-y-1.5': !open }"
            />
            <span
              aria-hidden="true"
              class="block absolute bg-current transform transition duration-200 ease-in-out"
              :class="{'opacity-0': open } "
            />
            <span
              aria-hidden="true"
              class="block absolute bg-current transform transition duration-200 ease-in-out"
              :class="{'-rotate-45': open, ' translate-y-1.5': !open}"
            />
          </div>
        </button>
      </nav>
    </div> -->

    <div class="burger-btn" :class="{'open': open}" @click="toggle">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}

</script>

<style lang="scss" scoped>
.burger {

  .burger-btn {
    position: relative;
    height: 22px;
    width: 22px;

    span {
      transition: transform .2s ease-in-out;
      height: 2px;
      width: 22px;
      display: block;
      position: absolute;
      background-color: #27272d;
      transform: rotate(0) translateY(0);

      &:first-of-type {
        top: 6px;
      }

      &:last-of-type {
        bottom: 6px;
      }
      
    }
  
    &.open {
      span {
        &:first-of-type {
          // top: 11px;
          top: 50%;
          transform: rotate(45deg) translateY(-50%);
        }
      }
      span {
        &:last-of-type {
          // bottom: 11px;
          bottom: 50%;
          transform: rotate(-45deg)  translateY(50%);;
        }
      }
    }
  }
}
</style>
