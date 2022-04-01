<template>
  <div>
    <the-filter
      title="Сотрудники"
      :filters="filters"
      :show-middle="true"
      :switch-items="switchItems"
      :switch-value="switchValue"
      :actions="actions"
      show-toggle-all
      @switch="switchCategory"
      @action="action"
      @toggleAll="
        (event) => {
          toggleAll(event, employees[switchValue])
        }
      "
    >
      <template v-if="showCheckbox" #footer>
        <pick-all
          :checked="checkAllCheckbox"
          :text="'Выбрать все задания'"
          :actions="actionsForChecked"
          @check="checkAll"
        ></pick-all>
      </template>
    </the-filter>
    <template v-if="switchValue == 'employees'">
      <the-card v-for="employee in employees[switchValue]" :key="employee.id">
        <template #header>
          <product-item-header
            :url="employee.url"
            :title="employee.title"
            :date-time="employee.dateTime"
            :checked="employee.picked"
            :show-checkbox="showCheckbox"
            show-switch
            :switch-on="employee.checked"
            @switch="
              (event) => {
                switchEmployee(event, employee)
              }
            "
            @check="
              (event) => {
                employeeCheck(event, employee)
              }
            "
          ></product-item-header>
        </template>
        <template #body>
          <div class="general-body-item-middle">
            <div class="employees-good-name-outer">
              <div class="sidebar-user-img-cont">
                <div class="sidebar-user-img-greenpoint"></div>
                <img class="img48" :src="employee.img" />
              </div>
              <div class="ml16 good-name">
                <p class="bold-text">{{ employee.name }}</p>
                <div class="mt16 df">
                  <div class="rating-percent">{{ employee.position }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="mb8">
                <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="general-body-item-bottom">
            <div class="general-body-item-number-cont">
              <p>Оборот:</p>
              <div>{{ employee.circulation }} тг</div>
            </div>
            <div class="general-body-item-number-cont">
              <p>Заказы:</p>
              <div>{{ employee.orders }} шт</div>
            </div>
            <div class="general-body-item-number-cont">
              <p>Средний чек:</p>
              <div>{{ employee.averageCheck }} тг</div>
            </div>
          </div>
        </template>
      </the-card>
    </template>
    <template v-if="switchValue == 'positions'">
      <the-card v-for="position in employees.positions" :key="position.id">
        <template #header>
          <product-item-header
            :title="position.name"
            show-switch
            :switch-on="position.checked"
            @switch="
              (event) => {
                switchPosition(event, position)
              }
            "
          ></product-item-header>
        </template>
        <template #body>
          <div class="p16">
            <div class="bold-text mb16">Описание</div>
            <div class="mb16 little-grey-text">{{ position.description }}</div>
            <div class="sidebar-top-line"></div>
            <div v-for="employee in position.employees" :key="employee.id">
              <div class="mt16 position-employee">
                <div class="employees-good-name-outer">
                  <div class="sidebar-user-img-cont">
                    <div class="sidebar-user-img-greenpoint"></div>
                    <img class="img48" :src="employee.img" />
                  </div>
                  <div class="ml16 good-name">
                    <p class="bold-text">{{ employee.name }}</p>
                    <div class="mt16 df">
                      <div class="little-grey-text">
                        {{ employee.dateTime }}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mb8">
                    <img src="/more-vertical.svg" alt="" class="ml16 icon16" />
                  </div>
                </div>
              </div>
              <div class="sidebar-top-line mt-16"></div>
            </div>
          </div>
        </template>
      </the-card>
    </template>
  </div>
</template>

<script>
import moment from 'moment'
import cabinetMainPages from '../../../mixins/cabinet-main-pages'

export default {
  name: 'EmployeesIndex',
  mixins: [cabinetMainPages],
  layout: 'cabinet',
  data() {
    return {
      filters: ['Статус', 'Сотрудник', 'Цена', 'Дата'],
      switchItems: [
        { text: 'Сотрудники', value: 'employees' },
        { text: 'Должности', value: 'positions' },
      ],
      switchValue: 'employees',
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
        { text: 'Создать', method: this.toCreate },
      ],
      showCheckbox: false,
      checkAllCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      employees: {
        employees: new Array(3).fill().map((e, i) => {
          return {
            url: `employees/${i}`,
            title: 'Сотрудник ID 00000001',
            dateTime: new Date(),
            picked: false,
            name: 'Иванов Иван Иванович',
            img: '/logo.png',
            position: 'Директор',
            circulation: (108946500).toLocaleString('ru'),
            orders: (22345).toLocaleString('ru'),
            averageCheck: (4856).toLocaleString('ru'),
            checked: true,
          }
        }),
        positions: [
          {
            name: 'Директор',
            checked: true,

            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sit pretium proin quis malesuada netus sapien consequat nunc.
            Non elementum turpis elementum tincidunt vitae quam eget.
            Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id
            libero ut aliquam.`,
            employees: [
              {
                img: '/logo.png',
                name: 'Иванов Иван Иванович',
                dateTime: moment(new Date()).format('DD.MM.YYYY / hh:mm'),
              },
            ],
          },
          {
            name: 'Менеджер',
            checked: true,

            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sit pretium proin quis malesuada netus sapien consequat nunc.
            Non elementum turpis elementum tincidunt vitae quam eget.
            Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id
            libero ut aliquam.`,
            employees: [
              {
                img: '/logo.png',
                name: 'Иванов Иван Иванович',
                dateTime: moment(new Date()).format('DD.MM.YYYY / hh:mm'),
              },
            ],
          },
          {
            name: 'Бухгалтер',
            checked: false,

            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sit pretium proin quis malesuada netus sapien consequat nunc.
            Non elementum turpis elementum tincidunt vitae quam eget.
            Cursus volutpat habitasse elementum justo. Sit pharetra consectetur id id
            libero ut aliquam.`,
          },
        ],
      },
    }
  },
  methods: {
    switchCategory(value) {
      if (this.switchValue !== value) {
        this.switchValue = value
        this.resetPicks()
      }
    },
    resetPicks() {
      this.checkAllCheckbox = false
      this.employees.employees.forEach((employee) => {
        employee.picked = false
      })
    },
    action(method) {
      method()
    },
    toCreate() {
      this.$router.push('employees/new')
    },
    toggleCheckbox() {
      if (!this.showCheckbox) {
        this.actions[0].text = 'Отменить'
        this.actions[0].color = '#000000'
      } else {
        this.actions[0].text = 'Выбрать'
        this.actions[0].color = '#bbbbbc'
      }
      this.showCheckbox = !this.showCheckbox
    },
    employeeCheck(event, employee) {
      employee.picked = event.target.checked
    },
    switchEmployee(event, employee) {
      employee.checked = event.target.checked
    },
    switchPosition(event, position) {
      position.checked = event.target.checked
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.employees.employees.forEach((employee) => {
        employee.picked = event.target.checked
      })
    },
  },
}
</script>
