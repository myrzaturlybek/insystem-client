<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/circle check fullvs.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="countryName" class="col-md-6 mt32">
        <div class="bold-text mb16">Страна</div>
        <div class="mb16">{{ countryName }}</div>
        <div class="sidebar-top-line"></div>
      </div>
      <div v-if="cityName" class="col-md-6 mt32">
        <div class="bold-text mb16">Город</div>
        <div class="mb16">{{ cityName }}</div>
        <div class="sidebar-top-line"></div>
      </div>
    </div>
    <template v-if="!locations">
      <div class="mt32">
        <div class="bold-text mb16">Местоположение</div>
        <div class="mb16">Раимбека 369, уг. ул. Брусиловского, дом 33</div>
        <div class="sidebar-top-line"></div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.1826351433617!2d76.87522762102891!3d43.249095459662705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883697699dc154d%3A0x16d24e4c897e5825!2z0YPQu9C40YbQsCDQkdGA0YPRgdC40LvQvtCy0YHQutC-0LPQviAzMywg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1637517689780!5m2!1sru!2skg"
        height="312"
        style="border: 0; width: 100%"
        allowfullscreen=""
        loading="lazy"
        class="mt16 br10"
      ></iframe>
    </template>
    <template v-if="locations">
      <div v-for="location in locations" :key="location.id">
        <div class="mt32">
          <div class="bold-text mb16">{{ location.title }}</div>
          <div class="mb16">{{ location.address }}</div>
          <div class="sidebar-top-line"></div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.1826351433617!2d76.87522762102891!3d43.249095459662705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883697699dc154d%3A0x16d24e4c897e5825!2z0YPQu9C40YbQsCDQkdGA0YPRgdC40LvQvtCy0YHQutC-0LPQviAzMywg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1637517689780!5m2!1sru!2skg"
          height="312"
          style="border: 0; width: 100%"
          allowfullscreen=""
          loading="lazy"
          class="mt16 br10"
        ></iframe>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Адрес выполнения',
    },
    countryName: {
      type: String,
      default: null,
    },
    cityName: {
      type: String,
      default: null,
    },
    locations: {
      type: Array,
      default: null,
    },
  },
}
</script>
