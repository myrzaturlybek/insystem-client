<template>
  <div class="mt16 white-container2">
    <div class="employees-employees-goods-tables">
      <div class="employees-employees-goods-tables-header p16">
        <div class="employees-good-item">
          <div
            class="
              employees-employees-employees-employees-good-char-name-first
              bold-text
            "
          >
            Клиент
          </div>
          <div
            class="employees-employees-employees-good-char-name-first bold-text"
          >
            ID
          </div>
          <div class="employees-employees-good-char-name bold-text">Дата</div>
          <div class="employees-employees-good-char-name bold-text">Кол-во</div>
          <div class="employees-employees-good-char-name bold-text">Сумма</div>
        </div>
      </div>
      <div class="sidebar-top-line"></div>
      <div class="employees-employees-goods-table m16">
        <div class="employees-employees-goods-table-title mb16">
          <div>
            <img class="icon24" src="/phone.svg" alt="" />
          </div>
          <p class="bold-text ml8">Смартфоны и гаджеты</p>
        </div>
        <div class="bold-grey-line"></div>
        <div class="employees-goods">
          <div
            v-for="item in 7"
            :key="item"
            class="employees-good-item p16-0 sidebar-top-line"
          >
            <div class="employees-good-name-outer">
              <div class="sidebar-user-img-cont">
                <div class="sidebar-user-img-greenpoint"></div>
                <img class="img48" src="/images 5.svg" alt="" />
              </div>
              <div class="ml16">
                <a href="#" class="item-link">
                  <p class="bold-text">Mobilka Electronic</p>
                </a>
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
              </div>
            </div>
            <div class="employees-good-char">51532584</div>
            <div class="employees-good-char">08.08.2019 / 19:32</div>
            <div class="employees-good-char">35</div>
            <div class="employees-good-char">10 849 650</div>
          </div>
        </div>
      </div>
      <div class="employees-employees-goods-table m16 pb16">
        <div class="employees-employees-goods-table-title mb16">
          <div>
            <img class="icon24" src="/monitorvs.svg" alt="" />
          </div>
          <p class="bold-text ml8">Смартфоны и гаджеты</p>
        </div>
        <div class="bold-grey-line"></div>
        <div class="employees-goods">
          <div
            v-for="item in 7"
            :key="item"
            class="employees-good-item p16-0 sidebar-top-line"
          >
            <div class="employees-good-name-outer">
              <div class="sidebar-user-img-cont">
                <div class="sidebar-user-img-greenpoint"></div>
                <img class="img48" src="/images 5.svg" alt="" />
              </div>
              <div class="ml16">
                <a href="#" class="item-link">
                  <p class="bold-text">Mobilka Electronic</p>
                </a>
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
              </div>
            </div>
            <div class="employees-good-char">51532584</div>
            <div class="employees-good-char">08.08.2019 / 19:32</div>
            <div class="employees-good-char">35</div>
            <div class="employees-good-char">10 849 650</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
