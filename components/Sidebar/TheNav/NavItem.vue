<template>
  <nuxt-link :to="url">
    <div class="sidebar-item-outer">
      <div class="sidebar-item">
        <div>
          <!-- <img v-show="!hover" class="icon24" :src="`/${icon}.svg`" />
          <img v-show="hover" class="icon24" :src="`/${icon}-white.svg`" /> -->
          <i :class="[`icon-${icon}`]"></i>
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
    return {}
  },
}
</script>

<style scoped>
a.nuxt-link-active .sidebar-item-outer {
  background: #333;
  color: #fff;
}

a.nuxt-link-active .sidebar-item {
  border: none;
}

.sidebar-item i {
  font-size: 24px;
}
</style>
