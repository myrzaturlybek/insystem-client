<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/circle check fullvs.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="services-photos-cont mt32">
      <div v-for="photo in photos" :key="photo.id">
        <img class="img187" :src="photo.url" />
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
    photos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
