<template>
  <div>
    <the-filter
      title="Компания"
      :actions="actions"
      :show-bottom="false"
      :show-middle="true"
      :switch-items="switchItems"
      :switch-value="switchValue"
      @switch="switchCategory"
      @action="action"
    ></the-filter>
    <product-schedule
      :title="info[switchValue].title"
      :date-time="new Date()"
      :info="info[switchValue].info"
      show-verified
      :show-valid="false"
      :verified="info[switchValue].verified"
      :url="info[switchValue].url"
      show-map
    ></product-schedule>
  </div>
</template>

<script>
export default {
  name: 'CompanyPage',
  layout: 'cabinet',
  data() {
    return {
      actions: [
        { text: 'Выбрать' },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.toCreate },
      ],
      switchItems: [
        { text: 'Головная', value: 'mainOffice' },
        { text: 'Филиалы', value: 'branches' },
      ],
      switchValue: 'mainOffice',
      info: {
        mainOffice: {
          title: 'Головная ID 0000001',
          verified: false,
          url: 'company/main-office',
          info: [
            {
              title: 'Название',
              text: 'Revenj',
            },
            {
              title: 'Категория',
              text: 'Смартфоны и гаджеты',
            },
            {
              title: 'Страна',
              text: 'Казахстан',
            },
            {
              title: 'Город',
              text: 'Алматы',
            },
            {
              title: 'Фактический адрес',
              text: 'Раимбека 369, уг. ул. Брусиловского, дом 33',
              fullSize: true,
            },
          ],
        },
        branches: {
          title: 'Филиал ID 0000001',
          verified: true,
          url: 'company/branches/1',
          info: [
            {
              title: 'Название',
              text: 'Revenj',
            },
            {
              title: 'Категория',
              text: 'Смартфоны и гаджеты',
            },
            {
              title: 'Страна',
              text: 'Казахстан',
            },
            {
              title: 'Город',
              text: 'Алматы',
            },
            {
              title: 'Фактический адрес',
              text: 'Раимбека 369, уг. ул. Брусиловского, дом 33',
              fullSize: true,
            },
          ],
        },
      },
    }
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
      }
    },
    action(method) {
      method()
    },
    toCreate() {
      this.$router.push('company/branches/new')
    },
  },
}
</script>
