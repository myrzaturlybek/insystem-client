<template>
  <div class="mt-16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
    </div>
    <div class="mt32">
      <item-with-avatar img-url="/logo.png" circle>
        <template #leftColumn>
          <p class="bold-text">Иван Иванов</p>
          <p>Менеджер</p>
        </template>
        <template #rightColumn>
          <div class="d-flex">
            <p class="little-grey-text">08.08.2019 / 20:22</p>
            <i class="icon-more-vertical ml16"></i>
          </div>
        </template>
      </item-with-avatar>
      <div class="sidebar-top-line mt16"></div>
      <template v-if="showMiddle">
        <div class="mt16">
          <p class="bold-text">Комментарий</p>
          <p class="mt16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet
            dignissim orci ut malesuada proin ut tortor in. Fringilla fusce
            posuere penatibus sapien, sit venenatis arcu. Sed aliquet donec
            risus condimentum vitae, eu phasellus tristique at. Amet, viver.
          </p>
          <div class="sidebar-top-line mt16"></div>
        </div>
        <div class="mt16">
          <p class="bold-text">Фото</p>
          <div class="d-flex mt16">
            <img
              v-for="photo in 4"
              :key="photo"
              src="/iphone.svg"
              alt="good"
              class="goods-photo"
            />
          </div>
          <div class="mt16 sidebar-top-line"></div>
        </div>
      </template>
      <div class="mt32 d-flex">
        <button class="btn green-btn">{{ successButtonText }}</button>
        <button class="ml16 btn white-btn">{{ cancelButtonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMiddle: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Обработка заказа',
    },
    successButtonText: {
      type: String,
      default: 'Опубликовать',
    },
    cancelButtonText: {
      type: String,
      default: 'Отменить',
    },
  },
}
</script>

<style scoped>
.goods-photo {
  width: 72px;
  height: 72px;
  border-radius: 10px;
  margin-right: 16px;
}

.goods-photo:last-child {
  margin-right: 0;
}

.btn {
  width: 187px;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-weight: 700;
}

.green-btn {
  background: #33b601;
  color: #fff;
}

.white-btn {
  border: 1px solid #ebebeb;
}
</style>
