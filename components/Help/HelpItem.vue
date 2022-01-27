<template>
  <div class="mt16 white-container">
    <div
      class="d-flex justify-content-between user-select-none cursor-pointer"
      @click="show = !show"
    >
      <p>{{ title }}</p>
      <i v-show="!show" class="icon-chevron-down"></i>
      <i v-show="show" class="icon-chevron-up"></i>
    </div>
    <div v-if="hasSlotDefault" v-show="show" class="mt16 little-grey-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    hasSlotDefault() {
      return this.$slots.default
    },
  },
}
</script>
