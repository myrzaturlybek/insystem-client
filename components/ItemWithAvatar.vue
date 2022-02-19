<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex">
      <div class="ava">
        <img :src="imgUrl" alt="ava" :class="{ circle: avaCircle }" />
      </div>
      <div class="ml16 d-flex flex-column justify-content-between">
        <slot name="leftColumn"></slot>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between align-items-end">
      <slot name="rightColumn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    avaCircle: Boolean,
  },
}
</script>

<style scoped>
.ava img {
  width: 48px;
  height: 48px;
  border-radius: 10px;
}

.circle {
  border-radius: 50%;
}
</style>
