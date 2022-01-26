<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div class="d-flex align-items-center">
        <h3 v-if="!url" class="general-body-item-title">{{ title }}</h3>
        <nuxt-link v-if="url" :to="url"
          ><h3 v-if="url" class="general-body-item-title">
            {{ title }}
          </h3></nuxt-link
        >
        <p v-if="dateTime" class="little-grey-text">
          {{ dateTimeFormat }}
        </p>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img
            v-if="showValid"
            class="icon16"
            src="/circle check fullvs.svg"
            alt=""
          />
          <div v-if="showVerified" class="d-flex">
            <p v-if="!verified" class="little-grey-text mr16">Не проверенный</p>
            <p v-if="verified" class="text-success mr16">Проверенный</p>
            <img v-if="!verified" src="/shield-off.svg" />
            <i v-if="verified" class="icon-shield text-success"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="haveAvatar" class="col-md-12 mt32">
        <div class="add-avatar-button">
          <i class="icon-plus"></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
      </div>
      <div
        v-for="item in info"
        :key="item.id"
        :class="[
          { 'col-md-6': !item.fullSize },
          { 'col-md-12': item.fullSize },
          'mt32',
        ]"
      >
        <div class="bold-text mb16">{{ item.title }}</div>
        <div class="mb16">{{ item.text }}</div>
        <div class="sidebar-top-line"></div>
      </div>
    </div>
    <div v-if="showMap" class="row mt16">
      <div class="col-md-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.1826351433617!2d76.87522762102891!3d43.249095459662705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883697699dc154d%3A0x16d24e4c897e5825!2z0YPQu9C40YbQsCDQkdGA0YPRgdC40LvQvtCy0YHQutC-0LPQviAzMywg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skg!4v1637517689780!5m2!1sru!2skg"
          height="312"
          style="border: 0; width: 100%"
          allowfullscreen=""
          loading="lazy"
          class="mt16 br10"
        ></iframe>
      </div>
    </div>
    <div v-if="notes" class="mt16 little-grey-text">
      {{ notes }}
    </div>
    <div v-if="stats" class="mt16 d-flex stats">
      <div
        v-for="stat in stats"
        :key="stat.id"
        class="d-flex align-items-center"
      >
        <img :src="stat.icon" />
        <p class="bold-text ml16">{{ stat.text }} &nbsp;</p>
        <p>{{ stat.count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    title: {
      type: String,
      default: 'График работы',
    },
    url: {
      type: String,
      default: null,
    },
    dateTime: {
      type: Date,
      default: null,
    },
    showValid: {
      type: Boolean,
      default: true,
    },
    showVerified: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Array,
      default: () => [
        {
          title: 'Рабочие дни',
          text: 'Пн - Пт',
        },
        {
          title: 'Рабочее время',
          text: 'С 10 до 18',
        },
      ],
    },
    notes: {
      type: String,
      default: null,
    },
    stats: {
      type: Array,
      default: null,
    },
    showMap: Boolean,
    haveAvatar: Boolean,
  },
  computed: {
    dateTimeFormat() {
      return moment(this.dateTime).format('DD.MM.YYYY / hh:mm')
    },
  },
}
</script>
