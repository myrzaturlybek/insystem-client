<template>
  <div>
    <product-header
      title="Создание шоурума"
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
    <add-info title="Информация о шоуруме" :info="info"></add-info>
    <product-add-photos title="Фотографии шоурума"></product-add-photos>
    <add-showcase></add-showcase>
    <add-location></add-location>
    <add-info title="График работы" :info="schedule"></add-info>
  </div>
</template>

<script>
export default {
  name: 'NewShowroomPage',
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
          type: 'select',
          name: 'roomType',
          label: 'Тип помещения',
          value: 'mall',
          select: {
            options: [
              {
                value: 'mall',
                text: 'Торговый центр',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'roomArea',
          label: 'Площадь помещения',
          value: '100',
          select: {
            options: [
              {
                value: '100',
                text: '100 м2',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'roomCount',
          label: 'Количество комнат',
          value: '4',
          select: {
            options: [
              {
                value: '4',
                text: '4 шт',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'roomHight',
          label: 'Высота потолков',
          value: '3',
          select: {
            options: [
              {
                value: '3',
                text: '3 м',
              },
            ],
          },
        },
      ],
      schedule: [
        {
          type: 'select',
          name: 'workingDay',
          label: 'Рабочие дни',
          value: 'mon-fri',
          select: {
            options: [
              {
                value: 'mon-fri',
                text: 'Пн - Пт',
              },
            ],
          },
        },
        {
          type: 'select',
          name: 'workingTime',
          label: 'Рабочее время',
          value: '10-18',
          select: {
            options: [
              {
                value: '10-18',
                text: 'С 10 до 18',
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
