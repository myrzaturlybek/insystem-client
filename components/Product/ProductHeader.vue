<template>
  <div class="white-container">
    <div class="general-content-header-top">
      <h2 class="general-content-header-title">
        <img
          v-if="backTo"
          class="mr16 icon24 back-to"
          src="/chevron-leftvs.svg"
          @click="$router.go(-1)"
        />
        {{ title }}
      </h2>
      <div
        v-if="actions && actions.length > 0"
        class="general-content-greytexts"
      >
        <div
          v-for="action in actions"
          :key="action.id"
          class="general-content-greytext little-grey-text"
          @click="$emit('action', action.method)"
        >
          {{ action.text }}
        </div>
      </div>
      <div v-if="statusOnHeader" class="general-content-header-greytexts">
        <the-status
          :statuses="statuses"
          :value="status"
          :editable="false"
        ></the-status>
      </div>
    </div>
    <div
      v-if="showMiddle"
      class="general-content-header-middle general-body-item-top border-none p0"
    >
      <div class="little-grey-text">
        {{ dateTimeText }} {{ dateTimeFormat }}
      </div>
      <the-status
        v-if="statusOnMiddle"
        :value="status"
        :statuses="statuses"
        :editable="middleStatusEditable"
        @changeStatus="changeStatus"
      ></the-status>
      <div v-if="showVerified" class="d-flex">
        <p v-if="!verified" class="little-grey-text mr16">Не проверенный</p>
        <p v-if="verified" class="text-success mr16">Проверенный</p>
        <img v-if="!verified" src="/shield-off.svg" />
        <img v-if="verified" src="/verified.svg" />
      </div>
    </div>
    <div
      v-if="bottomText"
      class="m16-0 general-body-item-middle border-none p0"
    >
      <p class="bold-text">{{ bottomText }}</p>
      <div v-if="bottomRightText" class="d-flex">
        <p>Процент</p>
        <p class="ml16">%</p>
        <i class="icon-chevron-down ml16"></i>
      </div>
    </div>
    <div v-if="ballance" class="m16-0 general-body-item-middle border-none p0">
      <p class="bold-text">Мой баланс: {{ ballance }}</p>
    </div>
    <div v-if="showMiddleLine" class="sidebar-top-line"></div>
    <div
      v-if="showBottom"
      class="m16-0 general-body-item-middle border-none p0"
    >
      <div class="bold-text">Вкл / Выкл</div>
      <div class="general-body-item-middle-right h16">
        <apple-switch
          :checked="turnedOn"
          @switch="$emit('toggle', $event)"
        ></apple-switch>
      </div>
    </div>
    <div v-if="turnedOnLine" class="sidebar-top-line mt16"></div>

    <div
      v-if="tabsItems.length > 0"
      class="mt32 d-flex justify-content-between"
    >
      <product-tabs
        :tabs-items="tabsItems"
        :value="tabValue"
        @switch="
          (value) => {
            $emit('tabSwitch', value)
          }
        "
      ></product-tabs>
      <div v-if="partnerButtons">
        <button class="btn bg-black br10 text-white px-5 bold-text mr16">
          Запрос отправлен
        </button>
        <button class="btn bg-white br10 px-5 bold-text border-gray">
          Отменить
        </button>
      </div>
    </div>
    <div v-if="showReplenish" class="mt32 px15">
      <div class="border-gray h48 br10 row d-flex align-items-center">
        <input
          type="text"
          placeholder="Введите сумму"
          class="col-md-10 replenish-input"
        />
        <div class="col-md-2">
          <div class="purple-button subscribe-button centralizer">
            <div class="white">Пополнить</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showBottomLine" class="sidebar-top-line"></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    backTo: {
      type: Boolean,
      default: true,
    },
    actions: {
      type: Array,
      default: () => [],
    },
    turnedOn: Boolean,
    dateTime: Date,
    showStatus: Boolean,
    free: Boolean,
    showMiddle: {
      type: Boolean,
      default: true,
    },
    showVerified: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: true,
    },
    showBottom: {
      type: Boolean,
      default: true,
    },
    bottomText: {
      type: String,
      default: null,
    },
    bottomRightText: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: null,
    },
    statuses: {
      type: Array,
      default: () => [],
    },
    statusOnHeader: {
      type: Boolean,
      default: false,
    },
    statusOnMiddle: {
      type: Boolean,
      default: false,
    },
    showMiddleLine: {
      type: Boolean,
      default: false,
    },
    showBottomLine: {
      type: Boolean,
      default: false,
    },
    dateTimeText: {
      type: String,
      default: 'Создан',
    },
    middleStatusEditable: {
      type: Boolean,
      default: true,
    },
    tabsItems: {
      type: Array,
      default: () => [],
    },
    tabValue: {
      type: String,
      default: '',
    },
    ballance: {
      type: String,
      default: null,
    },
    showReplenish: {
      type: Boolean,
      default: false,
    },
    partnerButtons: {
      type: Boolean,
      default: false,
    },
    turnedOnLine: Boolean,
  },
  computed: {
    dateTimeFormat() {
      return moment(this.dateTime).format('DD.MM.YYYY / hh:mm')
    },
  },
  methods: {
    changeStatus(status) {
      this.$emit('changeStatus', status)
    },
  },
}
</script>
