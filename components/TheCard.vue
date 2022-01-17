<template>
  <div class="employees-body-item general-body-item white-container2">
    <slot v-if="hasSlotHeader" name="header"></slot>
    <slot v-if="hasSlotBody" name="body"></slot>
    <slot v-if="hasSlotFooter" name="footer"></slot>
  </div>
</template>

<script>
export default {
  computed: {
    hasSlotHeader() {
      return this.$slots.header
    },
    hasSlotBody() {
      return this.$slots.body
    },
    hasSlotFooter() {
      return this.$slots.footer
    },
  },
}
</script>
