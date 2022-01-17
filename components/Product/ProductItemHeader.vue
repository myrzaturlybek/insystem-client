<template>
  <div class="general-body-item-top">
    <div class="general-body-item-top-left">
      <nuxt-link :to="url">
        <h3 class="general-body-item-title">
          <input
            v-show="showCheckbox"
            type="checkbox"
            :checked="checked"
            class="inputs mr16"
            @change="$emit('check', $event)"
          />
          {{ title }}
        </h3></nuxt-link
      >
      <div v-if="dateTime" class="general-body-item-date little-grey-text">
        {{ dateTimeFormat }}
      </div>
    </div>
    <div class="general-body-item-top-right">
      <the-status
        v-if="status !== null"
        :value="status"
        :statuses="statuses"
        @changeStatus="changeStatus"
      ></the-status>
      <p v-if="rightText" class="bold-text">
        {{ rightText }}
      </p>
      <input
        v-if="showSwitch"
        class="apple-switch"
        type="checkbox"
        :checked="switchOn"
        @change="$emit('switch', $event)"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ProductItemHeader',
  props: {
    url: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    dateTime: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
    statuses: {
      type: Array,
      default: () => [
        { text: 'Свободен', color: '#33B601', value: 'free' },
        { text: 'Занят', color: '#D80808', value: 'busy' },
      ],
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    rightText: {
      type: String,
      default: null,
    },
    showSwitch: {
      type: Boolean,
      default: false,
    },
    switchOn: {
      type: Boolean,
      default: false,
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
