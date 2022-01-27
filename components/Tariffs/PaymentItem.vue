<template>
  <div class="mt16 white-container">
    <div class="row">
      <div class="col-md-5">
        <p class="bold-text">{{ title }}</p>
      </div>
      <div class="col-md-4">
        {{ dateTimeFormat }}
      </div>
      <div class="col-md-3">
        <p>{{ payment.toLocaleString('ru') }} {{ currency }}</p>
      </div>
    </div>
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
    dateTime: {
      type: Date,
      default: () => {
        return new Date()
      },
    },
    payment: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'тг',
    },
  },
  computed: {
    dateTimeFormat() {
      return moment(this.dateTime).format('DD.MM.YYYY / hh:mm')
    },
  },
}
</script>
