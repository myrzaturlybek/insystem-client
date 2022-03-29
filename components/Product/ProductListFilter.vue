<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">{{ title }}</h3>
      </div>
      <div v-if="topFilter" class="sidebar-top-left">
        <div>За всё время</div>
        <div class="general-content-header-arrowdown hover-black m0-auto">
          <i class="icon16 little-grey-text icon-chevron-down ml16 little-grey-text ml16" />
        </div>
      </div>
    </div>
    <div v-if="stats" class="black-rectangle-cont mt32">
      <div class="black-rectangle">
        <div class="big-white-text mb8">108 496 500</div>
        <div class="little-grey-text">Оборот, тг</div>
      </div>
      <div class="black-rectangle">
        <div class="big-white-text mb8">22 345</div>
        <div class="little-grey-text">Заказы, шт</div>
      </div>
      <div class="black-rectangle">
        <div class="big-white-text mb8">4 856</div>
        <div class="little-grey-text">Средний чек, тг</div>
      </div>
    </div>
    <div class="general-content-header-bottom mt32">
      <div class="df">
        <div class="general-content-header-accordion-item">
          <div>Категория</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 little-grey-text" />
          </div>
        </div>
        <div class="general-content-header-accordion-item">
          <div>Бренд</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 little-grey-text" />
          </div>
        </div>
        <div class="general-content-header-accordion-item">
          <div>Цена</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 little-grey-text" />
          </div>
        </div>
        <div class="general-content-header-accordion-item">
          <div>Дата</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 little-grey-text" />
          </div>
        </div>
        <div class="general-content-header-accordion-item">
          <div>Статус</div>
          <div class="general-content-header-arrowdown">
            <i class="icon-chevron-down ml16 little-grey-text" />
          </div>
        </div>
      </div>
      <div class="general-content-header-search hover-black">
        <i class="icon-search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    topFilter: {
      type: Boolean,
      default: false,
    },
    stats: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
