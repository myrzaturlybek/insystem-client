<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Ответ на отклик</h3>
      </div>
    </div>
    <item-with-avatar img-url="/logo.png" class="mt32">
      <template #leftColumn>
        <a href="" class="item-link"
          ><p class="bold-text">Mobilka Electronic</p></a
        >

        <div class="mt16 df">
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
      </template>
      <template #rightColumn>
        <div>
          <p class="sidebar-user-status">поставщик</p>
          <img src="/verified.svg" alt="" class="ml16 icon16" />
          <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
        </div>
        <p class="little-grey-text">Электроника</p>
      </template>
    </item-with-avatar>
    <div class="sidebar-top-line mt16"></div>
    <div class="mt16">
      <p class="little-grey-text">08.08.2019 / 20:32</p>
      <p class="mt16">Поздравляем! Вас выбрали для выполнения задания</p>
      <div class="sidebar-top-line mt16"></div>
    </div>
    <div class="mt32">
      <button class="btn br10 bg-green text-white bold-text action-btns">
        Приступить
      </button>
    </div>
  </div>
</template>

<style scoped>
.action-btns {
  width: 187px;
  height: 32px;
}
</style>
