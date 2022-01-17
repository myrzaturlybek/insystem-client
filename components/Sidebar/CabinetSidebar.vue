<template>
  <div class="sidebar mr16 white-container2">
    <div class="sidebar-top mb16 user1">
      <div class="sidebar-top-left">
        <div class="sidebar-user-img-cont">
          <div class="sidebar-user-img-greenpoint"></div>
          <img class="img48" src="/logo.png" alt="" />
        </div>
        <div class="sidebar-user-info">
          <p class="sidebar-user-name">Revenj</p>
          <p class="sidebar-user-status">заказчик</p>
        </div>
      </div>
      <div class="sibebar-user-arrow">
        <img class="icon24" src="/chevron-downvs.svg" alt="" />
      </div>
      <div class="sibebar-user-check">
        <img class="icon16" src="/circle check fullvs.svg" alt="" />
      </div>
    </div>
    <div class="sidebar-top user2">
      <div class="sidebar-top-left">
        <div class="sidebar-user-img-cont">
          <div class="sidebar-user-img-redpoint"></div>
          <img class="img48" src="/Исполнитель-icon.svg" alt="" />
        </div>
        <div class="sidebar-user-info">
          <p class="sidebar-user-name">Stroy Service</p>
          <p class="sidebar-user-status">исполнитель</p>
        </div>
      </div>
      <div class="sibebar-user-check">
        <img class="icon16" src="/circle check fullvs.svg" alt="" />
      </div>
    </div>
    <div class="sidebar-top user3 sidebar-top-last">
      <div class="sidebar-top-left">
        <div class="sidebar-user-img-cont">
          <div class="sidebar-user-img-redpoint"></div>
          <img class="img48" src="/Поставщик-icon.svg" alt="" />
        </div>
        <div class="sidebar-user-info">
          <p class="sidebar-user-name">Mobilka Electronic</p>
          <p class="sidebar-user-status">поставщик</p>
        </div>
      </div>
      <div class="sibebar-user-check">
        <img class="icon16" src="/circle check fullvs.svg" alt="" />
      </div>
    </div>
    <div class="sidebar-add-account-cont">
      <div class="sidebar-add-account">
        <div><img class="icon24" src="/plus.svg" alt="" /></div>
        <p>Добавить аккаунт</p>
      </div>
    </div>
    <div class="sidebar-top-line"></div>
    <the-nav></the-nav>
  </div>
</template>

<script>
export default {
  name: 'CabinetSidebar',
  data() {
    return {}
  },
}
</script>
