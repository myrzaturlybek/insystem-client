<template>
  <div>
    <product-header
      title="Головная ID 0000001"
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
      <add-info
        title="Информация о компании"
        :info="companyInfo"
        have-photo
      ></add-info>
      <add-info title="Регистрационные данные" :info="regInfo"></add-info>
      <product-add-photos title="Фотографии документов"></product-add-photos>
      <add-info title="График работы" :info="schedule"></add-info>
      <select-category
        title="Способ оплаты"
        :categories="paymentMethods"
        @selectCategory="selectPaymentMethod"
      ></select-category>
      <select-category
        title="Способ получения"
        :categories="getMethods"
        @selectCategory="selectGetMethod"
      ></select-category>
      <add-location
        title="Местоположение склада"
        address-label="Склад 1"
        add-button
      ></add-location>
    </template>

    <template v-if="tabValue == 'turnovers'">
      <product-list-filter
        title="Обороты компании"
        top-filter
        stats
      ></product-list-filter>
      <product-list></product-list>
    </template>

    <template v-if="tabValue == 'reviews'">
      <reviews-stats title="Рейтинг компании"></reviews-stats>
      <the-filter
        title="Отзывы о компании"
        title-size="small"
        :filters="reviewsFilters"
        :show-middle="false"
        class="mt16"
      ></the-filter>
      <review-item></review-item>
      <review-item show-comments></review-item>
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
          text: 'Revenj',
          title: 'Название компании',
        },
        {
          text: 'Товарищество с ограниченной ответственностью',
          title: 'Организационная форма',
        },
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
      companyInfo: [
        {
          type: 'textarea',
          name: 'description',
          value: '',
          label: 'Описание',
          placeholder: 'Введите описание',
          fullSize: 'true',
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
      schedule: [
        {
          type: 'select',
          name: 'position',
          label: 'Рабочие дни',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Пн - Пт',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'position',
          label: 'Рабочее время',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'С 10 до 18',
              },
            ],
          },
        },
      ],
      paymentMethods: [
        {
          title: 'Оплата онлайн',
          name: 'Банковской картой',
          selected: false,
        },
        {
          title: 'Оплата наличными',
          name: 'При получении',
          selected: false,
        },
        {
          title: 'Оплата по счету',
          name: 'Через банк',
          selected: false,
        },
      ],
      getMethods: [
        {
          title: 'Доставка курьером',
          name: 'Заказ приедет по указанному адресу',
          selected: false,
        },
        {
          title: 'Самовывоз',
          name: 'Можно будет забрать из пунктов выдачи',
          selected: false,
        },
        {
          title: 'Экспресс доставка',
          name: 'Стоимость доставки будет платная',
          selected: false,
        },
      ],
    }
  },
  methods: {
    selectPaymentMethod(category) {
      for (const method of this.paymentMethods) {
        method.selected = false
      }
      category.selected = !category.selected
    },
    selectGetMethod(category) {
      for (const method of this.getMethods) {
        method.selected = false
      }
      category.selected = !category.selected
    },
  },
}
</script>
