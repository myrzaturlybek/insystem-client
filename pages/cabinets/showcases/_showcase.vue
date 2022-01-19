<template>
  <div>
    <product-header
      title="Витрина ID 00000001"
      :date-time="new Date()"
      date-time-text="Создана"
      :turned-on="true"
      status-on-middle
      show-bottom-line
      :statuses="statuses"
      :status="status"
      :actions="actions"
      @changeStatus="changeStatus"
      @toggle="toggle"
    ></product-header>
    <product-selected-categories
      :categories="categories"
    ></product-selected-categories>
    <product-info
      title="Информация о витрине"
      :name="showcaseName"
      :description="showcaseDescription"
      :other-info="otherInfo"
    ></product-info>
    <product-photos
      title="Фотографии витрины"
      :photos="photos"
    ></product-photos>
    <product-price></product-price>
    <product-specs></product-specs>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      statuses: [
        { text: 'Есть места', color: '#33B601', value: 'havePlaces' },
        { text: 'Нет мест', color: '#D80808', value: 'noPlaces' },
      ],
      status: 'havePlaces',
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      photos: [{ url: '/-_Featured_Image 2.svg' }],
      otherInfo: [
        {
          title: 'Тип помещения',
          text: 'Торговый центр',
        },
        {
          title: 'Площадь помещения',
          text: '100 м2',
        },
        {
          title: 'Количество комнат',
          text: '4 шт',
        },
        {
          title: 'Высота потолков',
          text: '3 м',
        },
      ],
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
      showcaseName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      showcaseDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
    }
  },
  methods: {
    toggle(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.checked)
    },
    changeStatus(status) {
      this.status = status
    },
  },
}
</script>
