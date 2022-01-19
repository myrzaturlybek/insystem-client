<template>
  <div>
    <product-header
      title="Бренд ID 00000001"
      :date-time="new Date()"
      :turned-on="true"
      :show-status="true"
      show-bottom-line
      :actions="actions"
      @toggle="toggle"
    ></product-header>
    <product-selected-categories
      :categories="categories"
    ></product-selected-categories>
    <product-info
      title="Информация о бренде"
      :name="brandName"
      :description="brandDescription"
      banner="/brandBanner.png"
    ></product-info>
    <product-list-filter title="Список товаров"></product-list-filter>
    <product-list-item v-for="index in 7" :key="index"></product-list-item>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
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
      brandName: 'Apple',
      brandDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
    }
  },
  methods: {
    toggle(event) {
      // eslint-disable-next-line no-console
      console.log(event.target.checked)
    },
  },
}
</script>
