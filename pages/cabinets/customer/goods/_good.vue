<template>
  <div>
    <product-header
      title="Товар ID 0000001"
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
    <product-photos title="Фотографии услуги" :photos="photos"></product-photos>
    <product-info
      title="Информация об услуге"
      :name="serviceName"
      :description="serviceDescription"
      :notes="serviceNotes"
    ></product-info>
    <product-price></product-price>
    <product-specs></product-specs>
    <product-list-filter></product-list-filter>
    <product-list></product-list>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      statuses: [
        { text: 'В наличии', color: '#33B601', value: 'inStock' },
        { text: 'Нет в наличии', color: '#D80808', value: 'notAvailable' },
      ],
      status: 'inStock',
      serviceName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      serviceDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
      serviceNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      photos: [{ url: '/-_Featured_Image 2.svg' }],
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
