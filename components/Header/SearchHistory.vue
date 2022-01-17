<template>
  <div class="history_search">
    <div class="container">
      <div class="title">История поиска</div>
      <div class="row history_search__wrap">
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 col-12">
          <div class="history_search__btn">
            Смартфоны и гаджеты
            <button class="history_search__btn-close">
              <i class="icon-x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  methods: {},
}
</script>
<style lang="scss">
.history_search {
  &__wrap {
    margin-bottom: 32px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    padding-top: 16px;
    font-family: Arial;
    font-size: 14px;
    line-height: 16px;
    border-bottom: 1px solid #ebebeb;

    overflow-x: hidden;
    opacity: 0;
    transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover {
      cursor: pointer;
    }
  }

  &__btn-close {
    background-color: transparent;
    border: none;
    i {
      color: #bbbbbc;
    }
    &:hover {
      i {
        color: #000;
      }
    }
  }

  &.active {
    .history_search__btn {
      opacity: 1;
      transition-delay: 0.6s, 0.6s, 0s;
      transform: translateY(0);
      transition-property: transform, opacity, color;
      transition-duration: 0.55s, 0.55s, 0.3s;
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
        ease-in-out, ease-in-out;
    }
  }
}
</style>
