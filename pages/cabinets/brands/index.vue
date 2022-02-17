<template>
  <div>
    <the-filter
      title="Бренды"
      :filters="filters"
      :show-middle="false"
      :actions="actions"
      show-toggle-all
      @toggleAll="
        (event) => {
          toggleAll(event, brands)
        }
      "
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все бренды'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <product-item
      v-for="brand in brands"
      :key="brand.id"
      :price="brand.price"
      :img="brand.img"
      :description="brand.description"
      :subtext="brand.subtext"
      :title="brand.title"
      :date-time="brand.dateTime"
      :checked="brand.checked"
      :url="brand.url"
      :show-checkbox="showCheckbox"
      :picked="brand.picked"
      @check="
        (event) => {
          checkBrand(event, brand)
        }
      "
      @pick="
        (event) => {
          pickBrand(event, brand)
        }
      "
    ></product-item>
  </div>
</template>

<script>
import cabinetMainPages from '~/mixins/cabinet-main-pages'

export default {
  name: 'BrandsIndex',
  mixins: [cabinetMainPages],
  layout: 'cabinet',
  data() {
    return {
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.create },
      ],
      filters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      showCheckbox: false,
      checkAllCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      brands: new Array(7).fill().map((e, i) => {
        return {
          url: `brands/${i}`,
          title: 'Бренд ID 0000001',
          dateTime: new Date(),
          checked: true,
          price: (100).toLocaleString('ru') + ' товаров',
          img: '/apple.png',
          description: 'Apple',
          subtext: 'Электроника',
          picked: false,
        }
      }),
    }
  },
  methods: {
    create() {
      this.$router.push('brands/new')
    },
    action(method) {
      method()
    },
    checkBrand(event, brand) {
      brand.checked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.brands.forEach((brand) => {
        brand.picked = event.target.checked
      })
    },
    pickBrand(event, brand) {
      brand.picked = event.target.checked
    },
    toggleCheckbox() {
      if (!this.showCheckbox) {
        this.actions[0].text = 'Отменить'
        this.actions[0].color = '#000000'
      } else {
        this.actions[0].text = 'Выбрать'
        this.actions[0].color = '#bbbbbc'
      }
      this.showCheckbox = !this.showCheckbox
    },
  },
}
</script>
