<template>
  <div>
    <product-header
      title="Сотрудник ID 00000001"
      :actions="actions"
      show-bottom
      turned-on
    ></product-header>
    <client-card title="Карточка сотрудника"></client-card>
    <product-schedule
      title="Данные для входа"
      :info="loginDetails"
    ></product-schedule>
    <user-access title="Доступы сотрудника" :accesses="accesses"></user-access>
    <product-list-filter
      title="Мои заказы"
      top-filter
      stats
    ></product-list-filter>
    <product-list></product-list>
  </div>
</template>

<script>
export default {
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }, { text: 'Экспорт' }, { text: 'Удалить' }],
      loginDetails: [
        {
          title: 'Номер телефона',
          text: '+7 (700) 700 70 70',
        },
        {
          title: 'Электронная почта',
          text: 'pup@gmail.com',
        },
        {
          title: 'Пароль',
          text: 'Zxc123',
        },
      ],
      accesses: [
        {
          turnedOn: true,
          text: 'Компания',
        },
        {
          turnedOn: true,
          text: 'Партнёры',
        },
        {
          turnedOn: true,
          text: 'Шоурумы',
        },
        {
          turnedOn: true,
          text: 'Сотрудники',
        },
        {
          turnedOn: true,
          text: 'Витрины',
        },
        {
          turnedOn: true,
          text: 'Отзывы',
        },
        {
          turnedOn: true,
          text: 'Заказы',
        },
        {
          turnedOn: true,
          text: 'Подписки',
        },
        {
          turnedOn: true,
          text: 'Задания',
        },
        {
          turnedOn: true,
          text: 'Аналитика',
        },
        {
          turnedOn: true,
          text: 'Клиенты',
        },
        {
          turnedOn: true,
          text: 'Продвижение',
        },
      ],
    }
  },
}
</script>
