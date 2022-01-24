<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div class="sidebar-top-left">
        <div class=""></div>
      </div>
    </div>
    <div class="mt32">
      <div class="d-flex cursor-pointer">
        <i class="icon-plus little-grey-text"></i>
        <p class="little-grey-text ml16">Добавить</p>
      </div>
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
}
</script>
