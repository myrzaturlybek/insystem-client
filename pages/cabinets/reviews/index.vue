<template>
  <div>
    <the-filter
      title="Отзывы"
      :filters="filters"
      :show-middle="true"
      :switch-items="switchItems"
      :switch-value="switchValue"
      @switch="switchCategory"
    ></the-filter>
    <reviews-stats></reviews-stats>
    <review-item v-for="i in 7" :key="i"></review-item>
  </div>
</template>

<script>
export default {
  name: 'ReviewsIndex',
  layout: 'cabinet',
  data() {
    return {
      filters: ['Тип', 'Страна', 'Рейтинг', 'Категория', 'Дата'],
      switchItems: [
        { text: 'Отзывы о вас', value: 'aboutMe' },
        { text: 'Ваши отзывы', value: 'my' },
      ],
      switchValue: 'aboutMe',
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
