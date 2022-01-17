<template>
  <div>
    <product-header
      title="Заказ № 00000001"
      :date-time="new Date()"
      date-time-text="Создан"
      status-on-middle
      :statuses="statuses"
      :status="status"
      :actions="actions"
      :show-bottom="false"
      :middle-status-editable="false"
      @changeStatus="changeStatus"
      @toggle="toggle"
    ></product-header>
    <in-order></in-order>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      serviceName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
      serviceNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      categories: [
        {
          name: 'Смартфоны и гаджеты',
          icon: 'smartphone',
        },
        {
          name: 'Мобильные телефоны',
        },
        {
          name: 'Аксессуары для телефонов',
        },
      ],
      photos: [{ url: '/-_Featured_Image 2.svg' }],
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      status: 'inProcess',
      statuses: [
        {
          text: 'Новый',
          color: '#D80808',
          value: 'new',
        },
        {
          text: 'В обработке',
          color: '#FF9900',
          value: 'inProcess',
        },
        {
          text: 'Подтверждён',
          color: '#8F00FF',
          value: 'confirmed',
        },
        {
          text: 'Проверка оплаты',
          color: '#136BF0',
          value: 'paymentVerification',
        },
        {
          text: 'Собирается',
          color: '#FFE600',
          value: 'Collected',
        },
        {
          text: 'Выполнен',
          color: '#33B601',
          value: 'completed',
        },
        {
          text: 'Отменён',
          color: '#BBBBBC',
          value: 'canceled',
        },
        {
          text: 'Возврат',
          color: '#000000',
          value: 'return',
        },
      ],
    }
  },
  methods: {
    toggle(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.checked)
    },
    changeStatus(status) {
      this.status = status
    },
  },
}
</script>
