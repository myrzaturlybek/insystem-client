<template>
  <div class="works-main-page">
    <the-filter
      title="Работы"
      :actions="actions"
      :show-middle="false"
      :filters="filters"
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все услуги'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <product-item
      v-for="work in works"
      :key="work.id"
      :price="work.price"
      :img="work.img"
      :description="work.description"
      :subtext="work.subtext"
      :title="work.title"
      :date-time="work.dateTime"
      :checked="work.checked"
      :url="work.url"
      :show-checkbox="showCheckbox"
      :picked="work.picked"
      @check="
        (event) => {
          checkWork(event, work)
        }
      "
      @pick="
        (event) => {
          pickWork(event, work)
        }
      "
    ></product-item>
  </div>
</template>

<script>
export default {
  name: 'WorksIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.create },
      ],
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      filters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      showCheckbox: false,
      checkAllCheckbox: false,
      works: new Array(7).fill().map((e, i) => {
        return {
          url: `works/${i}`,
          title: 'Работа ID 0000001',
          dateTime: new Date(),
          checked: true,
          price: '700 м2',
          img: '/-_Featured_Image 1.svg',
          description: 'Современный дом в п. Юбилейный',
          subtext: 'Раимбека 369, уг. ул. Брусиловского, дом 33',
          picked: false,
        }
      }),
    }
  },
  methods: {
    create() {
      this.$router.push('works/new')
    },
    action(method) {
      method()
    },
    checkWork(event, work) {
      work.checked = event.target.checked
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
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.works.forEach((work) => {
        work.picked = event.target.checked
      })
    },
    pickWork(event, work) {
      work.picked = event.target.checked
    },
  },
}
</script>
