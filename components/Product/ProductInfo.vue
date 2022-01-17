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
    <div>
      <div v-if="banner" class="mt32">
        <img class="product-info-image" :src="banner" alt="brand" />
      </div>
      <div class="mt32">
        <div class="bold-text mb16">Название</div>
        <div class="mb16">
          {{ name }}
        </div>
        <div class="sidebar-top-line"></div>
      </div>
      <div class="mt32">
        <div class="bold-text mb16">Описание</div>
        <div class="mb16">
          {{ description }}
        </div>
        <div class="sidebar-top-line"></div>
      </div>
      <div v-if="notes" class="mt32">
        <div class="bold-text mb16">Заметки</div>
        <div class="mb16">
          {{ notes }}
        </div>
        <div class="sidebar-top-line"></div>
      </div>
      <div v-if="otherInfo.length > 0" class="row">
        <div v-for="info in otherInfo" :key="info.id" class="col-md-6 mt32">
          <div class="bold-text mb16">{{ info.title }}</div>
          <div class="mb16">
            {{ info.text }}
          </div>
          <div class="sidebar-top-line"></div>
        </div>
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
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    notes: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: null,
    },
    otherInfo: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
