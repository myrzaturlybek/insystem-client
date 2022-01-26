<template>
  <div>
    <product-header
      title="Создание услуги"
      :back-to="false"
      :actions="actions"
      :verified="false"
      show-verified
      show-bottom-line
    ></product-header>
    <select-category
      :categories="categories"
      @selectCategory="selectCategory"
    ></select-category>
    <product-add-photos title="Фотографии услуги"></product-add-photos>
    <add-info title="Информация об услуге" :info="info"></add-info>
    <add-info title="Стоимость" :info="priceInfo"></add-info>
  </div>
</template>

<script>
export default {
  name: 'NewServicePage',
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
      info: [
        {
          name: 'name',
          label: 'Название',
          placeholder: 'Введите название',
          value: '',
          fullSize: true,
        },
        {
          name: 'description',
          label: 'Описание',
          placeholder: 'Введите описание',
          value: '',
          fullSize: true,
          type: 'textarea',
        },
        {
          name: 'notes',
          label: 'Заметки',
          placeholder: 'Введите заметки',
          value: '',
          fullSize: true,
        },
      ],
      priceInfo: [
        {
          type: 'select',
          name: 'label',
          label: 'Ярлык',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Нет',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'discount',
          label: 'Скидка',
          value: '0',
          metrics: '%',
          select: {
            options: [
              {
                value: '0',
                text: '0',
              },
            ],
          },
        },
        {
          type: 'datetime-local',
          name: 'discountStart',
          label: 'Начало акции',
          value: null,
          placeholder: 'Укажите дату и время',
        },
        {
          type: 'datetime-local',
          name: 'discountEnd',
          label: 'Завершение акции',
          value: null,
          placeholder: 'Укажите дату и время',
        },
        {
          type: 'select',
          name: 'price',
          label: 'Цена',
          value: null,
          metrics: 'тг',
          select: {
            options: [
              {
                value: null,
                text: 'Укажите стоимость',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'measurementType',
          label: 'Вид измерения',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите значение',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'showroom',
          label: 'Шоурум',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите значение',
              },
            ],
          },
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
