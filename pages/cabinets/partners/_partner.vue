<template>
  <div>
    <product-header
      title="Партнёр ID 00000001"
      :actions="actions"
      :show-bottom="false"
      bottom-text="Моя скидка: 25 %"
      show-middle-line
      :tabs-items="tabsItems"
      :tab-value="tabValue"
      @tabSwitch="tabSwitch"
    ></product-header>
    <template v-if="tabValue == 'company'">
      <client-card title="Карточка партнёра"></client-card>
      <contact-faces></contact-faces>
      <product-schedule
        title="Регистрационные данные"
        :info="regInfo"
      ></product-schedule>
      <product-photos title="Документы" :photos="docs"></product-photos>
      <product-location title="Адрес склада"></product-location>
    </template>

    <template v-if="tabValue == 'goods'">
      <the-filter
        title="Выбрать все товары"
        :show-middle="false"
        :filters="filters"
        :checked="false"
        class="mt16"
      ></the-filter>
      <product-list-item v-for="i in 7" :key="i"></product-list-item>
    </template>

    <template v-if="tabValue == 'circulations'">
      <product-list-filter
        title="Мои заказы"
        top-filter
        stats
      ></product-list-filter>
      <product-list></product-list>
    </template>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      tabsItems: [
        { text: 'Компания', value: 'company' },
        { text: 'Товары', value: 'goods' },
        { text: 'Обороты', value: 'circulations' },
      ],
      tabValue: 'company',
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
      filters: ['Категория', 'Бренд', 'Модель', 'Цена', 'Дата', 'Статус'],
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
