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
        <div class="mr16 ml16">
          <div v-for="good in order.goods" :key="good.id" class="mt16">
            <item-in-order
              :img-url="good.imgUrl"
              :price="good.price"
              :currency="good.currency"
              :number="good.number"
              :unit="good.unit"
              :supplier="good.supplier"
            ></item-in-order>
            <div class="sidebar-top-line mt16"></div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="order-footer">
          <p>Всего товаров: <span class="bold-text">2</span></p>
          <p style="margin-right: 230px">
            Общая сумма:
            <span class="bold-text"
              >{{ order.total.toLocaleString('ru') }} тг</span
            >
          </p>
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
                imgUrl: '/iphone-11.jpg',
                supplier: 'Mobilka Electronic',
                description:
                  'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
                number: 1,
                unit: 'шт',
                price: 616980,
                currency: 'тг',
              },
              {
                imgUrl: '/iphone-11.jpg',
                supplier: 'Mobilka Electronic',
                description:
                  'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
                number: 1,
                unit: 'шт',
                price: 616980,
                currency: 'тг',
              },
            ],
            total: 1143762,
          }
        }),
        toMe: new Array(7).fill().map((e, i) => {
          return {
            url: `orders/tome/${i}`,
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
      this.$router.push('orders/new')
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
      this.$router.push('orders/new')
    },
  },
}
</script>
