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
    <div class="mt32">
      <div class="row">
        <div v-for="access in accesses" :key="access.id" class="col-md-6">
          <div class="d-flex justify-content-between py16">
            <p>{{ access.text }}</p>
            <apple-switch
              v-if="showSwitch"
              :checked="access.turnedOn"
              @switch="$emit('toggle', $event)"
            ></apple-switch>
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
    accesses: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
