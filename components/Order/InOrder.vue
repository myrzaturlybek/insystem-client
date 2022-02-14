<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Состав заказа</h3>
      </div>
    </div>
    <div class="mt32">
      <div class="general-content-header-top mb16">
        <div class="employees-good-name-outer">
          <div class="sidebar-user-img-cont">
            <div class="sidebar-user-img-greenpoint"></div>
            <img class="img48" src="/images 5.svg" alt="" />
          </div>
          <div class="ml16 good-name">
            <p class="bold-text">Mobilka Electronic</p>
            <div class="mt8 df">
              <div class="mr16">
                <img src="/kazakhstan 1.svg" alt="" />
              </div>
              <div class="mr8">
                <img class="icon16" src="/activated.svg" alt="" />
              </div>
              <div class="little-grey-text df">
                <div class="blue bold-text">4.9</div>
                / 5
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb8">
            <p class="sidebar-user-status">поставщик</p>
            <img src="/verified.svg" alt="" class="ml16 icon16" />
            <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
          </div>
          <div class="rating-percent">Электроника</div>
        </div>
      </div>
    </div>
    <div class="sidebar-top-line"></div>
    <div v-for="i in 2" :key="i">
      <div class="general-body-item-middle border-none">
        <div class="general-body-item-middle-left">
          <div class="general-body-item-img">
            <img class="iphone-img-big img84" src="/Iphone.svg" alt="" />
          </div>
          <div class="general-body-item-img-info showcase-body-item-img-info">
            <div class="general-body-item-img-name showcase-body-img-name">
              300 990 тг
            </div>
            <div
              class="general-body-item-img-status showcase-body-item-img-status"
            >
              Смартфон Apple iPhone X 256Gb Space Gray (MQAF2RJBJB)
            </div>
            <div class="showcase-body-item-img-amount-cont">
              <div class="showcase-body-item-img-amount">Цвет: серый</div>
            </div>
          </div>
        </div>
        <div>
          <div class="bold-text">1 шт</div>
        </div>
      </div>
      <div class="sidebar-top-line"></div>
    </div>

    <div class="d-flex justify-content-between mt16">
      <div class="bold-text">Всего товаров: 2</div>
      <div class="bold-text">616 980 тг</div>
    </div>

    <div class="general-content-header-top mt32">
      <div>
        <h3 class="general-body-item-title bold-text">Общая стоимость</h3>
      </div>
    </div>
    <div class="sidebar-top-line mt16"></div>

    <div class="d-flex justify-content-between mt16">
      <div>Всего товаров: 4</div>
      <div>616 980 тг</div>
    </div>
    <div class="d-flex justify-content-between mt16">
      <div>Моя скидка: 0 %</div>
      <div>0 тг</div>
    </div>
    <div class="d-flex justify-content-between mt16">
      <div class="bold-text">Итого к оплате</div>
      <div class="bold-text">616 980 тг</div>
    </div>
  </div>
</template>
