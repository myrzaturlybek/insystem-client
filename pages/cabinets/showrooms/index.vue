<template>
  <div>
    <the-filter
      title="Шоурумы"
      :filters="filters"
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
      v-for="showroom in showrooms"
      :key="showroom.id"
      :status="showroom.status"
      :price="showroom.price"
      :img="showroom.img"
      :description="showroom.description"
      :subtext="showroom.subtext"
      :title="showroom.title"
      :date-time="showroom.dateTime"
      :statuses="statuses"
      :checked="showroom.checked"
      :url="showroom.url"
      :show-checkbox="showCheckbox"
      :picked="showroom.picked"
      @changeStatus="
        (status) => {
          changeStatus(status, showroom)
        }
      "
      @check="
        (event) => {
          checkShowroom(event, showroom)
        }
      "
      @pick="
        (event) => {
          pickShowroom(event, showroom)
        }
      "
    ></product-item>
  </div>
</template>

<script>
export default {
  name: 'ShowroomsIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.create },
      ],
      status: 'havePlaces',
      checkAllCheckbox: false,
      showCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      statuses: [
        { text: 'Есть места', color: '#33B601', value: 'havePlaces' },
        { text: 'Нет мест', color: '#D80808', value: 'noPlaces' },
      ],
      filters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      showrooms: new Array(7).fill().map((e, i) => {
        return {
          url: `showrooms/${i}`,
          title: 'Шоурум ID 0000001',
          dateTime: new Date(),
          status: 'havePlaces',
          checked: true,
          price: (100).toLocaleString('ru') + ' м2',
          img: '/-_Featured_Image 1.svg',
          description: 'Шоурум в Астане',
          subtext: 'Смартфоны и гаджеты',
          picked: false,
        }
      }),
    }
  },
  methods: {
    create() {
      this.$router.push('showrooms/new')
    },
    action(method) {
      method()
    },
    checkShowroom(event, showroom) {
      showroom.checked = event.target.checked
    },
    changeStatus(status, showroom) {
      showroom.status = status
    },
    pickShowroom(event, showroom) {
      showroom.picked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.showrooms.forEach((showroom) => {
        showroom.picked = event.target.checked
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
