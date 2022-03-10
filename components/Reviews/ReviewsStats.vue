<template>
  <div class="white-container mt16">
    <div v-if="title" class="general-content-header-top">
      <h3 class="general-body-item-title">
        {{ title }}
      </h3>
    </div>
    <div class="d-flex justify-content-between mt32">
      <div class="rating-left">
        <div class="bold-text mb8">Средний рейтинг</div>
        <div><img src="/Rating.svg" alt="" /></div>
        <div class="bold-text df m16-0">
          <div class="rating-big-num mr4">4.97</div>
          <div class="rating-little-num">/ 5</div>
        </div>
        <div class="little-grey-text">Основан на 96 отзывах</div>
      </div>
      <div
        class="rating-right df showcase-body-item-img-info d-flex flex-column"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>5 звезд</div>
          <div class="bold-grey-line rating-scroll-cont ml32">
            <div class="rating-scroll"></div>
          </div>
          <div class="ml32">(94)</div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>4 звезд</div>
          <div class="bold-grey-line rating-scroll-cont ml32">
            <div class="rating-scroll"></div>
          </div>
          <div class="ml32">(94)</div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>3 звезд</div>
          <div class="bold-grey-line rating-scroll-cont ml32">
            <div class="rating-scroll"></div>
          </div>
          <div class="ml32">(94)</div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>2 звезд</div>
          <div class="bold-grey-line rating-scroll-cont ml32">
            <div class="rating-scroll"></div>
          </div>
          <div class="ml32">(94)</div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>1 звезд</div>
          <div class="bold-grey-line rating-scroll-cont ml32">
            <div class="rating-scroll"></div>
          </div>
          <div class="ml32">(94)</div>
        </div>
      </div>
    </div>
    <div class="sidebar-top-line mt16"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>
