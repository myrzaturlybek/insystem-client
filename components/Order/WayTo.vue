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
    <div class="black-rectangle-cont mt32">
      <div
        v-for="way in ways"
        :key="way.id"
        :class="['way-to-get', { active_way: way.isSelected }]"
      >
        <p :class="['bold-text', 'ml16', { 'text-white': way.isSelected }]">
          {{ way.title }}
        </p>
        <p class="little-grey-text ml16 mt16">
          {{ way.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ways: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
