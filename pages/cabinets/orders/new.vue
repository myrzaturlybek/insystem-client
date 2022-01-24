<template>
  <div>
    <product-header
      title="Создание заказа"
      :back-to="false"
      :actions="actions"
      show-bottom-line
      status-on-middle
      :statuses="statuses"
      :status="status"
      bottom-text="Скидка клиенту: 0"
      :show-bottom="false"
    ></product-header>
    <add-sub-item title="Комментарии к заказу"></add-sub-item>
    <add-sub-item title="Клиент"></add-sub-item>
    <add-sub-item title="Товар"></add-sub-item>
    <add-sub-item title="Услуга"></add-sub-item>
    <way-to title="Способ получения" :ways="waysToGet"></way-to>
    <add-location title="Адрес доставки" add-button></add-location>
    <add-info title="Условия доставки" :info="deliveryTerms"></add-info>
    <add-info
      title="Условия доставки"
      :info="deliveryTerms"
      help="Пожалуйста, указывайте реальные данные — у вас могут попросить паспорт, прежде чем вручить оплаченный заказ."
    ></add-info>
    <way-to title="Способ оплаты" :ways="paymentMethods"></way-to>
    <add-info title="Дополнительно" :info="additionally"></add-info>
  </div>
</template>

<script>
export default {
  name: 'NewOrderPage',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Сохранить' }, { text: 'Отмена' }],
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
      status: 'new',
      categories: [
        {
          name: 'Смартфоны и гаджеты',
          icon: 'icon-smartphone',
          selected: false,
        },
        {
          name: 'Ноутбуки и компьютеры',
          icon: 'icon-monitor',
          selected: false,
        },
        {
          name: 'Бытовая техника',
          icon: 'icon-speaker',
          selected: false,
        },
        {
          name: 'Техника для кухни',
          icon: 'icon-hard-drive',
          selected: false,
        },
      ],
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
      deliveryTerms: [
        {
          type: 'select',
          name: 'showcaseType',
          label: 'Дата доставки',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите дату',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'showcaseType',
          label: 'Время доставки',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите дату',
              },
            ],
          },
        },
      ],
      additionally: [
        {
          name: 'description',
          label: 'Ваш комментарий',
          placeholder: 'Введите описание',
          value:
            'Расскажите, как быстрее добраться к вам, укажите код домофона или другую информацию.',
          fullSize: true,
        },
      ],
    }
  },
  methods: {
    selectCategory(category) {
      category.selected = !category.selected
    },
  },
}
</script>
