<template>
  <div>
    <product-header
      title="Клиент ID 00000001"
      :actions="actions"
      bottom-text="Скидка клиенту: 5 %"
      show-bottom-line
      :show-bottom="false"
    ></product-header>
    <client-card></client-card>
    <contact-faces></contact-faces>
    <product-schedule
      title="Регистрационные данные"
      :info="regInfo"
    ></product-schedule>
    <product-photos title="Документы" :photos="docs"></product-photos>
    <product-list-filter
      title="Мои заказы"
      top-filter
      stats
    ></product-list-filter>
    <product-list></product-list>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
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
}
</script>
