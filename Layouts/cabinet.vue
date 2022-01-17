<template>
  <div>
    <first-header></first-header>
    <div class="main canvas">
      <div class="main-inner content-container">
        <h1 class="main-header">Личный кабинет</h1>
        <div class="main-content">
          <CabinetSidebar />
          <div class="content">
            <div class="employees">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CabinetLayout',
}
</script>
