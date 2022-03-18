<template>
  <div
    v-if="tabsItems && tabsItems.length > 0"
    class="general-content-header-greyswitch-cont"
  >
    <div
      v-for="(item, index) in tabsItems"
      :key="item.id"
      :class="[
        'greyswitch-item',
        {
          'general-content-header-greyswitch-checked': value == item.value,
          'general-content-header-greyswitch-afterchecked': value != item.value,
        },
      ]"
      @click="$emit('switch', item.value)"
    >
      <p :class="[{ 'border-right-gray': nextItemChecked(index) }]">
        {{ item.text }}
      </p>
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
  methods: {
    nextItemChecked(id) {
      if (id !== this.tabsItems.length - 1) {
        return this.value === this.tabsItems[id + 1].value
      }
    },
  },
}
</script>
