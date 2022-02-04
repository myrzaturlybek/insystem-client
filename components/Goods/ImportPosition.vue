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
            <i
              class="icon-x little-grey-text cursor-pointer"
              @click="$emit('deleteFile')"
            ></i>
          </div>
        </div>
        <p v-if="steps[2].show" class="mt16 little-grey-text">
          Дата и время импорта 08.08.2019 / 19:32
        </p>
      </div>
    </div>

    <div v-if="!steps[2].show" class="row mt32">
      <div class="col-md-12">
        <div class="d-flex justify-content-between align-items-center">
          <p class="little-grey-text">Настройки импорта</p>
          <i
            v-show="!showImportSettings"
            class="icon-chevron-down little-grey-text cursor-pointer"
            @click="showImportSettings = true"
          ></i>
          <i
            v-show="showImportSettings"
            class="icon-chevron-up little-grey-text cursor-pointer"
            @click="showImportSettings = false"
          ></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
        <div v-show="showImportSettings" class="mt32 row">
          <div class="col-md-6">
            <p class="bold-text">Что нужно обновить</p>
            <ul>
              <li
                v-for="item in importSettings.needUpdate"
                :key="item.id"
                class="mt-16 import-settings"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <p class="bold-text">Статус товаров, которых нет в файле</p>
            <ul>
              <li
                v-for="item in importSettings.notInFile"
                :key="item.id"
                class="mt-16 import-settings"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <template v-if="steps[0].show">
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
          <p class="ml16">
            Позиций проверено: <span class="bold-text">5</span>
          </p>
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
            <i
              v-show="!showReportDetails"
              class="icon-chevron-down little-grey-text cursor-pointer"
              @click="showReportDetails = true"
            ></i>
            <i
              v-show="showReportDetails"
              class="icon-chevron-up little-grey-text cursor-pointer"
              @click="showReportDetails = false"
            ></i>
          </div>
          <div class="sidebar-top-line mt16"></div>
          <div v-show="showReportDetails" class="row mt32">
            <div class="col-md-12">
              <p class="bold-text">Файл проверен</p>
              <p class="mt16">
                Всего позиций: <span class="bold-text">5</span>
              </p>
              <p class="mt16">
                Позиций с ошибками: <span class="bold-text">0</span>
              </p>
              <p class="mt16">
                Проверенных позиций: <span class="bold-text">5</span>
              </p>
              <p class="mt16">
                Будет создано товаров: <span class="bold-text">0</span>
              </p>
              <p class="mt16">
                Будет обновлено товаров: <span class="bold-text">0</span>
              </p>
              <p class="mt16">
                Не изменилось товаров: <span class="bold-text">0</span>
              </p>
              <p class="mt16">
                Содержат ошибки в данных: <span class="bold-text">0</span>
              </p>
              <p class="mt16">
                Не могут быть загружены: <span class="bold-text">0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="steps[1].show">
      <div class="row mt32">
        <div class="col-md-12">
          <p class="bold-text">Сопостовление полей</p>
          <div class="mt16 border-gray br10">
            <div class="table-header p16 d-flex justify-content-between">
              <p class="bold-text">Название поля в файле</p>
              <p class="bold-text">Название поля на площадке</p>
            </div>
            <div
              v-for="item in fieldMapping"
              :key="item.id"
              class="table-item d-flex justify-content-between"
            >
              <p>{{ item.text }}</p>
              <p class="little-grey-text">
                Выберите из списка
                <i class="ml16 icon-chevron-down"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="steps[2].show">
      <div class="row mt32">
        <div class="col-md-12">
          <p class="bold-text">Импорт данных</p>
          <div class="mt16 d-flex">
            <img src="/circle check fullvs.svg" />
            <p class="ml16">
              Обработано позиций: <span class="bold-text">5 из 5</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row mt32">
        <div class="col-md-12">
          <div class="d-flex justify-content-between align-items-center">
            <p class="little-grey-text">Подробности отчета</p>
            <i class="icon-chevron-down little-grey-text cursor-pointer"></i>
          </div>
          <div class="sidebar-top-line mt16"></div>
        </div>
      </div>
      <div class="row mt32">
        <div class="col-md-12">
          <p class="bold-text">Импорт фотографий</p>
          <div class="mt16 d-flex">
            <img src="/circle check fullvs.svg" />
            <p class="ml16">
              Обработано позиций: <span class="bold-text">5 из 5</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row mt32">
        <div class="col-md-12">
          <div class="d-flex justify-content-between align-items-center">
            <p class="little-grey-text">Подробности отчета</p>
            <i class="icon-chevron-down little-grey-text cursor-pointer"></i>
          </div>
          <div class="sidebar-top-line mt16"></div>
        </div>
      </div>
    </template>

    <div v-if="!steps[2].show" class="row mt32">
      <div class="col-md-12">
        <button
          class="btn br10 bg-black text-white bold-text action-btns"
          @click="nextStep()"
        >
          Продолжить
        </button>
        <button
          class="btn br10 border-gray bold-text action-btns ml16"
          @click="$emit('deleteFile')"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 0,
      steps: [{ show: true }, { show: false }, { show: false }],
      showImportSettings: false,
      showReportDetails: false,
      importSettings: {
        needUpdate: [
          { text: 'Фото' },
          { text: 'Название' },
          { text: 'Артикул' },
          { text: 'Количество' },
          { text: 'Наличие' },
          { text: 'Цена' },
          { text: 'Скидки' },
          { text: 'Группа' },
          { text: 'Описание' },
          { text: 'Характеристики' },
          { text: 'Склад' },
          { text: 'Шоурум' },
          { text: 'Заметки' },
        ],
        notInFile: [{ text: 'Название' }],
      },
      fieldMapping: [
        { text: 'Название' },
        { text: 'Артикул' },
        { text: 'Количество' },
        { text: 'Наличие' },
        { text: 'Цена' },
        { text: 'Скидки' },
        { text: 'Группа' },
        { text: 'Описание' },
        { text: 'Характеристики' },
        { text: 'Склад' },
        { text: 'Шоурум' },
        { text: 'Заметки' },
      ],
    }
  },
  methods: {
    nextStep() {
      this.steps[this.currentStep].show = false
      this.steps[this.currentStep + 1].show = true
      this.currentStep = this.currentStep + 1
    },
  },
}
</script>

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

li.import-settings {
  list-style-type: disc;
  margin-left: 24px;
}

.table-header {
  border-bottom: 1px solid #ebebeb;
}

.table-item {
  margin: 0 16px;
  padding: 16px 0;
  border-bottom: 1px solid #ebebeb;
}

.table-item:last-child {
  border-bottom: none;
}
</style>
