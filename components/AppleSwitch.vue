<template>
  <input
    :checked="checked"
    class="apple-switch"
    type="checkbox"
    @change="$emit('switch', $event)"
  />
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
