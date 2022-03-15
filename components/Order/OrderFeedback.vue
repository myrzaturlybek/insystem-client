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
          <a href="#" class="item-link">
            <p class="bold-text">Иван Иванов</p>
          </a>
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
      <template v-if="!isTask">
        <div class="mt16">
          <item-with-avatar img-url="/order-photo.png">
            <template #leftColumn>
              <div>
                <a href="#" class="item-link"><p>Заказ № 00000001</p></a>
              </div>
              <div>
                <img src="/Rating.svg" alt="rating" />
              </div>
            </template>
            <template #rightColumn>
              <div></div>
              <p class="little-grey-text">Отлично</p>
            </template>
          </item-with-avatar>
          <div class="sidebar-top-line mt16"></div>
        </div>
        <div class="mt16">
          <item-with-avatar class="mt16" img-url="/iphone.svg">
            <template #leftColumn>
              <div>
                <a href="#" class="item-link">
                  <p>Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)</p>
                </a>
              </div>
              <div>
                <img src="/Rating.svg" alt="" />
              </div>
            </template>
            <template #rightColumn>
              <div></div>
              <p class="little-grey-text">Хорошо</p>
            </template>
          </item-with-avatar>
          <div class="sidebar-top-line mt16"></div>
        </div>
        <div class="mt16">
          <item-with-avatar class="mt16" img-url="/iphone.svg">
            <template #leftColumn>
              <div>
                <a href="#" class="item-link">
                  <p>Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)</p>
                </a>
              </div>
              <div>
                <img src="/Rating.svg" alt="" />
              </div>
            </template>
            <template #rightColumn>
              <div></div>
              <p class="little-grey-text">Хорошо</p>
            </template>
          </item-with-avatar>
          <div class="sidebar-top-line mt16"></div>
        </div>
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
      </template>
      <template v-if="isTask">
        <div class="mt16">
          <item-with-avatar img-url="/order-photo.png">
            <template #leftColumn>
              <div>
                <a href="#" class="item-link">
                  <p>Задание № 00000001</p>
                </a>
              </div>
              <div>
                <img src="/Rating.svg" alt="rating" />
              </div>
            </template>
            <template #rightColumn>
              <div></div>
              <p class="little-grey-text">Отлично</p>
            </template>
          </item-with-avatar>
          <div class="sidebar-top-line mt16"></div>
        </div>
      </template>
      <div class="mt32 d-flex">
        <button class="btn green-btn">Опубликовать</button>
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
      default: 'Отзыв о заказе',
    },
    isTask: Boolean,
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
