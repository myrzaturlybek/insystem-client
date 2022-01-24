<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Выберите категорию</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/alert-triangle.svg" alt="" />
        </div>
      </div>
    </div>
    <div v-if="categories" class="black-rectangle-cont mt32">
      <div
        v-for="category in categories"
        :key="category.id"
        :class="[
          'df',
          'select-category-option',
          { 'select-category-option-selected': category.selected },
        ]"
        @click="$emit('selectCategory', category)"
      >
        <div v-if="category.icon" :class="[category.icon, 'category-icon']" />
        <div
          :class="['ml16', { 'select-category-option-text': category.icon }]"
        >
          <p>{{ category.name }}</p>
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
