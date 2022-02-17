<template>
  <div class="services-main-page">
    <the-filter
      title="Услуги"
      :actions="actions"
      :show-middle="false"
      :filters="filters"
      show-toggle-all
      @action="action"
      @toggleAll="
        (event) => {
          toggleAll(event, services)
        }
      "
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
      v-for="service in services"
      :key="service.id"
      :status="service.status"
      :price="service.price"
      :img="service.img"
      :description="service.description"
      :subtext="service.subtext"
      :title="service.title"
      :date-time="service.dateTime"
      :checked="service.checked"
      :url="service.url"
      :show-checkbox="showCheckbox"
      :picked="service.picked"
      @changeStatus="
        (status) => {
          changeStatus(status, service)
        }
      "
      @check="
        (event) => {
          checkService(event, service)
        }
      "
      @pick="
        (event) => {
          pickService(event, service)
        }
      "
    ></product-item>
  </div>
</template>

<script>
import cabinetMainPages from '../../../mixins/cabinet-main-pages'

export default {
  name: 'ServicesIndex',
  mixins: [cabinetMainPages],
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
      filters: ['Категория', 'Бренд', 'Модель', 'Цена', 'Дата', 'Статус'],
      showCheckbox: false,
      checkAllCheckbox: false,
      services: new Array(7).fill().map((e, i) => {
        return {
          url: `services/${i}`,
          title: 'Услуга ID 0000001',
          dateTime: new Date(),
          status: 'free',
          checked: false,
          price: (1000000).toLocaleString('ru') + 'тг',
          img: '/-_Featured_Image 1.svg',
          description: 'Строительство домов, коттеджей под ключ',
          subtext: 'Шоурум в Астане',
          picked: false,
        }
      }),
    }
  },
  methods: {
    create() {
      this.$router.push('services/new')
    },
    action(method) {
      method()
    },
    checkService(event, service) {
      service.checked = event.target.checked
    },
    changeStatus(status, service) {
      service.status = status
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
      this.services.forEach((service) => {
        service.picked = event.target.checked
      })
    },
    pickService(event, service) {
      service.picked = event.target.checked
    },
  },
}
</script>
