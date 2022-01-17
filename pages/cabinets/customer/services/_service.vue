<template>
  <div>
    <product-header
      title="Услуга ID 00000001"
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
    <product-photos title="Фотографии услуги" :photos="photos"></product-photos>
    <product-info
      title="Информация об услуге"
      :name="serviceName"
      :description="serviceDescription"
      :notes="serviceNotes"
    ></product-info>
    <product-price></product-price>
    <product-list-filter
      title="Список услуг"
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
      serviceName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
      serviceNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
      photos: [{ url: '/-_Featured_Image 2.svg' }],
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      status: 'free',
      statuses: [
        { text: 'Свободен', color: '#33B601', value: 'free' },
        { text: 'Занят', color: '#D80808', value: 'busy' },
      ],
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
