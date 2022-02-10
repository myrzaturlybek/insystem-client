<template>
  <div class="sidebar mr16 white-container2">
    <div class="sidebar-users">
      <div class="sidebar-top user1">
        <div class="sidebar-top-left">
          <div class="sidebar-user-img-cont">
            <div class="sidebar-user-img-greenpoint"></div>
            <img class="img48" src="/logo.png" alt="" />
          </div>
          <div class="sidebar-user-info">
            <p class="sidebar-user-name">Revenj</p>
            <p class="sidebar-user-status mt8">заказчик</p>
          </div>
        </div>
        <div v-show="!users" class="sibebar-user-arrow">
          <img class="icon24" src="/chevron-downvs.svg" @click="showUsers()" />
        </div>
        <div v-show="users" class="sibebar-user-check">
          <img class="icon22" src="/circle-check-black.svg" alt="" />
        </div>
      </div>
      <template v-if="users">
        <div class="sidebar-top user2">
          <div class="sidebar-top-left">
            <div class="sidebar-user-img-cont">
              <div class="sidebar-user-img-redpoint"></div>
              <img class="img48" src="/logo.png" alt="" />
            </div>
            <div class="sidebar-user-info">
              <p class="sidebar-user-name">Stroy Service</p>
              <p class="sidebar-user-status mt8">исполнитель</p>
            </div>
          </div>
        </div>
        <div class="sidebar-top user3">
          <div class="sidebar-top-left">
            <div class="sidebar-user-img-cont">
              <div class="sidebar-user-img-redpoint"></div>
              <img class="img48" src="/logo.png" alt="" />
            </div>
            <div class="sidebar-user-info">
              <p class="sidebar-user-name">Mobilka Electronic</p>
              <p class="sidebar-user-status mt8">поставщик</p>
            </div>
          </div>
        </div>
        <div class="sidebar-add-account-cont">
          <div class="sidebar-add-account">
            <div><img class="icon16" src="/plus.svg" alt="" /></div>
            <p>Добавить аккаунт</p>
          </div>
        </div>
      </template>
    </div>
    <div class="sidebar-top-line"></div>
    <the-nav></the-nav>
  </div>
</template>

<script>
export default {
  name: 'CabinetSidebar',
  data() {
    return {
      users: false,
    }
  },
  methods: {
    showUsers() {
      this.users = true
    },
  },
}
</script>
