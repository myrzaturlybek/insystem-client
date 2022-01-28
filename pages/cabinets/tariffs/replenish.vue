<template>
  <div>
    <product-header
      title="Пополнение баланса"
      :back-to="false"
      :actions="actions"
      date-time-text="Дата"
      :date-time="new Date()"
      :show-bottom="false"
    ></product-header>
    <choose-tariff></choose-tariff>
    <choose-payment></choose-payment>
  </div>
</template>

<script>
export default {
  name: 'ReplenishIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Отмена' }],
    }
  },
}
</script>
