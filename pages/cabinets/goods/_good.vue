<template>
  <div>
    <product-header
      title="Товар ID 0000001"
      :date-time="new Date()"
      :turned-on="true"
      status-on-middle
      turned-on-line
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
        title="Фотографии товара"
        :photos="photos"
      ></product-photos>
      <product-info
        title="Информация о товаре"
        :name="goodName"
        :description="goodDescription"
        :notes="goodNotes"
      ></product-info>
      <product-price></product-price>
      <product-specs></product-specs>
    </template>

    <template v-if="tabValue == 'orders'">
      <product-list-filter
        title="Список заказов"
        top-filter
        stats
      ></product-list-filter>
      <product-list></product-list>
    </template>

    <template v-if="tabValue == 'reviews'">
      <reviews-stats title="Рейтинг товара"></reviews-stats>
      <the-filter
        title="Отзывы о товаре"
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
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      statuses: [
        { text: 'В наличии', color: '#33B601', value: 'inStock' },
        { text: 'Нет в наличии', color: '#D80808', value: 'notAvailable' },
      ],
      status: 'inStock',
      goodName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      goodDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
      goodNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
