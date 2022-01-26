<template>
  <div>
    <product-header
      title="Создание филиала"
      :actions="actions"
      :verified="false"
      show-verified
      :show-bottom="false"
      date-time-text="Создан"
      :back-to="false"
    ></product-header>
    <select-category
      :categories="categories"
      @selectCategory="selectCategory"
    ></select-category>
    <add-info title="Данные для входа" :info="loginDetails"></add-info>
    <add-info title="Контактное лицо" :info="personInfo" have-avatar></add-info>
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
  </div>
</template>

<script>
export default {
  name: 'CabinetRegistration',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Сохранить' }, { text: 'Отмена' }],
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
      loginDetails: [
        {
          name: 'phoneNumber',
          value: '+7 (700) 700 70 70',
          label: 'Номер телефона',
          placeholder: 'Введите номер',
        },
        {
          name: 'email',
          value: 'pup@gmail.com',
          label: 'Электронная почта',
          placeholder: 'Введите номер',
        },
        {
          name: 'name',
          value: null,
          label: 'Придумайте пароль',
          placeholder: '*******',
        },
        {
          name: 'organizationalForm',
          value: null,
          label: 'Повторите пароль',
          placeholder: '*******',
        },
        {
          name: 'password',
          value: 'Zxc123',
          label: 'Введите SMS код',
          placeholder: '----',
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
    selectCategory(category) {
      category.selected = !category.selected
    },
  },
}
</script>
