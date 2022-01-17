<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Выбранные категории</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/circle check fullvs.svg" alt="" />
        </div>
      </div>
    </div>
    <div v-if="categories" class="black-rectangle-cont mt32">
      <div
        v-for="category in categories"
        :key="category.id"
        class="black-rectangle categories-black-rectangle df"
      >
        <div class="df ml16 general-body-item-top-right">
          <img
            v-if="category.icon"
            class="hw24 icon24"
            :src="`/${category.icon}.svg`"
          />
          <div class="white ml6">{{ category.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
