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
    <div class="row">
      <div
        v-for="item in info"
        :key="item.id"
        :class="[
          { 'col-md-6': !item.fullSize },
          { 'col-md-12': item.fullSize },
          'mt32',
        ]"
      >
        <div class="bold-text mb16">{{ item.title }}</div>
        <div class="mb16">{{ item.text }}</div>
        <div class="sidebar-top-line"></div>
      </div>
    </div>
    <div v-if="notes" class="mt16 little-grey-text">
      {{ notes }}
    </div>
    <div v-if="stats" class="mt16 d-flex stats">
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="d-flex align-items-center"
      >
        <img :src="stat.icon" />
        <p class="bold-text ml16">{{ stat.text }} &nbsp;</p>
        <p>{{ stat.count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'График работы',
    },
    info: {
      type: Array,
      default: () => [
        {
          title: 'Рабочие дни',
          text: 'Пн - Пт',
        },
        {
          title: 'Рабочее время',
          text: 'С 10 до 18',
        },
      ],
    },
    notes: {
      type: String,
      default: null,
    },
    stats: {
      type: Array,
      default: null,
    },
  },
}
</script>
