<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Комментарии к заказу</h3>
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
            <p class="bold-text">Иван Иванов</p>
            <div class="mt16 df">Менеджер</div>
          </div>
        </div>
        <div>
          <div class="mb8">
            <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-top-line"></div>
    <p class="mt16 little-grey-text">08.08.2019 / 20:05</p>
    <p class="mt16">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet
      dignissim orci ut malesuada proin ut tortor in. Fringilla fusce posuere
      penatibus sapien, sit venenatis arcu. Sed aliquet donec risus condimentum
      vitae, eu phasellus tristique at. Amet, viver.
    </p>
    <div class="sidebar-top-line mt16"></div>
    <div class="row mt32">
      <div
        class="col-md-12 little-grey-text d-flex cursor-pointer hover-black"
        @click="$emit('addComment')"
      >
        <i class="icon-plus"></i>
        <p class="ml16">Добавить</p>
      </div>
    </div>
  </div>
</template>
