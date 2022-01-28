<template>
  <div>
    <product-header
      title="Тарифы"
      :back-to="false"
      :actions="actions"
      date-time-text="Активен до"
      :date-time="new Date()"
      :show-bottom="false"
      ballance="100 000 тг"
      show-middle-line
      @action="action"
    ></product-header>
    <the-filter
      title="История платежей"
      :filters="filters"
      :show-middle="false"
      class="mt16"
    ></the-filter>
    <payment-item
      v-for="i in 6"
      :key="i"
      title="Premium"
      :payment="100000"
    ></payment-item>
  </div>
</template>

<script>
export default {
  name: 'TariffsIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Пополнить', method: this.toReplenish }],
      filters: ['Пакет', 'Дата', 'Сумма'],
    }
  },
  methods: {
    toReplenish() {
      this.$router.push('tariffs/replenish')
    },
    action(method) {
      method()
    },
  },
}
</script>
