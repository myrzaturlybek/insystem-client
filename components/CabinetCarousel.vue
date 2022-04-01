<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="little-grey-text d-flex align-items-center">
          Показать еще
          <img src="/chevron-right.svg" alt="" class="ml16" />
        </div>
      </div>
    </div>
    <div class="mt32 cabinet-carousel">
      <swiper class="swiper" :options="swiperOption">
        <slot name="carousel-items"></slot>
        <div slot="button-prev" class="swiper-prev bg-white rounded-circle">
          <img src="/chevron-left.svg" alt="" />
        </div>
        <div slot="button-next" class="swiper-next bg-white rounded-circle">
          <img src="/chevron-left.svg" alt="" />
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-prev {
  position: absolute;
  top: 50%;
  right: auto;
  padding: 8px;
  box-shadow: 0 2px 4px #000;
  z-index: 99;
  left: 16px;
}

.swiper-next {
  position: absolute;
  top: 50%;
  left: auto;
  padding: 8px;
  box-shadow: 0 2px 4px #000;
  z-index: 99;
  right: 16px;
}

.swiper-next img,
.swiper-prev img {
  width: 16px;
}

.swiper-next img {
  transform: scale(-1, 1);
}
</style>
