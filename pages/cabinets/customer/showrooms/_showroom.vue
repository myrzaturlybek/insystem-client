<template>
  <div>
    <product-header
      title="Шоурум ID 00000001"
      :date-time="new Date()"
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
      title="Информация о шоуруме"
      :name="showroomName"
      :description="showroomDescription"
      :other-info="otherInfo"
    ></product-info>
    <product-photos
      title="Фотографии шоурума"
      :photos="photos"
    ></product-photos>
    <showcases-list></showcases-list>
    <product-location
      title="Адрес шоурума"
      country-name="Казахстан"
      city-name="Алматы"
    ></product-location>
    <product-schedule></product-schedule>
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
      showroomName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      showroomDescription:
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
