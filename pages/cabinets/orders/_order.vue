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
      show-bottom-line
      :bottom-right-text="false"
      :bottom-text="'Моя скидка: 5%'"
      :middle-status-editable="false"
      @changeStatus="changeStatus"
      @toggle="toggle"
    ></product-header>
    <order-processing></order-processing>
    <order-processing-form></order-processing-form>
    <order-feedback></order-feedback>
    <order-feedback-form></order-feedback-form>
    <order-processing
      :show-middle="false"
      success-button-text="Принимаю"
      cancel-button-text="Не принимаю"
    ></order-processing>
    <in-order></in-order>
    <way-to title="Способ получения" :ways="waysToGet"></way-to>
    <product-location title="Адрес доставки"></product-location>
    <product-schedule
      title="Условия доставки"
      :info="deliveryTerms"
    ></product-schedule>
    <product-schedule
      title="Данные получателя"
      :info="recipientData"
      :notes="recipientNotes"
    ></product-schedule>
    <way-to title="Способ оплаты" :ways="paymentMethods"></way-to>
    <product-schedule
      title="Дополнительно"
      :info="additionally"
    ></product-schedule>
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
      deliveryTerms: [
        {
          title: 'Дата доставки',
          text: '09.08.2019',
        },
        {
          title: 'Время доставки',
          text: '12:00',
        },
      ],
      recipientData: [
        {
          title: 'Имя и Фамилия',
          text: 'Анна Морана',
        },
        {
          title: 'Сотовый телефон',
          text: '+7 777 777 77 77',
        },
      ],
      recipientNotes:
        'Пожалуйста, указывайте реальные данные — у вас могут попросить паспорт, прежде чем вручить оплаченный заказ.',

      waysToGet: [
        {
          title: 'Доставка курьером',
          text: 'Заказ приедет по указанному адресу',
          isSelected: true,
        },
        {
          title: 'Самовывоз',
          text: 'Можно будет забрать из пунктов выдачи',
        },
        {
          title: 'Экспресс доставка',
          text: 'Стоимость доставки будет платная',
        },
      ],
      paymentMethods: [
        {
          title: 'Оплата онлайн',
          text: 'Банковской картой',
          isSelected: true,
        },
        {
          title: 'Оплата наличными',
          text: 'При получении',
        },
        {
          title: 'Оплата по счету',
          text: 'Через банк',
        },
      ],
      additionally: [
        {
          title: 'Ваш комментарий',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh cras praesent quis pharetra vehicula mattis ut erat.',
          fullSize: true,
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
