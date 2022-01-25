<template>
  <div>
    <the-filter
      title="Заказы"
      :filters="filters"
      show-middle
      :switch-items="switchItems"
      :switch-value="switchValue"
      :actions="actions"
      @switch="switchCategory"
      @action="action"
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все заказы'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <the-card v-for="order in orders[switchValue]" :key="order.id">
      <template #header>
        <product-item-header
          :url="order.url"
          :title="order.title"
          :date-time="order.dateTime"
          :status="order.status"
          :statuses="statuses"
          :status-editable="order.statusEditable"
          :checked="order.checked"
          :show-checkbox="showCheckbox"
          @check="
            (event) => {
              orderCheck(event, order)
            }
          "
          @changeStatus="
            (status) => {
              changeStatus(status, order)
            }
          "
        ></product-item-header>
      </template>
      <template #body>
        <div class="order-body">
          <div class="goods">
            <div v-for="good in order.goods" :key="good.id" class="good">
              <div class="good_row">
                <p class="bold-text">{{ good.name }}</p>
                <div class="icons">
                  <img src="/verified.svg" />
                  <img src="/supplier.svg" />
                  <img
                    v-if="!good.showParams"
                    src="/parameters.svg"
                    @click="toggleParams(good)"
                  />
                  <img
                    v-if="good.showParams"
                    src="/cross.svg"
                    @click="toggleParams(good)"
                  />
                  <div v-if="good.showParams" class="dropdown white-container">
                    <li
                      v-for="param in params"
                      :key="param.id"
                      class="dropdown-items"
                    >
                      {{ param.name }}
                    </li>
                  </div>
                </div>
              </div>
              <div class="good_row">
                <p>Всего товаров: {{ good.count }}</p>
                <p>{{ good.price.toLocaleString('ru') }} тг</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="order-footer">
          <p class="bold-text">Итого к оплате</p>
          <p class="bold-text">{{ order.total.toLocaleString('ru') }} тг</p>
        </div>
      </template>
    </the-card>
  </div>
</template>

<script>
export default {
  name: 'OrdersIndex',
  layout: 'cabinet',
  data() {
    return {
      filters: ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус'],
      switchItems: [
        { text: 'Мои заказы', value: 'my' },
        { text: 'Мне заказы', value: 'toMe' },
      ],
      showCheckbox: false,
      switchValue: 'my',
      checkAllCheckbox: false,
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
      ],
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      statuses: [
        {
          text: 'Новый',
          color: '#D80808',
          value: 'new',
        },
        {
          text: 'В обработке',
          color: '#FF9900',
          value: 'inProcess',
        },
        {
          text: 'Подтверждён',
          color: '#8F00FF',
          value: 'confirmed',
        },
        {
          text: 'Проверка оплаты',
          color: '#136BF0',
          value: 'paymentVerification',
        },
        {
          text: 'Собирается',
          color: '#FFE600',
          value: 'Collected',
        },
        {
          text: 'Выполнен',
          color: '#33B601',
          value: 'completed',
        },
        {
          text: 'Отменён',
          color: '#BBBBBC',
          value: 'canceled',
        },
        {
          text: 'Возврат',
          color: '#000000',
          value: 'return',
        },
      ],
      orders: {
        my: new Array(7).fill().map((e, i) => {
          return {
            url: `orders/${i}`,
            title: 'Заказ № 00000001',
            dateTime: new Date(),
            status: 'inProcess',
            checked: false,
            statusEditable: false,
            goods: [
              {
                name: 'Mobilka Electronic',
                count: 2,
                price: 616980,
                showParams: false,
              },
              {
                name: 'Mobilka Electronic',
                count: 2,
                price: 616980,
                showParams: false,
              },
            ],
            total: 1143762,
          }
        }),
        toMe: new Array(7).fill().map((e, i) => {
          return {
            url: `orders/${i}`,
            title: 'Заказ № 00000001',
            dateTime: new Date(),
            status: 'inProcess',
            checked: false,
            goods: [
              {
                name: 'Mobilka Electronic',
                count: 2,
                price: 616980,
                showParams: false,
              },
            ],
            total: 1143762,
          }
        }),
      },
      params: [
        { name: 'Написать' },
        { name: 'Поделиться' },
        { name: 'В избранное' },
        { name: 'Подписаться' },
      ],
    }
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
        if (value === 'my') {
          this.actions.splice(2, 1)
          this.filters = ['Категория', 'Бренд', 'Цена', 'Дата', 'Статус']
        } else if (value === 'toMe') {
          if (this.actions.length < 3) {
            this.actions.push({ text: 'Создать', method: this.toCreatePage })
          }
          this.filters = ['Статус', 'Клиент', 'Цена', 'Дата']
        }
        this.checkAllCheckbox = false
        this.orders[this.switchValue].forEach((order) => {
          order.checked = false
        })
      }
    },
    create() {
      window.location.href = 'orders/new'
    },
    action(method) {
      method()
    },
    changeStatus(status, order) {
      order.status = status
    },
    orderCheck(event, order) {
      order.checked = event.target.checked
    },
    toggleParams(good) {
      good.showParams = !good.showParams
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
      this.orders[this.switchValue].forEach((order) => {
        order.checked = event.target.checked
      })
    },
    toCreatePage() {
      window.location.href = 'orders/new'
    },
  },
}
</script>
