<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Витрины в шоуруме</h3>
      </div>
      <div class="sidebar-top-left">
        <div class="">
          <img class="icon16" src="/circle check fullvs.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="mt32">
      <div v-for="i in 3" :key="i" class="showcase-item mt16">
        <div class="general-body-item-middle">
          <div class="general-body-item-middle-left">
            <div class="general-body-item-img">
              <img class="iphone-img-big img84" src="/showcase.svg" alt="" />
            </div>
            <div class="general-body-item-img-info showcase-body-item-img-info">
              <div class="general-body-item-img-name showcase-body-img-name">
                ID 0000001
                <span class="little-grey-text font-weight-normal ml16"
                  >08.08.2019 / 19:32</span
                >
              </div>
              <div
                class="
                  general-body-item-img-status
                  showcase-body-item-img-status
                "
              >
                Островок из искусственого камня для смартфонов
              </div>
              <div class="showcase-body-item-img-amount-cont">
                <div class="showcase-body-item-img-amount">
                  100 000 тг / мес
                </div>
              </div>
            </div>
          </div>
          <div>
            <the-status
              :value="'havePlaces'"
              :statuses="[
                { text: 'Есть места', color: '#33B601', value: 'havePlaces' },
                { text: 'Нет мест', color: '#D80808', value: 'noPlaces' },
              ]"
            ></the-status>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
