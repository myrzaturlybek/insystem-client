<template>
  <div>
    <the-filter
      title="Задания"
      :filters="['Статус', 'Клиент', 'Цена', 'Дата']"
      show-middle
      :switch-items="switchItems"
      :switch-value="switchValue"
      :actions="actions"
      @switch="switchCategory"
      @action="action"
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
    <the-card v-for="task in tasks[switchValue]" :key="task.id">
      <template #header>
        <product-item-header
          :url="task.url"
          :title="task.title"
          :date-time="task.dateTime"
          :status="task.status"
          :statuses="statuses[switchValue]"
          :status-editable="task.statusEditable"
          :checked="task.picked"
          :show-checkbox="showCheckbox"
          @check="
            (event) => {
              taskPick(event, task)
            }
          "
          @changeStatus="
            (status) => {
              changeStatus(status, task)
            }
          "
        ></product-item-header>
      </template>
      <template #body>
        <div class="order-body">
          <div class="goods">
            <div class="good">
              <div class="good_row">
                <p class="bold-text">Категория</p>
              </div>
              <div class="good_row">
                <p>{{ task.category }}</p>
              </div>
            </div>
            <div class="good">
              <div class="good_row">
                <p class="bold-text">Название</p>
              </div>
              <div class="good_row">
                <p>{{ task.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="task-footer">
          <div>
            <img src="/eye.svg" />
            <span class="bold-text">Просмотры: </span>{{ task.views }}
          </div>
          <div>
            <img src="/volume.svg" />
            <span class="bold-text">Отклики: </span>{{ task.feedback }}
          </div>
        </div>
      </template>
    </the-card>
  </div>
</template>

<script>
export default {
  name: 'TasksIndex',
  layout: 'cabinet',
  data() {
    return {
      switchItems: [
        { text: 'Мои задания', value: 'my' },
        { text: 'Мне задания', value: 'toMe' },
      ],
      showCheckbox: false,
      checkAllCheckbox: false,
      actionsForChecked: [
        { text: 'Изменить' },
        { text: 'Отменить' },
        { text: 'Повторить' },
        { text: 'Удалить' },
      ],
      switchValue: 'my',
      actions: [
        { text: 'Выбрать', method: this.toggleCheckbox },
        { text: 'Экспорт' },
      ],
      statuses: {
        my: [
          {
            text: 'Новый',
            color: '#D80808',
            value: 'new',
          },
          {
            text: 'Опубликовано',
            color: '#FF9900',
            value: 'published',
          },
          {
            text: 'Проверка оплаты',
            color: '#136BF0',
            value: 'paymentVerification',
          },
          {
            text: 'Выполняется',
            color: '#00CCCC',
            value: 'performed',
          },
          {
            text: 'Завершено',
            color: '#33B601',
            value: 'completed',
          },
          {
            text: 'Отменён',
            color: '#BBBBBC',
            value: 'canceled',
          },
        ],
        toMe: [
          {
            text: 'Новый',
            color: '#D80808',
            value: 'new',
          },
          {
            text: 'Проверка оплаты',
            color: '#136BF0',
            value: 'paymentVerification',
          },
          {
            text: 'Выполняется',
            color: '#00CCCC',
            value: 'performed',
          },
        ],
      },
      tasks: {
        my: new Array(7).fill().map((e, i) => {
          return {
            url: `tasks/${i}`,
            title: 'Задание № 00000001',
            dateTime: new Date(),
            status: 'published',
            picked: false,
            category: 'Смартфоны и гаджеты',
            name: 'Поставка товара',
            views: 2,
            feedback: 2,
            statusEditable: false,
          }
        }),
        toMe: new Array(7).fill().map((e, i) => {
          return {
            url: `tasks/${i}`,
            title: 'Задание № 00000001',
            dateTime: new Date(),
            status: 'new',
            picked: false,
            category: 'Смартфоны и гаджеты',
            name: 'Поставка товара',
            views: 2,
            feedback: 2,
          }
        }),
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
      this.tasks[this.switchValue].forEach((task) => {
        task.picked = false
      })
    },
    create() {
      this.$router.push('tasks/new')
    },
    action(method) {
      method()
    },
    checkAll(event) {
      this.checkAllCheckbox = event.target.checked
      this.tasks[this.switchValue].forEach((task) => {
        task.picked = event.target.checked
      })
    },
    taskPick(event, task) {
      task.picked = event.target.checked
    },
    changeStatus(status, task) {
      task.status = status
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
  },
}
</script>
