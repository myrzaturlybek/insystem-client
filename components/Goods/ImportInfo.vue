<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Выберите способ оплаты</h3>
      </div>
    </div>
    <div class="mt32 row d-flex">
      <div class="col-md-6">
        <div class="import-info-help">
          <p class="bold-text text-white mb16">Как импортировать ?</p>
          <p class="little-grey-text mb16">Подробнее об импорте</p>
          <p class="little-grey-text">Файл XLS, XLSX, CSV, XML, YML</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="import-info-help">
          <p class="bold-text text-white mb16">Как синхронизировать ?</p>
          <p class="little-grey-text mb16">С системой 1С</p>
          <p class="little-grey-text">С сервисом Мой склад</p>
        </div>
      </div>
    </div>
    <div class="mt32 row">
      <div class="col-md-12 mb16">
        <p class="bold-text">Способ импорта</p>
      </div>
      <div class="col-md-12 mb16">
        <label
          class="
            d-flex
            justify-content-start
            align-items-center
            radio-button-container
          "
        >
          <input
            v-model="importMethod"
            type="radio"
            value="fromServer"
            name="importMethod"
          />
          <span></span>
          <span class="icon-check radio-picked-icon"></span>
          <p>Загрузить файл с сервера</p>
        </label>
      </div>
      <div class="col-md-12 mb32">
        <label
          class="
            d-flex
            justify-content-start
            align-items-center
            radio-button-container
          "
        >
          <input
            v-model="importMethod"
            type="radio"
            value="fromPc"
            name="importMethod"
          />
          <span></span>
          <span class="icon-check radio-picked-icon"></span>
          <p>Загрузить файл с компьютера</p>
        </label>
      </div>
      <div v-if="importFromPC" class="col-md-12 mb32">
        <button class="btn upload-file-button mb16">Загрузить файл</button>
        <p class="little-grey-text">
          Формат: XLS, XLSX, CSV, XML, YML размером до 180 МБ, а также Zip, GZip
          архивы
        </p>
      </div>
      <div class="mb32 col-md-12">
        <custom-input
          type="text"
          name="importFileLink"
          :value="importFileUrl"
          placeholder="Укажите ссылку"
        ></custom-input>
        <p class="mt16 little-grey-text">
          Формат: XLS, XLSX, CSV, XML, YML размером до 180 МБ, а также Zip, GZip
          архивы
        </p>
      </div>
      <div class="col-md-12 mb32 d-flex cursor-pointer">
        <i class="icon-plus little-grey-text mr16"></i>
        <p class="little-grey-text">Добавить ссылку</p>
      </div>
      <div class="col-md-12 import-settings">
        <div class="d-flex justify-content-between align-items-center">
          <p class="little-grey-text">Настройки импорта</p>
          <i class="icon-chevron-down little-grey-text"></i>
        </div>
        <div class="sidebar-top-line mt16"></div>
        <div class="mt32 row">
          <div class="col-md-6">
            <p class="bold-text">Информация которую надо обновить</p>
            <label
              v-for="info in infoForUpdateItems"
              :key="info.id"
              class="
                d-flex
                justify-content-start
                align-items-center
                radio-button-container
                mt16
              "
            >
              <input
                v-model="infoForUpdate"
                type="checkbox"
                :value="info.value"
                name="infoForUpdate"
              />
              <span></span>
              <span class="icon-check radio-picked-icon"></span>
              <p>{{ info.text }}</p>
            </label>
          </div>
          <div class="col-md-6">
            <p class="bold-text">Общие настройки</p>
            <label
              v-for="setting in generalSettingsItems"
              :key="setting.id"
              class="
                d-flex
                justify-content-start
                align-items-center
                radio-button-container
                mt16
              "
            >
              <input
                v-model="generalSettings"
                type="checkbox"
                :value="setting.value"
                name="generalSettings"
              />
              <span></span>
              <span class="icon-check radio-picked-icon"></span>
              <p>{{ setting.text }}</p>
            </label>
            <p class="bold-text mt32">Статус товаров, которых нет в файле</p>
            <label
              v-for="good in goodsNotInFileItems"
              :key="good.id"
              class="
                d-flex
                justify-content-start
                align-items-center
                radio-button-container
                mt16
              "
            >
              <input
                v-model="goodsNotInFile"
                type="checkbox"
                :value="good.value"
                name="goodsNotInFile"
              />
              <span></span>
              <span class="icon-check radio-picked-icon"></span>
              <p>{{ good.text }}</p>
            </label>
            <p class="bold-text mt32">Автомотическое обновление ссылки</p>
            <label
              v-for="item in autoLinkUpdateItems"
              :key="item.id"
              class="
                d-flex
                justify-content-start
                align-items-center
                radio-button-container
                mt16
              "
            >
              <input
                v-model="autoLinkUpdate"
                type="radio"
                :value="item.value"
                name="autoLinkUpdate"
              />
              <span></span>
              <span class="icon-check radio-picked-icon"></span>
              <p>{{ item.text }}</p>
            </label>
          </div>

          <div class="col-md-12 mt32">
            <button class="btn save-button">Сохранить настройки</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      importFileUrl: '',
      importMethod: 'fromServer',
      infoForUpdate: ['photo'],
      infoForUpdateItems: [
        {
          value: 'photo',
          text: 'Фото',
        },
        {
          value: 'name',
          text: 'Название',
        },
        {
          value: 'vendorCode',
          text: 'Артикул',
        },
        {
          value: 'number',
          text: 'Количество',
        },
        {
          value: 'availability',
          text: 'Наличие',
        },
        {
          value: 'price',
          text: 'Цена',
        },
        {
          value: 'discount',
          text: 'Скидки',
        },
        {
          value: 'group',
          text: 'Группа',
        },
        {
          value: 'description',
          text: 'Описание',
        },
        {
          value: 'specs',
          text: 'Характеристики',
        },
        {
          value: 'warehouse',
          text: 'Склад',
        },
        {
          value: 'showroom',
          text: 'Шоурум',
        },
        {
          value: 'notes',
          text: 'Заметки',
        },
      ],
      generalSettings: [],
      generalSettingsItems: [
        {
          value: 'updateForcibly',
          text: 'Обновит принудительно',
        },
        {
          value: 'loadItems',
          text: 'Загрузить позиции “В наличии” / “Под заказ”',
        },
      ],
      goodsNotInFile: [],
      goodsNotInFileItems: [
        {
          value: 'leaveUnchanged',
          text: 'Оставить без изменений',
        },
        {
          value: 'notAvailable',
          text: 'Нет в наличии',
        },
        {
          value: 'hidden',
          text: 'Скрытые',
        },
        {
          value: 'deleted',
          text: 'Удаленные',
        },
      ],
      autoLinkUpdate: null,
      autoLinkUpdateItems: [
        {
          value: 'never',
          text: 'Никогда',
        },
        {
          value: 'onceForHour',
          text: 'Раз в час',
        },
        {
          value: 'onceFor4Hour',
          text: 'Раз в 4 часа',
        },
        {
          value: 'onceForDay',
          text: 'Раз в день',
        },
      ],
    }
  },
  computed: {
    importFromPC() {
      return this.importMethod === 'fromPc'
    },
  },
}
</script>

<style scoped>
.import-info-help {
  width: 100%;
  border-radius: 10px;
  background: #333;
  padding: 16px;
}

.radio-button-container {
  position: relative;
  cursor: pointer;
}

.radio-button-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-button-container span {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border: 1px solid #bbbbbc;
  border-radius: 5px;
}

.radio-button-container p {
  font-weight: lighter;
  margin-left: 32px;
}

.radio-button-container:hover ~ span {
  background: #fff;
}

span.radio-picked-icon {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #969;
  display: none;
}

.radio-button-container input:checked ~ span.radio-picked-icon {
  display: block;
}

.upload-file-button {
  background: #969;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 8px 38px;
}

.save-button {
  background: #969;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 8px 18px;
}
</style>
