<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-spec-title">Характеристики</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img src="/alert-triangle.svg" alt="" />
        </div>
      </div>
    </div>
    <div v-for="section in specs" :key="section.id">
      <div class="mt32">
        <div class="mb16 bold-text">{{ section.title }}</div>
        <div class="bold-grey-line"></div>
      </div>
      <div class="row">
        <div
          v-for="spec in section.specs"
          :key="spec.id"
          :class="[
            { 'col-md-6': !spec.fullSize },
            { 'col-md-12': spec.fullSize },
            'mt32',
          ]"
        >
          <custom-input
            :type="spec.type"
            :name="spec.name"
            :value="spec.value"
            :label="spec.label"
            :select="spec.select"
            :radios="spec.radios"
            :metrics="spec.metrics"
            :placeholder="spec.placeholder"
          ></custom-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    specs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
