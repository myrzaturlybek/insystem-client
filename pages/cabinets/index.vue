<template>
  <div>
    <cabinet-welcome :cabinet-data="cabinetData"></cabinet-welcome>
  </div>
</template>

<script>
export default {
  name: 'CustomerIndexPage',
  layout: 'cabinet',
  data() {
    return {
      cabinetData: [
        {
          text: 'Категории выбранны',
          isDone: true,
        },
        {
          text: 'Укажите контактное лицо',
          isDone: false,
        },
      ],
    }
  },
}
</script>
