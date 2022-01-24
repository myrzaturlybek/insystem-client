<template>
  <div>
    <product-header
      title="Создание товара"
      :back-to="false"
      :actions="actions"
      :verified="false"
      show-bottom-line
    ></product-header>
    <select-category
      :categories="categories"
      @selectCategory="selectCategory"
    ></select-category>
    <product-add-photos title="Фотографии товара"></product-add-photos>
    <add-info title="Информация о товаре" :info="info"></add-info>
    <add-info title="Стоимость" :info="priceInfo"></add-info>
    <add-specs :specs="specs"></add-specs>
  </div>
</template>

<script>
export default {
  name: 'NewGoodPage',
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
          name: 'vendorCode',
          label: 'Артикул',
          placeholder: 'Введите артикул',
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
          name: 'remains',
          label: 'Укажите наличие',
          metrics: 'шт',
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
          name: 'warehouse',
          label: 'Склад',
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
      specs: [
        {
          title: 'Основные',
          specs: [
            {
              type: 'select',
              name: 'manufacturer',
              label: 'Производитель',
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
              name: 'conuntry',
              label: 'Страна',
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
              name: 'model',
              label: 'Модель',
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
              name: 'color',
              label: 'Цвет',
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
        },
        {
          title: 'Габариты и вес',
          specs: [
            {
              type: 'select',
              name: 'width',
              label: 'Ширина',
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
              name: 'color',
              label: 'Толщина',
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
              name: 'color',
              label: 'Высота',
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
              name: 'color',
              label: 'Вес',
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
        },
        {
          title: 'Общие',
          specs: [
            {
              type: 'select',
              name: 'caseProtection',
              label: 'Защита корпуса',
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
              name: 'protectionDegree',
              label: 'Степень защиты',
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
              type: 'radio',
              name: '2SimSupport',
              label: 'Степень защиты',
              value: null,
              radios: [
                {
                  name: '2SimSupport',
                  label: 'Да',
                  value: 'yes',
                },
                {
                  name: '2SimSupport',
                  label: 'Нет',
                  value: 'no',
                },
              ],
            },
            {
              type: 'select',
              name: 'simType',
              label: 'Тип SIM карты',
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
