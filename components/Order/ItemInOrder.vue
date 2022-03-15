<template>
  <item-with-avatar :img-url="imgUrl">
    <template #leftColumn>
      <a href="#" class="item-link"
        ><p class="bold-text">
          {{ price.toLocaleString('ru') }} {{ currency }}
        </p></a
      >
      <p>{{ description }}</p>
    </template>
    <template #rightColumn>
      <p class="bold-text">{{ number }} {{ unit }}</p>
      <p class="little-grey-text">{{ suplier }}</p>
    </template>
  </item-with-avatar>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: '/iphone-11.jpg',
    },
    price: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'тг',
    },
    description: {
      type: String,
      default: 'Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)',
    },
    number: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: 'шт',
    },
    suplier: {
      type: String,
      default: 'Mobilka electronik',
    },
  },
}
</script>
