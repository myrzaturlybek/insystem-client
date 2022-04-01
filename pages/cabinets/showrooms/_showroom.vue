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
      <reviews-stats title="Рейтинг шоурума"></reviews-stats>
      <the-filter
        title="Отзывы о шоуруме"
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
      tabsItems: [
        { text: 'Информация', value: 'info' },
        { text: 'Заказы', value: 'orders' },
        { text: 'Отзывы', value: 'reviews' },
      ],
      tabValue: 'info',
      statuses: [
        { text: 'Есть места', color: '#33B601', value: 'havePlaces' },
        { text: 'Нет мест', color: '#D80808', value: 'noPlaces' },
      ],
      reviewsFilters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
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
