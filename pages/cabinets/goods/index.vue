<template>
  <div id="goods">
    <the-filter
      title="Товары"
      :filters="filters[switchValue]"
      show-middle
      :switch-items="switchItems"
      :switch-value="switchValue"
      :actions="actionsFiltered"
      @switch="switchCategory"
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все товары'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <template v-if="switchValue == 'positions'">
      <product-item
        v-for="good in goods.positions"
        :key="good.id"
        :url="good.url"
        :price="good.price"
        :img="good.img"
        :description="good.description"
        :subtext="good.subtext"
        :subtext2="good.subtext2"
        :title="good.title"
        :date-time="good.dateTime"
        :checked="good.checked"
        :status="good.status"
        :statuses="statuses"
        :picked="good.picked"
        :show-checkbox="showCheckbox"
        @changeStatus="
          (status) => {
            changeStatus(status, good)
          }
        "
        @check="
          (event) => {
            checkGood(event, good)
          }
        "
        @pick="
          (event) => {
            pickGood(event, good)
          }
        "
      ></product-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GoodsIndex',
  layout: 'cabinet',
  data() {
    return {
      switchItems: [
        { text: 'Позиции', value: 'positions' },
        { text: 'Импорт', value: 'import' },
      ],
      switchValue: 'positions',
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox, category: 'positions' },
        { text: 'Экспорт', category: 'positions' },
        { text: 'Создать', method: this.create, category: 'positions' },
      ],
      status: 'inStock',
      showCheckbox: false,
      statuses: [
        { text: 'В наличии', color: '#33B601', value: 'inStock' },
        { text: 'Нет в наличии', color: '#D80808', value: 'notAvailable' },
      ],
      checkAllCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      filters: {
        positions: ['Категория', 'Бренд', 'Модель', 'Цена', 'Дата', 'Статус'],
        import: ['Категория', 'Бренд', 'Модель'],
      },
      goods: {
        positions: new Array(7).fill().map((e, i) => {
          return {
            url: `goods/${i}`,
            title: 'Товар ID 0000001',
            dateTime: new Date(),
            status: 'inStock',
            checked: false,
            price: (300990).toLocaleString('ru') + 'тг',
            img: '/Iphone.svg',
            description:
              'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
            subtext: 'Остатки: 1000 шт',
            subtext2: 'Склад: № 1',
            picked: false,
          }
        }),
      },
    }
  },
  computed: {
    actionsFiltered() {
      return this.actions.filter(
        (action) => action.category === this.switchValue
      )
    },
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
        this.resetPicks()
        this.showCheckbox = false
        this.actions[0].text = 'Выбрать'
        this.actions[0].color = '#bbbbbc'
      }
    },
    resetPicks() {
      this.checkAllCheckbox = false
      this.goods.positions.forEach((good) => {
        good.picked = false
      })
    },
    create() {
      this.$router.push('goods/new')
    },
    action(method) {
      method()
    },
    checkGood(event, good) {
      good.checked = event.target.checked
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
    changeStatus(status, good) {
      good.status = status
    },
    pickGood(event, good) {
      good.picked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.goods[this.switchValue].forEach((good) => {
        good.picked = event.target.checked
      })
    },
  },
}
</script>
