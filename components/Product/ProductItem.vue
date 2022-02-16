<template>
  <the-card>
    <template #header>
      <product-item-header
        :url="url"
        :title="title"
        :date-time="dateTime"
        :status="status"
        :statuses="statuses"
        :checked="picked"
        :show-checkbox="showCheckbox"
        @changeStatus="changeStatus"
        @check="
          (event) => {
            $emit('pick', event)
          }
        "
      ></product-item-header>
    </template>

    <template #body>
      <div class="general-body-item-middle">
        <div class="general-body-item-middle-left">
          <div class="general-body-item-img">
            <img class="img84" :src="img" />
          </div>
          <div class="general-body-item-img-info showcase-body-item-img-info">
            <div class="general-body-item-img-name showcase-body-img-name">
              {{ price }}
            </div>
            <div
              class="general-body-item-img-status showcase-body-item-img-status"
            >
              {{ description }}
            </div>
            <div class="showcase-body-item-img-amount-cont">
              <div class="showcase-body-item-img-amount">{{ subtext }}</div>
              <div
                class="
                  showcase-body-item-img-amount2 showcase-body-item-img-amount
                "
              >
                {{ subtext2 }}
              </div>
            </div>
          </div>
        </div>
        <div class="general-body-item-middle-right">
          <apple-switch
            v-if="checked !== null"
            :checked="checked"
            @switch="$emit('check', $event)"
          ></apple-switch>
        </div>
      </div>
    </template>
  </the-card>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ProductItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    dateTime: Date,
    status: {
      type: String,
      default: null,
    },
    price: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    subtext: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: null,
    },
    img: {
      type: String,
      default: '',
    },
    showStatus: Boolean,
    url: {
      type: String,
      default: '',
    },
    subtext2: {
      type: String,
      default: '',
    },
    statuses: {
      type: Array,
      default: () => [
        { text: 'Свободен', color: '#33B601', value: 'free' },
        { text: 'Занят', color: '#D80808', value: 'busy' },
      ],
    },
    picked: {
      type: Boolean,
      default: false,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
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
