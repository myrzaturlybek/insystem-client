<template>
  <div>
    <the-filter
      title="Клиенты"
      :filters="filters"
      :show-middle="true"
      :switch-items="switchItems"
      :switch-value="switchValue"
      :actions="actions"
      @switch="switchCategory"
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все задания'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <the-card v-for="client in clients[switchValue]" :key="client.id">
      <template #header>
        <product-item-header
          :url="client.url"
          :title="client.title"
          :date-time="client.dateTime"
          :checked="client.picked"
          :show-checkbox="showCheckbox"
          :right-text="`Скидка: ${client.sale} %`"
          @check="
            (event) => {
              clientCheck(event, client)
            }
          "
        ></product-item-header>
      </template>
      <template #body>
        <div class="general-body-item-middle">
          <div class="employees-good-name-outer">
            <div class="sidebar-user-img-cont">
              <div class="sidebar-user-img-greenpoint"></div>
              <img class="img48" :src="client.img" />
            </div>
            <div class="ml16 good-name">
              <p class="bold-text">{{ client.name }}</p>
              <div class="mt8 df">
                <div class="mr16">
                  <img src="/kazakhstan 1.svg" alt="" />
                </div>
                <div class="mr8">
                  <img class="icon16" src="/activated.svg" alt="" />
                </div>
                <div class="little-grey-text df">
                  <div class="blue bold-text">{{ client.rating }}</div>
                  / 5
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mb8 d-flex justify-content-end">
              <p class="sidebar-user-status">поставщик</p>
              <img src="/verified.svg" alt="" class="ml16 icon16" />
              <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
            </div>
            <div class="rating-percent">Электроника</div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="general-body-item-bottom">
          <div class="general-body-item-number-cont">
            <p>Оборот:</p>
            <div>{{ client.circulation }} тг</div>
          </div>
          <div class="general-body-item-number-cont">
            <p>Заказы:</p>
            <div>{{ client.clients }} шт</div>
          </div>
          <div class="general-body-item-number-cont">
            <p>Средний чек:</p>
            <div>{{ client.averageCheck }} тг</div>
          </div>
        </div>
      </template>
    </the-card>
  </div>
</template>

<script>
export default {
  name: 'ClientsIndex',
  layout: 'cabinet',
  data() {
    return {
      filters: ['Статус', 'Клиент', 'Цена', 'Дата'],
      switchItems: [
        { text: 'Поставщики', value: 'suppliers' },
        { text: 'Исполнители', value: 'performers' },
        { text: 'Заказчики', value: 'sustomers' },
      ],
      switchValue: 'suppliers',
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
      ],
      showCheckbox: false,
      checkAllCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      clients: {
        suppliers: new Array(7).fill().map((e, i) => {
          return {
            url: `clients/${i}`,
            title: 'Клиент ID 00000001',
            dateTime: new Date(),
            picked: false,
            name: 'Revenj',
            img: '/logo.png',
            country: 'KZ',
            rating: 4.9,
            category: 'Электроника',
            circulation: (108946500).toLocaleString('ru'),
            clients: (22345).toLocaleString('ru'),
            averageCheck: (4856).toLocaleString('ru'),
            sale: 15,
          }
        }),
      },
    }
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
        this.resetPicks()
      }
    },
    resetPicks() {
      this.checkAllCheckbox = false
      this.clients[this.switchValue].forEach((client) => {
        client.picked = false
      })
    },
    action(method) {
      method()
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
    clientCheck(event, client) {
      client.picked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.clients[this.switchValue].forEach((client) => {
        client.picked = event.target.checked
      })
    },
  },
}
</script>
