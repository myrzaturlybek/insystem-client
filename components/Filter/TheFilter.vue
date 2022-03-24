<template>
  <div class="services-header white-container general-content-header">
    <div class="general-content-header-top">
      <h2 v-if="titleSize == 'large'" class="general-content-header-title">
        {{ title }}
      </h2>
      <h3 v-if="titleSize == 'small'" class="general-body-item-title">
        {{ title }}
      </h3>
      <div
        v-if="actions && actions.length > 0"
        class="general-content-greytexts"
      >
        <div
          v-for="action in actions"
          :key="action.id"
          class="general-content-greytext little-grey-text"
          :style="{ color: action.color || '#bbbbbc' }"
          @click="$emit('action', action.method)"
        >
          {{ action.text }}
        </div>
      </div>
      <div v-if="checked !== null" class="d-flex align-items-center">
        <apple-switch
          :checked="checked"
          @switch="$emit('check', $event)"
        ></apple-switch>
      </div>
    </div>
    <div v-if="showMiddle" class="general-content-header-middle">
      <div>
        <div v-if="activeBefore" class="little-grey-text">
          Активен до {{ activeBefore }}
        </div>
        <product-tabs
          v-if="switchItems && switchItems.length > 0"
          :tabs-items="switchItems"
          :value="switchValue"
          @switch="
            (value) => {
              $emit('switch', value)
            }
          "
        ></product-tabs>
      </div>
      <div v-if="subscribers" class="subscriptions-num-cont">
        <div class="bold-text">На вас подписанно: {{ subscribers }}</div>
      </div>
    </div>
    <div v-if="showBottom" class="general-content-header-bottom mt32">
      <div class="df">
        <div
          v-for="filter in filters"
          :key="filter.id"
          class="general-content-header-accordion-item"
        >
          <div>{{ filter }}</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 cursor-pointer little-grey-text" />
          </div>
        </div>
      </div>
      <div class="general-content-header-search">
        <img class="icon24" src="/searchvs.svg" alt="" />
      </div>
    </div>
    <div v-if="showToggleAll">
      <div class="mt32 d-flex justify-content-between">
        <div class="bold-text">Вкл / Выкл</div>
        <div class="general-body-item-middle-right h16">
          <apple-switch
            :checked="turnedOnAll"
            @switch="$emit('toggleAll', $event)"
          ></apple-switch>
        </div>
      </div>
      <div class="sidebar-top-line mt16"></div>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'TheFilter',
  props: {
    title: {
      type: String,
      default: '',
    },
    titleSize: {
      type: String,
      default: 'large',
    },
    actions: {
      type: Array,
      default: () => [],
    },
    switchItems: {
      type: Array,
      default: () => [],
    },
    switchValue: {
      type: String,
      default: '',
    },
    filters: {
      type: Array,
      default: () => [],
    },
    createUrl: {
      type: String,
      default: '',
    },
    showSwitch: {
      type: Boolean,
      default: false,
    },
    showMiddle: {
      type: Boolean,
      default: true,
    },
    subscribers: {
      type: Number,
      default: null,
    },
    activeBefore: {
      type: Date,
      default: null,
    },
    showBottom: {
      type: Boolean,
      default: true,
    },
    checked: {
      type: Boolean,
      default: null,
    },
    showToggleAll: Boolean,
    turnedOnAll: Boolean,
  },
}
</script>
