<template>
  <div class="white-container mt16">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Выберите способ оплаты</h3>
      </div>
    </div>
    <div class="mt32 row d-flex">
      <div class="col-md-4">
        <div class="tariff">
          <div class="tariff-bonuses">
            <img src="/sber.png" alt="" />
          </div>
          <div class="tariff-button">
            <p class="mb32">Сбербанк</p>
            <button class="btn">Выбрать</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="tariff">
          <div class="tariff-bonuses">
            <img src="/sber.png" alt="" />
          </div>
          <div class="tariff-button">
            <p class="mb32">Сбербанк</p>
            <button class="btn">Выбрать</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="tariff">
          <div class="tariff-bonuses">
            <img src="/sber.png" alt="" />
          </div>
          <div class="tariff-button">
            <p class="mb32">Сбербанк</p>
            <button class="btn">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tariff {
  border: 1px solid #ebebeb;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tariff-header {
  display: flex;
  justify-content: center;
  padding: 14px 0;
  background: #333;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.tariff-price-container {
  margin: 0 16px;
  border-bottom: 1px solid #ebebeb;
}

.tariff-price {
  display: flex;
  justify-content: center;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
}

.tariff-bonuses {
  padding: 90px 0;
  display: flex;
  justify-content: center;
}

.tariff-bonuses li {
  padding: 8px 0;
}

.tariff-bonuses ol {
  padding: 8px 0 0;
}

.tariff-button {
  padding: 0 16px 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
}

.tariff-button button {
  border: 1px solid #ebebeb;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 0;
  border-radius: 10px;
}
</style>
