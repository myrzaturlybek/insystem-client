<template>
  <nuxt-link :to="url">
    <div
      class="sidebar-item-outer"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="sidebar-item">
        <div>
          <img v-show="!hover" class="icon24" :src="`/${icon}.svg`" />
          <img
            v-show="hover"
            class="icon24"
            :src="`/${icon}-white.svg`"
          />
        </div>
        <p class="accordeon-text">{{ title }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>
