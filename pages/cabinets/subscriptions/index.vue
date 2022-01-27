<template>
  <div>
    <the-filter
      title="Подписки"
      :filters="filters"
      :show-middle="true"
      :switch-items="switchItems"
      :switch-value="switchValue"
      :subscribers="1510"
      @switch="switchCategory"
    ></the-filter>
    <div class="row">
      <div v-for="i in 22" :key="i" class="mt16 col-md-6">
        <sub-item></sub-item>
      </div>
    </div>
    <subs-pagination></subs-pagination>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionsIndex',
  layout: 'cabinet',
  data() {
    return {
      filters: ['Тип', 'Страна', 'Рейтинг', 'Категория'],
      switchItems: [
        { text: 'Подписчики', value: 'subscribers' },
        { text: 'Подписки', value: 'subscriptions' },
      ],
      switchValue: 'subscribers',
    }
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
      }
    },
  },
}
</script>
