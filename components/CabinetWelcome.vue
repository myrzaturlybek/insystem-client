<template>
  <div class="white-container">
    <div>
      <h2 class="general-content-header-title bold-text">
        Добро пожаловать в кабинет
      </h2>
      <p class="mt16">
        Осталось всего несколько шагов для завершения регистрации
      </p>
    </div>
    <div class="mt32">
      <h3 class="general-body-item-title bold-text">Заполните данные</h3>
      <div v-if="cabinetData.length > 0">
        <div
          v-for="item in cabinetData"
          :key="item.id"
          :class="[
            'mt16',
            'cabinet-data',
            { 'cabinet-data-done': item.isDone },
          ]"
        >
          <div :class="['d-flex', 'align-items-center']">
            <div
              :class="[
                'cabinet-data-number',
                { 'cabinet-data-number-done': item.isDone },
              ]"
            >
              1
            </div>
            <div class="ml16">{{ item.text }}</div>
          </div>
          <div class="d-flex align-items-center">
            <img
              v-if="!item.isDone"
              src="/alert-triangle.svg"
              alt=""
              class="mr16"
            />
            <img
              v-if="item.isDone"
              src="/circle check fullvs.svg"
              alt=""
              class="mr16"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt32">
      <nuxt-link to="/cabinets/registration" class="btn go-to-filling-button"
        >Перейти к заполнению</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cabinetData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.cabinet-data {
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  justify-content: space-between;
}

.cabinet-data-number {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: #ebebeb;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
}

.cabinet-data-number-done {
  background: #444;
  color: #fff;
}

.cabinet-data-done {
  background: #333;
  color: #fff;
}

.go-to-filling-button {
  color: #fff;
  background: #969;
  border-radius: 10px;
}
</style>
