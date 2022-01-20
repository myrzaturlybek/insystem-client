<template>
  <div class="white-container">
    <div class="general-content-header-top">
      <h2 class="general-content-header-title">
        <img class="mr16 icon24" src="/chevron-leftvs.svg" alt="" />
        {{ title }}
      </h2>
      <div
        v-if="actions && actions.length > 0"
        class="general-content-greytexts"
      >
        <div
          v-for="action in actions"
          :key="action.id"
          class="general-content-greytext little-grey-text"
          @click="$emit('action', action.id)"
        >
          {{ action.text }}
        </div>
      </div>
      <div v-if="statusOnHeader" class="general-content-header-greytexts">
        <the-status
          :statuses="statuses"
          :value="status"
          :editable="false"
        ></the-status>
      </div>
    </div>
    <div
      v-if="showMiddle"
      class="general-content-header-middle general-body-item-top border-none p0"
    >
      <div class="little-grey-text">
        {{ dateTimeText }} {{ dateTimeFormat }}
      </div>
      <the-status
        v-if="statusOnMiddle"
        :value="status"
        :statuses="statuses"
        :editable="middleStatusEditable"
        @changeStatus="changeStatus"
      ></the-status>
    </div>
    <div
      v-if="bottomText"
      class="m16-0 general-body-item-middle border-none p0 bold-text"
    >
      {{ bottomText }}
    </div>
    <div v-if="showMiddleLine" class="sidebar-top-line"></div>
    <div
      v-if="showBottom"
      class="m16-0 general-body-item-middle border-none p0"
    >
      <div class="bold-text">Вкл / Выкл</div>
      <div class="general-body-item-middle-right h16">
        <input
          :checked="turnedOn"
          class="apple-switch"
          type="checkbox"
          @change="$emit('toggle', $event)"
        />
      </div>
    </div>

    <div v-if="tabsItems.length > 0" class="mt32">
      <product-tabs
        :tabs-items="tabsItems"
        :value="tabValue"
        @switch="$emit('tabSwitch', value)"
      ></product-tabs>
    </div>
    <div v-if="showBottomLine" class="sidebar-top-line"></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    turnedOn: Boolean,
    dateTime: Date,
    showStatus: Boolean,
    free: Boolean,
    showMiddle: {
      type: Boolean,
      default: true,
    },
    showBottom: {
      type: Boolean,
      default: true,
    },
    bottomText: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
    statuses: {
      type: Array,
      default: () => [],
    },
    statusOnHeader: {
      type: Boolean,
      default: false,
    },
    statusOnMiddle: {
      type: Boolean,
      default: false,
    },
    showMiddleLine: {
      type: Boolean,
      default: false,
    },
    showBottomLine: {
      type: Boolean,
      default: false,
    },
    dateTimeText: {
      type: String,
      default: 'Создан',
    },
    middleStatusEditable: {
      type: Boolean,
      default: true,
    },
    tabsItems: {
      type: Array,
      default: () => [],
    },
    tabValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    dateTimeFormat() {
      return moment(this.dateTime).format('DD.MM.YYYY / hh:mm')
    },
  },
  methods: {
    changeStatus(status) {
      this.$emit('changeStatus', status)
    },
  },
}
</script>
