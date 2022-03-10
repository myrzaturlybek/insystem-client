<template>
  <div>
    <product-header
      title="Услуга ID 00000001"
      :date-time="new Date()"
      date-time-text="Создана"
      :turned-on="true"
      turned-on-line
      status-on-middle
      :statuses="statuses"
      :status="status"
      :actions="actions"
      :tabs-items="tabsItems"
      :tab-value="tabValue"
      @tabSwitch="tabSwitch"
      @changeStatus="changeStatus"
      @toggle="toggle"
    ></product-header>
    <template v-if="tabValue == 'info'">
      <product-selected-categories
        :categories="categories"
      ></product-selected-categories>
      <product-photos
        title="Фотографии услуги"
        :photos="photos"
      ></product-photos>
      <product-info
        title="Информация об услуге"
        :name="serviceName"
        :description="serviceDescription"
        :notes="serviceNotes"
      ></product-info>
      <product-price></product-price>
    </template>

    <template v-if="tabValue == 'orders'">
      <product-list-filter
        title="Список услуг"
        top-filter
        stats
      ></product-list-filter>
      <product-list></product-list>
    </template>

    <template v-if="tabValue == 'reviews'">
      <reviews-stats title="Рейтинг услуги"></reviews-stats>
      <the-filter
        title="Отзывы об услуге"
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
        { text: 'Заказы', value: 'orders' },
        { text: 'Отзывы', value: 'reviews' },
      ],
      tabValue: 'info',
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
