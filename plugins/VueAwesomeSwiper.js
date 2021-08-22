import Vue from 'vue'

import SwiperClass, { Navigation, Pagination, Autoplay /* add some modules if you need */ } from "swiper";
SwiperClass.use([Navigation, Pagination, Autoplay]);

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)