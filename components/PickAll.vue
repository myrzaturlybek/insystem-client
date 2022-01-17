<template>
  <div class="general-content-header-all mt32">
    <div class="general-content-header-all-left">
      <input
        type="checkbox"
        class="inputs"
        :checked="checked"
        @change="$emit('check', $event)"
      />
      <div class="ml16 bold-text">{{ text }}</div>
    </div>
    <div class="general-content-greytexts">
      <div
        v-for="action in actions"
        :key="action.id"
        class="general-content-greytext little-grey-text"
        :style="{ color: action.color || '#bbbbbc' }"
        @click="$emit('action', action.method)"
      >
        {{ action.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Выбрать все',
    },
    actions: {
      type: Array,
      default: () => [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
    },
  },
}
</script>
