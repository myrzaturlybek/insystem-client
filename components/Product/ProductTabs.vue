<template>
  <div
    v-if="tabsItems && tabsItems.length > 0"
    class="general-content-header-greyswitch-cont"
  >
    <div
      v-for="item in tabsItems"
      :key="item.id"
      :class="[
        {
          'general-content-header-greyswitch-checked': value == item.value,
          'general-content-header-greyswitch-afterchecked': value != item.value,
        },
      ]"
      @click="$emit('switch', item.value)"
    >
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabsItems: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
