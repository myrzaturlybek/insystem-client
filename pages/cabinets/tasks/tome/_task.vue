<template>
  <div>
    <product-header
      title="Задание № 00000001"
      :date-time="new Date()"
      date-time-text="Создано"
      status-on-middle
      :statuses="statuses.my"
      :status="status"
      :actions="actions"
      :show-bottom="false"
      :middle-status-editable="false"
    ></product-header>
    <order-feedback title="Отзыв о задании" is-task></order-feedback>
    <order-to-me-processing title="Обработка задании"></order-to-me-processing>
    <reply-to-response></reply-to-response>
    <task-feedback :show-buttons="false"></task-feedback>
    <task-creator></task-creator>
    <product-schedule
      title="Описание задания"
      :info="description"
      :stats="stats"
    ></product-schedule>
    <cabinet-carousel title="Выбранные товары">
      <template #carousel-items>
        <swiper-slide v-for="i in 9" :key="i" class="cabinet-carousel-item">
          <div class="cabinet-carousel-item_img">
            <img class="w-100" src="/Iphone.svg" alt="" />
          </div>
          <div class="mt16">
            <p class="task-item-title bold-text">300 990 тг</p>
          </div>
          <div class="mt16">
            <p>Смарфон Apple iPhone X 256Gb Space Gray</p>
          </div>
          <div class="mt16">
            <img src="/Rating.svg" alt="" />
          </div>
          <div class="mt16">
            <p class="bold-text">10 шт</p>
          </div>
        </swiper-slide>
      </template>
    </cabinet-carousel>
    <cabinet-carousel title="Выбранные бренды">
      <template #carousel-items>
        <swiper-slide v-for="i in 9" :key="i" class="cabinet-carousel-item">
          <div class="task-brand-carousel-item-img">
            <img class="w-100" src="/apple.png" alt="" />
          </div>
          <div class="mt16">
            <p>Apple</p>
          </div>
        </swiper-slide>
      </template>
    </cabinet-carousel>
    <product-location title="Адрес доставки"></product-location>
    <product-schedule title="Срок выполнения" :info="period"></product-schedule>
    <way-to title="Способ оплаты" :ways="paymentMethods"></way-to>
    <product-schedule
      title="Дополнительно"
      :info="additionally"
    ></product-schedule>
  </div>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: { SwiperSlide },
  layout: 'cabinet',
  data() {
    return {
      statuses: {
        my: [
          {
            text: 'Новый',
            color: '#D80808',
            value: 'new',
          },
          {
            text: 'Опубликовано',
            color: '#FF9900',
            value: 'published',
          },
          {
            text: 'Проверка оплаты',
            color: '#136BF0',
            value: 'paymentVerification',
          },
          {
            text: 'Выполняется',
            color: '#00CCCC',
            value: 'performed',
          },
          {
            text: 'Завершено',
            color: '#33B601',
            value: 'completed',
          },
          {
            text: 'Отменён',
            color: '#BBBBBC',
            value: 'canceled',
          },
        ],
        toMe: [
          {
            text: 'Новый',
            color: '#D80808',
            value: 'new',
          },
          {
            text: 'Проверка оплаты',
            color: '#136BF0',
            value: 'paymentVerification',
          },
          {
            text: 'Выполняется',
            color: '#00CCCC',
            value: 'performed',
          },
        ],
      },
      status: 'new',
      actions: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      description: [
        {
          title: 'Категория',
          text: 'Смартфоны и гаджеты',
        },
        {
          title: 'Название',
          text: 'Поставка товара',
        },
        {
          title: 'Описание',
          text: 'Нужен поставщик который сможет предоставить все товары указанные в задании',
          fullSize: true,
        },
      ],
      stats: [
        {
          icon: '/eye.svg',
          text: 'Просмотры:',
          count: '2',
        },
        {
          icon: '/volume-2.svg',
          text: 'Отклики:',
          count: '2',
        },
      ],
      period: [
        {
          title: 'Дата начала',
          text: '09.08.2019',
        },
        {
          title: 'Дата завершения',
          text: '10.08.2019',
        },
      ],
      paymentMethods: [
        {
          title: 'Оплата онлайн',
          text: 'Банковской картой',
          isSelected: true,
        },
        {
          title: 'Оплата наличными',
          text: 'При получении',
        },
        {
          title: 'Оплата по счету',
          text: 'Через банк',
        },
      ],
      additionally: [
        {
          title: 'Ваш комментарий',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh cras praesent quis pharetra vehicula mattis ut erat.',
          fullSize: true,
        },
      ],
    }
  },
}
</script>
