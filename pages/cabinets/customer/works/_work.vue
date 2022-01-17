<template>
  <div>
    <product-header
      title="Работа ID 00000001"
      :date-time="new Date()"
      date-time-text="Создана"
      :turned-on="true"
      :show-status="true"
      show-bottom-line
      :actions="actions"
      @toggle="toggle"
    ></product-header>
    <product-selected-categories
      :categories="categories"
    ></product-selected-categories>
    <product-photos title="Фотографии работы" :photos="photos"></product-photos>
    <product-info
      title="Информация о работе"
      :name="workName"
      :description="workDescription"
      :notes="workNotes"
    ></product-info>
    <product-location></product-location>
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
      workName: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
      workDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium proin quis malesuada netus sapien consequat nunc. Non elementum turpis elementum tincidunt vitae quam eget. Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id libero ut aliquam.',
      workNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    }
  },
}
</script>
