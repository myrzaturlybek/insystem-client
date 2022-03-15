<template>
  <div class="mt16 white-container">
    <item-with-avatar img-url="/logo.png">
      <template #leftColumn>
        <a href="#" class="item-link">
          <p class="bold-text">Mobilka Electronic</p>
        </a>

        <div class="d-flex align-items-center">
          <div class="mr16">
            <img src="/kazakhstan 1.svg" alt="" />
          </div>
          <img class="icon16 mr8" src="/activated.svg" alt="" />
          <p class="blue bold-text rating-text">4.9</p>
          <p class="little-grey-text rating-text">/ 5</p>
        </div>
      </template>
      <template #rightColumn>
        <div class="d-flex">
          <p class="sidebar-user-status">поставщик</p>
          <img src="/verified.svg" alt="" class="ml16 icon16" />
          <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
        </div>
        <p class="little-grey-text">Электроника</p>
      </template>
    </item-with-avatar>

    <div class="sidebar-top-line mt16"></div>
    <div class="mt16">
      <p>Заказ № 00000001</p>
      <div class="mt32 d-flex justify-content-between">
        <div>
          <p class="bold-text">Оценка</p>
          <img class="mt16" src="/Rating.svg" alt="rating" />
        </div>
        <div>
          <p class="little-grey-text">08.08.2019 / 20:22</p>
          <p class="little-grey-text mt16 d-flex justify-content-end">
            Отлично
          </p>
        </div>
      </div>
      <div class="sidebar-top-line mt16"></div>
      <div v-if="showComments" class="mt16">
        <p class="bold-text">Комментарий</p>
        <p class="mt16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet
          dignissim orci ut malesuada proin ut tortor in. Fringilla fusce
          posuere penatibus sapien, sit venenatis arcu. Sed aliquet donec risus
          condimentum vitae, eu phasellus tristique at.
        </p>
        <div class="sidebar-top-line mt16"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showComments: Boolean,
  },
}
</script>
