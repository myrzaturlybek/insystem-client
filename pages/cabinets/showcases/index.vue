<template>
  <div>
    <the-filter
      title="Витрины"
      :filters="['Категория', 'Бренд', 'Цена', 'Дата', 'Статус']"
      :show-middle="false"
      :actions="actions"
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все шоурумы'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <product-item
      v-for="showcase in showcases"
      :key="showcase.id"
      :status="showcase.status"
      :price="showcase.price"
      :img="showcase.img"
      :description="showcase.description"
      :subtext="showcase.subtext"
      :title="showcase.title"
      :date-time="showcase.dateTime"
      :statuses="statuses"
      :checked="showcase.checked"
      :url="showcase.url"
      :show-checkbox="showCheckbox"
      :picked="showcase.picked"
      @changeStatus="
        (status) => {
          changeStatus(status, showcase)
        }
      "
      @check="
        (event) => {
          checkShowcase(event, showcase)
        }
      "
      @pick="
        (event) => {
          pickShowcase(event, showcase)
        }
      "
    ></product-item>
  </div>
</template>

<script>
export default {
  name: 'ShowcasesIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.create },
      ],
      checkAllCheckbox: false,
      showCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      filters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      showcases: new Array(7).fill().map((e, i) => {
        return {
          url: `showcases/${i}`,
          title: 'Витрина ID 0000001',
          dateTime: new Date(),
          status: 'havePlaces',
          checked: true,
          price: (100).toLocaleString('ru') + ' тг / мес',
          img: '/-_Featured_Image 1.svg',
          description: 'Островок из искусственого камня для смартфонов',
          subtext: 'Количество: 4 шт',
          picked: false,
        }
      }),
      status: 'havePlaces',
      statuses: [
        { text: 'Есть места', color: '#33B601', value: 'havePlaces' },
        { text: 'Нет мест', color: '#D80808', value: 'noPlaces' },
      ],
    }
  },
  methods: {
    create() {
      window.location.href = 'showcases/new'
    },
    action(method) {
      method()
    },
    checkShowcase(event, showcase) {
      showcase.checked = event.target.checked
    },
    changeStatus(status, showcase) {
      showcase.status = status
    },
    pickShowcase(event, showcase) {
      showcase.picked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.showcases.forEach((showcase) => {
        showcase.picked = event.target.checked
      })
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
