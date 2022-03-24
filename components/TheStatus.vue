<template>
  <div style="display: flex; justify-content: flex-end">
    <p :style="{ color: colorByValue }" class="mr16">
      {{ textByValue }}
    </p>
    <div :style="{ borderColor: colorByValue }" class="showcase-circle"></div>
    <div v-if="editable" class="general-content-header-arrowdown">
      <i
        v-show="!showDropdown"
        class="icon-chevron-down little-grey-text ml16"
        @click="toggleDropdown"
      />
      <i
        v-show="showDropdown"
        class="icon-chevron-up little-grey-text ml16"
        @click="toggleDropdown"
      />
      <div v-show="showDropdown" class="white-container dropdown">
        <div
          v-for="status in statuses"
          :key="status.id"
          class="dropdown-item-container"
          @click="changeStatus(status)"
        >
          <the-status
            :value="status.value"
            class="dropdown-items"
            :editable="false"
            :text="status.text"
            :color="status.color"
          ></the-status>
          <div>
            <img
              :class="{ hide: status.value != value }"
              src="/circleCheck.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStatus',
  props: {
    color: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    editable: {
      type: Boolean,
      default: true,
    },
    statuses: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      showDropdown: false,
    }
  },
  computed: {
    colorByValue() {
      if (this.color) {
        return this.color
      }
      return this.statuses.find((s) => s.value === this.value).color
    },
    textByValue() {
      if (this.text !== '') {
        return this.text
      }
      return this.statuses.find((s) => s.value === this.value).text
    },
  },
  methods: {
    toggleDropdown(e) {
      this.showDropdown = !this.showDropdown
    },
    changeStatus(status) {
      this.$emit('changeStatus', status.value)
      this.showDropdown = false
    },
  },
}
</script>


