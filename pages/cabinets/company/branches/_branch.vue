<template>
  <div>
    <product-header
      title="Филиал ID 0000001"
      :date-time="new Date()"
      date-time-text="Создана"
      :turned-on="true"
      turned-on-line
      :actions="actions"
      :verified="true"
      show-verified
      :tabs-items="tabsItems"
      :tab-value="tabValue"
      @tabSwitch="tabSwitch"
    ></product-header>

    <template v-if="tabValue == 'info'">
      <product-selected-categories
        :categories="categories"
      ></product-selected-categories>
      <product-schedule
        title="Данные для входа"
        :info="loginDetails"
      ></product-schedule>
      <add-info
        title="Контактное лицо"
        :info="personInfo"
        have-avatar
      ></add-info>
      <add-info title="Регистрационные данные" :info="regInfo"></add-info>
      <product-photos
        title="Фотографии документов"
        :photos="docs"
      ></product-photos>
      <product-schedule
        title="График работы"
        :info="schedule"
      ></product-schedule>
      <way-to title="Способ оплаты" :ways="paymentMethods"></way-to>
      <way-to title="Способ получения" :ways="waysToGet"></way-to>
      <product-location
        title="Местоположение склада"
        :locations="locations"
      ></product-location>
    </template>
  </div>
</template>

<script>
import cabinetDetailPages from '~/mixins/cabinet-detail-pages'

export default {
  mixins: [cabinetDetailPages],
  layout: 'cabinet',
  data() {
    return {
      reviewsFilters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      tabsItems: [
        { text: 'Информация', value: 'info' },
        { text: 'Обороты', value: 'turnovers' },
        { text: 'Отзывы', value: 'reviews' },
      ],
      tabValue: 'info',
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
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
      loginDetails: [
        {
          text: '+7 (700) 700 70 70',
          title: 'Номер телефона',
        },
        {
          text: 'pup@gmail.com',
          title: 'Электронная почта',
        },
        {
          text: 'Zxc123',
          title: 'Пароль',
        },
      ],
      personInfo: [
        {
          name: 'lastName',
          value: 'Иванов',
          label: 'Фамилия',
          placeholder: 'Введите фамилию',
        },
        {
          name: 'firstName',
          value: 'Иван',
          label: 'Имя',
          placeholder: 'Введите имя',
        },
        {
          name: 'surname',
          value: 'Иванович',
          label: 'Отчество',
          placeholder: 'Введите отчество',
        },
        {
          type: 'select',
          name: 'position',
          label: 'Должность',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
      ],
      regInfo: [
        {
          name: 'companyName',
          value: 'Revenj',
          label: 'Название компании',
          placeholder: 'Введите название',
        },
        {
          name: 'copanyOrgForm',
          value: null,
          label: 'Организационная форма',
          placeholder: 'Введите данные',
        },
        {
          type: 'select',
          name: 'position',
          label: 'Дата регистрации',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'position',
          label: 'Плательщик НДС',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
        {
          name: 'copanyOrgForm',
          value: null,
          label: 'ИИН компании',
          placeholder: 'Введите данные',
        },
        {
          name: 'copanyOrgForm',
          value: null,
          label: 'Расчетный счет',
          placeholder: 'Введите данные',
        },
        {
          name: 'copanyOrgForm',
          value: null,
          label: 'Название банка',
          placeholder: 'Введите данные',
        },
        {
          name: 'copanyOrgForm',
          value: null,
          label: 'БИК банка',
          placeholder: 'Введите данные',
        },
        {
          type: 'select',
          name: 'position',
          label: 'Юридический адрес',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'position',
          label: 'Фактический адрес',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'position',
          label: 'Страна',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'position',
          label: 'Город',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите должность',
              },
            ],
          },
        },
      ],
      docs: [{ url: '/doc.png' }, { url: '/doc.png' }, { url: '/doc2.png' }],
      schedule: [
        {
          title: 'Рабочее время',
          text: 'С 10 до 18',
        },
        {
          title: 'Рабочие дни',
          text: 'Пн - Пт',
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
          isSelected: true,
        },
        {
          title: 'Экспресс доставка',
          text: 'Стоимость доставки будет платная',
          isSelected: true,
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
          isSelected: true,
        },
        {
          title: 'Оплата по счету',
          text: 'Через банк',
          isSelected: true,
        },
      ],
      locations: [
        {
          title: 'Склад 1',
          address: 'Раимбека 369, уг. ул. Брусиловского, дом 33',
        },
        {
          title: 'Склад 2',
          address: 'Раимбека 369, уг. ул. Брусиловского, дом 33',
        },
      ],
    }
  },
}
</script>
