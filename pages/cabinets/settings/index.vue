<template>
  <div>
    <the-filter
      title="Настройки"
      :show-middle="false"
      :show-bottom="false"
      :actions="actions"
    ></the-filter>
    <user-access
      title="Предпочтения в категориях товара"
      :accesses="accesses"
    ></user-access>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndex',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Изменить' }],
      accesses: [
        {
          turnedOn: true,
          text: 'Смартфоны и гаджеты',
        },
        {
          turnedOn: true,
          text: 'Техника для кухни',
        },
        {
          turnedOn: true,
          text: 'Ноутбуки и компьютеры',
        },
        {
          turnedOn: true,
          text: 'Сантехника и отопление',
        },
        {
          turnedOn: true,
          text: 'Бытовая техника',
        },
        {
          turnedOn: false,
          text: 'Автотовары и транспорт',
        },
        {
          turnedOn: false,
          text: 'ТВ, аудио и видео',
        },
        {
          turnedOn: false,
          text: 'Все для офиса',
        },
      ],
    }
  },
}
</script>
