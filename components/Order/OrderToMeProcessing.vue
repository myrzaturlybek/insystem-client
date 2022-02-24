<template>
  <div class="mt-16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
    </div>
    <div class="mt32">
      <div>
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
            <the-status
              value="confirmed"
              :statuses="statuses"
              :editable="false"
            ></the-status>
          </template>
        </item-with-avatar>
        <div class="sidebar-top-line mt16"></div>
      </div>
      <div class="mt32">
        <item-with-avatar img-url="/logo.png" circle>
          <template #leftColumn>
            <p class="bold-text">Вася Васечкин</p>
            <p>Кладовщик</p>
          </template>
          <template #rightColumn>
            <div class="d-flex">
              <p class="little-grey-text">08.08.2019 / 20:22</p>
              <i class="icon-more-vertical ml16"></i>
            </div>
            <the-status
              value="assembled"
              :statuses="statuses"
              :editable="false"
            ></the-status>
          </template>
        </item-with-avatar>
        <div class="sidebar-top-line mt16"></div>
      </div>
      <div class="mt32">
        <item-with-avatar img-url="/logo.png" circle>
          <template #leftColumn>
            <p class="bold-text">Василиса Васильевна</p>
            <p>Бухгалтер</p>
          </template>
          <template #rightColumn>
            <div class="d-flex">
              <p class="little-grey-text">08.08.2019 / 20:22</p>
              <i class="icon-more-vertical ml16"></i>
            </div>
            <the-status
              value="paid"
              :statuses="statuses"
              :editable="false"
            ></the-status>
          </template>
        </item-with-avatar>
        <div class="sidebar-top-line mt16"></div>
      </div>
      <div class="mt32">
        <item-with-avatar img-url="/logo.png" circle>
          <template #leftColumn>
            <p class="bold-text">Петр Петров</p>
            <p>Водитель</p>
          </template>
          <template #rightColumn>
            <div class="d-flex">
              <p class="little-grey-text">08.08.2019 / 20:22</p>
              <i class="icon-more-vertical ml16"></i>
            </div>
          </template>
        </item-with-avatar>
        <div class="sidebar-top-line mt16"></div>
      </div>

      <div class="mt32 d-flex">
        <button class="btn green-btn">Доставлен</button>
        <button class="ml16 btn white-btn">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Обработка заказа',
    },
  },
  data() {
    return {
      statuses: [
        { text: 'Подтверждён', color: '#8F00FF', value: 'confirmed' },
        { text: 'Собран', color: '#FFE600', value: 'assembled' },
        { text: 'Оплачен', color: '#136BF0', value: 'paid' },
      ],
    }
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
  background: #0cc;
  color: #fff;
}

.white-btn {
  border: 1px solid #ebebeb;
}
</style>
