<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Отклик на задание</h3>
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

    <div class="mt16">
      <p class="little-grey-text">08.08.2019 / 20:12</p>
      <p class="mt16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam amet
        dignissim orci ut malesuada proin ut tortor in. Fringilla fusce posuere
        penatibus sapien, sit venenatis arcu. Sed aliquet donec risus
        condimentum vitae, eu phasellus tristique at. Amet, viver.
      </p>
      <div class="sidebar-top-line mt16"></div>
    </div>

    <div class="mt16">
      <div class="d-flex">
        <div class="d-flex align-items-center">
          <img src="/paperclip.svg" alt="paperclip" />
        </div>
        <div class="pl16">
          <p class="bold-text">Коммерческое предложение. docx</p>
          <p class="little-grey-text">DOCX / 25 KB</p>
        </div>
      </div>
    </div>

    <div v-if="showButtons" class="mt32">
      <div v-if="selected" class="d-flex">
        <button
          class="btn br10 bg-black text-white feedback-button border-none"
        >
          Выбранный
        </button>
        <button class="btn br10 bg-white ml16 feedback-button">Отменить</button>
      </div>
      <div v-if="!selected" class="d-flex">
        <button
          class="btn br10 bg-green text-white feedback-button border-none"
        >
          Выбрать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    showButtons: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
