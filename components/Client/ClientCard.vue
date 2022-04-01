<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
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
            <div class="mt16 df">
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
          <div class="mb16">
            <p class="sidebar-user-status">поставщик</p>
            <img src="/verified.svg" alt="" class="ml16 icon16" />
            <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
          </div>
          <div class="rating-percent little-grey-text">Электроника</div>
        </div>
      </div>
    </div>
    <div class="sidebar-top-line"></div>
    <div>
      <div class="row">
        <div class="col-md-6 mt32">
          <div class="bold-text mb16">На площадке</div>
          <div class="mb16">1 год и 2 месяца</div>
          <div class="sidebar-top-line"></div>
        </div>
        <div class="col-md-6 mt32">
          <div class="bold-text mb16">Создал заданий</div>
          <div class="mb16">1 000 +</div>
          <div class="sidebar-top-line"></div>
        </div>
        <div class="col-md-6 mt32">
          <div class="bold-text mb16">Номер телефона</div>
          <div class="mb16">+7 (700) 700 70 70</div>
          <div class="sidebar-top-line"></div>
        </div>
        <div class="col-md-6 mt32">
          <div class="bold-text mb16">Электронная почта</div>
          <div class="mb16">pup@gmail.com</div>
          <div class="sidebar-top-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Карточка клиента',
    },
  },
}
</script>
