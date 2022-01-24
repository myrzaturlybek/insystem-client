<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/alert-triangle.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="mt32 services-photos-cont">
      <div class="add-photo-container">
        <input
          id="addPhotoInput"
          type="file"
          class="add-photo-input"
          @input="$emit('addPhoto', $event)"
        />
        <div class="cabinet-input-file icon-plus" @click="addPhoto"></div>
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
  methods: {
    addPhoto() {
      document.getElementById('addPhotoInput').click()
    },
  },
}
</script>
