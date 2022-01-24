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
    <div class="row">
      <div v-if="haveAvatar" class="col-md-12 mt32">
        <input
          id="addAvatarInput"
          type="file"
          class="add-photo-input"
          @input="$emit('addAvatar', $event)"
        />
        <div class="add-avatar-button" @click="addAvatar">
          <i class="icon-plus"></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
      </div>
      <div v-if="havePhoto" class="col-md-12 mt32 add-info-photo">
        <div class="add-banner">
          <input
            id="addBannerInput"
            type="file"
            class="add-photo-input"
            @input="$emit('addBanner', $event)"
          />
          <div
            class="cabinet-input-file add-banner-input"
            @click="addPhotoBanner"
          >
            <div class="content">
              <i class="icon-plus"></i>
              Банер <br />
              min 1280x200px
            </div>
          </div>
        </div>
        <div class="add-photo">
          <input
            id="addPhotoInput"
            type="file"
            class="add-photo-input"
            @input="$emit('addPhoto', $event)"
          />
          <div
            class="cabinet-input-file add-photo-input-button"
            @click="addPhoto"
          >
            <div class="content">
              <i class="icon-plus"></i>
              Фото <br />
              min 320x320px
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="item in info"
        :key="item.id"
        :class="[
          { 'col-md-6': !item.fullSize },
          { 'col-md-12': item.fullSize },
          'mt32',
        ]"
      >
        <custom-input
          :type="item.type"
          :name="item.name"
          :value="item.value"
          :label="item.label"
          :select="item.select"
          :metrics="item.metrics"
          :placeholder="item.placeholder"
        ></custom-input>
      </div>
      <div v-if="help" class="mt16 p0-16">
        <p class="little-grey-text">{{ help }}</p>
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
    info: {
      type: Array,
      default: () => [],
    },
    havePhoto: Boolean,
    haveAvatar: Boolean,
    help: {
      type: String,
      default: null,
    },
  },
  methods: {
    addPhotoBanner() {
      document.getElementById('addBannerInput').click()
    },
    addPhoto() {
      document.getElementById('addPhotoInput').click()
    },
    addAvatar() {
      document.getElementById('addAvatarInput').click()
    },
  },
}
</script>
