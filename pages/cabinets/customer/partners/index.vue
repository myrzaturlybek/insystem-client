<template>
  <div>
    <the-filter
      title="Партнёры"
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
    <the-card v-for="partner in partners[switchValue]" :key="partner.id">
      <template #header>
        <product-item-header
          :url="partner.url"
          :title="partner.title"
          :date-time="partner.dateTime"
          :checked="partner.picked"
          :show-checkbox="showCheckbox"
          :right-text="partner.sale ? `Скидка: ${partner.sale} %` : null"
          :status="partner.status || null"
          :statuses="statuses[switchValue] || []"
          @check="
            (event) => {
              partnerCheck(event, partner)
            }
          "
          @changeStatus="
            (status) => {
              changeStatus(status, partner)
            }
          "
        ></product-item-header>
      </template>
      <template #body>
        <div class="general-body-item-middle">
          <div class="employees-good-name-outer">
            <div class="sidebar-user-img-cont">
              <div class="sidebar-user-img-greenpoint"></div>
              <img class="img48" :src="partner.img" />
            </div>
            <div class="ml16 good-name">
              <p class="bold-text">{{ partner.name }}</p>
              <div class="mt8 df">
                <div class="mr16">
                  <img src="/kazakhstan 1.svg" alt="" />
                </div>
                <div class="mr8">
                  <img class="icon16" src="/activated.svg" alt="" />
                </div>
                <div class="little-grey-text df">
                  <div class="blue bold-text">{{ partner.rating }}</div>
                  / 5
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mb8">
              <img src="/verified.svg" alt="" class="ml16 icon16" />
              <img src="/supplier.svg" alt="" class="ml16 icon16" />
              <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
            </div>
            <div class="rating-percent">Электроника</div>
          </div>
        </div>
      </template>
      <template #footer>
        <div v-if="switchValue == 'current'" class="general-body-item-bottom">
          <div class="general-body-item-number-cont">
            <p>Оборот:</p>
            <div>{{ partner.circulation }} тг</div>
          </div>
          <div class="general-body-item-number-cont">
            <p>Заказы:</p>
            <div>{{ partner.partners }} шт</div>
          </div>
          <div class="general-body-item-number-cont">
            <p>Средний чек:</p>
            <div>{{ partner.averageCheck }} тг</div>
          </div>
        </div>
        <div v-if="switchValue == 'requests'" class="partner-footer">
          <div
            class="actions"
            v-html="
              statuses.requests.find((s) => s.value == partner.status)
                .footerTemplate
            "
          ></div>
        </div>
      </template>
    </the-card>
  </div>
</template>

<script>
export default {
  name: 'PartnersIndex',
  layout: 'cabinet',
  data() {
    return {
      filters: ['Статус', 'Партнёр', 'Цена', 'Дата'],
      switchItems: [
        { text: 'Текущие', value: 'current' },
        { text: 'Запросы', value: 'requests' },
      ],
      switchValue: 'current',
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
      statuses: {
        requests: [
          {
            text: 'Запрос отправлен',
            color: '#BBBBBC',
            value: 'sendRequest',
            footerTemplate: `<div class="partner-footer_button cancel">Отменить</div>`,
          },
          {
            text: 'В ожидании',
            color: '#FF9900',
            value: 'waiting',
            footerTemplate: `<div class="partner-footer_button confirm">Потвердить</div>
              <div class="partner-footer_button deny">Отказать</div>`,
          },
          {
            text: 'Подтверждён',
            color: '#33B601',
            value: 'confirmed',
            footerTemplate: `<div class="partner-footer_button cancel">Удалить</div>`,
          },
          {
            text: 'Отказано',
            color: '#D80808',
            value: 'denied',
            footerTemplate: `<div class="partner-footer_button repeat">Повторить</div>`,
          },
        ],
      },
      partners: {
        current: new Array(7).fill().map((e, i) => {
          return {
            url: `partners/partner/${i}`,
            title: 'Партнёр ID 00000001',
            dateTime: new Date(),
            picked: false,
            name: 'Revenj',
            img: '/logo.png',
            country: 'KZ',
            rating: 4.9,
            category: 'Электроника',
            circulation: (108946500).toLocaleString('ru'),
            partners: (22345).toLocaleString('ru'),
            averageCheck: (4856).toLocaleString('ru'),
            sale: 25,
          }
        }),
        requests: new Array(7).fill().map((e, i) => {
          return {
            url: `partners/partner/${i}`,
            title: 'Партнёр ID 00000001',
            dateTime: new Date(),
            picked: false,
            name: 'Revenj',
            img: '/logo.png',
            country: 'KZ',
            rating: 4.9,
            category: 'Электроника',
            status: 'sendRequest',
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
      this.partners[this.switchValue].forEach((partner) => {
        partner.picked = false
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
    partnerCheck(event, partner) {
      partner.picked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.partners[this.switchValue].forEach((partner) => {
        partner.picked = event.target.checked
      })
    },
    changeStatus(status, partner) {
      partner.status = status
    },
  },
}
</script>
