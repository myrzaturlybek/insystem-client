<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Импорт позиций</h3>
      </div>
    </div>
    <div class="row mt32">
      <div class="col-md-12">
        <p class="bold-text">Файл для импорта</p>
        <div class="imported-file col-md-4 mt16">
          <div class="d-flex">
            <i class="little-grey-text icon-file-text"></i>
            <div class="d-flex imported-file-text">
              <div>
                <p class="text-white">Обновленный прайс.xls</p>
                <p class="little-grey-text mt4">XLS / 25 КБ</p>
              </div>
            </div>
          </div>
          <div>
            <i class="icon-x little-grey-text"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt32">
      <div class="col-md-12">
        <div class="d-flex justify-content-between align-items-center">
          <p class="little-grey-text">Настройки импорта</p>
          <i class="icon-chevron-down little-grey-text"></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
      </div>
    </div>
    <div class="row mt32">
      <div class="col-md-12 d-flex justify-content-between">
        <p class="bold-text">Проверка файла</p>
        <p class="bold-text">100 %</p>
      </div>
      <div class="col-md-12 mt16">
        <div class="progress-bar"></div>
      </div>
    </div>
    <div class="row mt32">
      <div class="col-md-12 d-flex">
        <img src="/circle check fullvs.svg" alt="" />
        <p class="ml16">Позиций проверено: <span class="bold-text">5</span></p>
      </div>
    </div>
    <div class="row mt32">
      <div class="col-md-12">
        <p class="bold-text">Отчет проверки файла</p>
        <p class="mt16">Всего позиций: <span class="bold-text">5</span></p>
        <p class="mt16">
          Содержат ошибки в данных: <span class="bold-text">0</span>
        </p>
        <p class="mt16">
          Не могут быть загружены: <span class="bold-text">0</span>
        </p>
      </div>
    </div>
    <div class="row mt32">
      <div class="col-md-12">
        <div class="d-flex justify-content-between align-items-center">
          <p class="little-grey-text">Подробности отчета</p>
          <i class="icon-chevron-down little-grey-text"></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
      </div>
    </div>

    <div class="row mt32">
      <div class="col-md-12">
        <button class="btn br10 bg-black text-white bold-text action-btns">
          Продолжить
        </button>
        <button class="btn br10 border-gray bold-text action-btns ml16">
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imported-file {
  background: #333;
  border-radius: 10px;
  display: flex;
  padding: 8px 11px;
  justify-content: space-between;
}

.imported-file-text {
  margin-left: 11px;
}

.icon-file-text {
  font-size: 24px;
}

.progress-bar {
  height: 4px;
  border-radius: 2px;
  background: #969;
}

.action-btns {
  width: 187px;
  height: 32px;
}
</style>
