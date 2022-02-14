<template>
  <div>
    <product-header
      title="Партнёр ID 00000001"
      status-on-header
      :statuses="statuses"
      :status="status"
      :show-bottom="false"
      bottom-text="Моя скидка: 25 %"
      show-middle-line
      :tabs-items="tabsItems"
      :tab-value="tabValue"
      partner-buttons
      @tabSwitch="tabSwitch"
    ></product-header>
    <client-card title="Карточка партнёра"></client-card>
    <contact-faces></contact-faces>
    <product-schedule
      title="Регистрационные данные"
      :info="regInfo"
    ></product-schedule>
    <product-photos title="Документы" :photos="docs"></product-photos>
    <product-location title="Адрес склада"></product-location>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      tabsItems: [
        { text: 'Компания', value: 'company' },
        { text: 'Товары', value: 'goods' },
      ],
      tabValue: 'company',
      statuses: [
        {
          text: 'Запрос отправлен',
          color: '#BBBBBC',
          value: 'sendRequest',
          footerTemplate: `<div class="partner-footer_button cancel">Отменить</div>`,
        },
        {
          text: 'В ожидании',
          color: '#FF9900',
          value: 'waiting',
          footerTemplate: `<div class="partner-footer_button confirm">Потвердить</div>
              <div class="partner-footer_button deny">Отказать</div>`,
        },
        {
          text: 'Подтверждён',
          color: '#33B601',
          value: 'confirmed',
          footerTemplate: `<div class="partner-footer_button cancel">Удалить</div>`,
        },
        {
          text: 'Отказано',
          color: '#D80808',
          value: 'denied',
          footerTemplate: `<div class="partner-footer_button repeat">Повторить</div>`,
        },
      ],
      status: 'sendRequest',
      regInfo: [
        {
          title: 'Название компании',
          text: 'Revenj',
        },
        {
          title: 'Организационная форма',
          text: 'Товарищество с ограниченной ответственностью',
        },
        {
          title: 'Дата регистрации',
          text: '20.02.2020',
        },
        {
          title: 'Плательщик НДС',
          text: 'С НДС',
        },
        {
          title: 'ИИН компании',
          text: '152 258 456 523',
        },
        {
          title: 'Расчетный счет',
          text: 'KZ18465165498465654155',
        },
        {
          title: 'Название банка',
          text: 'Центркредит',
        },
        {
          title: 'БИК банка',
          text: 'KCJNKZKX',
        },
        {
          title: 'Юридический адрес',
          text: 'г.Алматы, ул.Сейфуллина 505, офис 333',
        },
        {
          title: 'Фактический адрес',
          text: 'г.Алматы, ул.Сейфуллина 505, офис 333',
        },
        {
          title: 'Страна',
          text: 'Казахстан',
        },
        {
          title: 'Город',
          text: 'Алматы',
        },
      ],
      docs: [{ url: '/doc.png' }, { url: '/doc.png' }, { url: '/doc2.png' }],
    }
  },
  methods: {
    tabSwitch(value) {
      if (this.tabValue !== value) {
        this.tabValue = value
      }
    },
  },
}
</script>
