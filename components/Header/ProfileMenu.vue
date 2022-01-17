<template>
  <div v-if="show" class="modal-profile_menu">
    <div class="user-team">
      <div class="user-team__item">
        <div class="user-team__avatar online">
          <div class="user-team__avatar-img">
            <img src="/user.jpg" />
          </div>
        </div>
        <div class="user-team__name">
          <span>Reve </span>
          <p>ЗАКАЗЧИК</p>
        </div>
        <div class="user-team__btn">
          <i class="icon-check"></i>
        </div>
        <div
          class="user-team__btn mobile"
          :class="{ active: toggleTab }"
          @click="clickToggleTab"
        >
          <i class="icon-check"></i>
        </div>
      </div>

      <div class="user-team__tab" :class="{ active: toggleTab }">
        <div class="user-team__item">
          <div class="user-team__avatar offline">
            <div class="user-team__avatar-img">
              <img src="/user.jpg" />
            </div>
          </div>
          <div class="user-team__name">
            <span>Revenj</span>
            <p>ИСПОЛНИТЕЛЬ</p>
          </div>
        </div>
        <div class="user-team__item">
          <div class="user-team__avatar offline">
            <div class="user-team__avatar-img">
              <img src="/user.jpg" />
            </div>
          </div>
          <div class="user-team__name">
            <span>Revenj</span>
            <p>ПОСТАВЩИК</p>
          </div>
        </div>
      </div>

      <button class="user-team__add">
        <i class="icon-plus"></i>Добавить аккаунт
      </button>
    </div>
    <div class="user-wrap">
      <template v-if="$page.props.user">
        <div class="img_user-avatar online">
          <div class="avatar">
            <img src="/user.jpg" />
          </div>
        </div>

        <div class="info">
          <h2>Здравствуйте,</h2>
          <h1 class="name">{{ $page.props.user.name }}</h1>
        </div>
      </template>

      <div v-else class="links">
        <a :href="route('login')">Войти</a>
        <div></div>
        <a :href="route('registration')">Зарегистрироваться</a>
      </div>
    </div>

    <div class="main-btns_wrap">
      <div class="item">
        <a href="/">
          <i class="icon-home"></i>
          Главная
        </a>
      </div>
      <div class="item">
        <a
          :href="route('products.index')"
          :class="{ active: route().current('products.*') }"
          class="products_link"
        >
          <i class="icon-briefcase"></i>Товары</a
        >
      </div>
      <div class="item">
        <a
          :href="route('services.index')"
          :class="{ active: route().current('services.*') }"
          class="services_link"
        >
          <i class="icon-truck"></i>Услуги
        </a>
      </div>
      <div class="item">
        <a
          :href="route('tasks.index')"
          :class="{ active: route().current('tasks.index') }"
          class="task_link"
        >
          <i class="icon-clipboard"></i>Задания
        </a>
      </div>
    </div>

    <div class="wrap-link">
      <a
        v-if="!$page.props.user"
        :href="route('company_account')"
        class="btn account"
      >
        <div class="img"><img src="/layout.svg" class="svg" /></div>
        Личный кабинет
      </a>
      <a :href="route('tasks.create')" class="btn mobile">
        <div class="img"><img src="/plus_header.svg" class="svg" /></div>
        Создать задание
      </a>
      <a :href="route('messenger')" class="btn mobile">
        <div class="img"><img src="/message-square.svg" class="svg" /></div>
        Мессенджер
      </a>
      <a :href="route('cart')" class="btn mobile">
        <div class="img"><img src="/shopping-cart.svg" class="svg" /></div>
        Корзина
      </a>
      <a :href="route('favorites')" class="btn mobile">
        <div class="img"><img src="/heart.svg" class="svg" /></div>
        Избранное
      </a>
      <a v-if="!$page.props.user" href="" class="btn desktop">
        <div class="img"><img src="/file-text.svg" class="svg" /></div>
        Мои заказы
      </a>
      <a v-if="!$page.props.user" href="" class="btn desktop">
        <div class="img"><i class="icon-clipboard"></i></div>
        Мои задания
      </a>
      <a href="" class="btn">
        <div class="img"><img src="/help-circle.svg" class="svg" /></div>
        Помощь
      </a>
      <a v-if="!$page.props.user" href="#" class="btn" onclick="logout()">
        <div class="img"><img src="/log-in.svg" class="svg" /></div>
        Выйти
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleTab: false,
      show: false,
    }
  },
  mounted() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.show = true), 300)
  },
  methods: {
    clickToggleTab() {
      this.toggleTab = !this.toggleTab
    },
  },
}
</script>
<style lang="scss">
.user-team {
  margin-bottom: 32px;
  &__item {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
  &__avatar-img {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__avatar {
    position: relative;
    margin-right: 16px;
    &:after {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 10px;
      height: 10px;
      background: #33cc00;
      border: 2px solid #ffffff;
    }
    &.offline {
      &:after {
        background: #d80808;
      }
    }
  }

  &__name {
    span {
      font-family: Arial;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 4px;
    }
    p {
      background: #bbbbbc;
      border-radius: 5px;
      border-radius: 10px;
      color: #ffffff;
      padding: 3px 4px;
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 9px;
      line-height: 10px;
    }
  }

  &__btn {
    border: none;
    background-color: transparent;
    margin-left: auto;
    background-color: #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    width: 16px;
    height: 16px;
    min-width: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &.mobile {
      display: none;
    }
    i {
      font-size: 12px;
      color: #fff;
    }
  }
  &__add {
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background-color: transparent;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    i {
      margin-right: 8px;
    }
  }
}

@media (min-width: 300px) and (max-width: 1024px) {
  .user-team {
    &__tab {
      height: 0px;
      overflow: hidden;
      transition: all 0.3s linear;
      &.active {
        height: auto;
      }
    }
    &__name {
      span {
        color: #fff;
      }
    }

    &__btn {
      color: #fff;
      background-color: transparent;
      display: none;
      &.mobile {
        display: block;
        &.active {
          background-color: #fff;

          i {
            color: #000;
          }
        }
      }
      i {
        color: #fff;
      }
    }

    &__add {
      color: #fff;
    }
  }
}
</style>
