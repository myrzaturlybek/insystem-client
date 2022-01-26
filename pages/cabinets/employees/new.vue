<template>
  <div>
    <product-header
      title="Создание сотрудника"
      :back-to="false"
      :actions="actions"
      :verified="false"
      show-verified
      show-bottom-line
      date-time-text="Создана"
    ></product-header>
    <add-info
      title="Карточка сотрудника"
      have-avatar
      :info="employeeCard"
    ></add-info>
    <add-info title="Данные для входа" :info="loginDetails"></add-info>
    <user-access title="Доступы сотрудника" :accesses="accesses"></user-access>
  </div>
</template>

<script>
export default {
  name: 'NewEmployeePage',
  layout: 'cabinet',
  data() {
    return {
      actions: [{ text: 'Сохранить' }, { text: 'Отмена' }],
      employeeCard: [
        {
          name: 'name',
          label: 'Фамилия',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Имя',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Отчество',
          placeholder: 'Введите название',
          value: '',
        },
        {
          type: 'select',
          name: 'showcaseType',
          label: 'Должность',
          value: null,
          select: {
            options: [
              {
                value: null,
                text: 'Выберите значение',
              },
            ],
          },
        },
      ],
      loginDetails: [
        {
          name: 'name',
          label: 'Номер телефона',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Электронная почта',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Придумайте пароль',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Повторите пароль',
          placeholder: 'Введите название',
          value: '',
        },
        {
          name: 'name',
          label: 'Введите SMS код',
          placeholder: 'Введите название',
          value: '',
        },
      ],
      accesses: [
        {
          turnedOn: true,
          text: 'Компания',
        },
        {
          turnedOn: true,
          text: 'Партнёры',
        },
        {
          turnedOn: true,
          text: 'Шоурумы',
        },
        {
          turnedOn: true,
          text: 'Сотрудники',
        },
        {
          turnedOn: true,
          text: 'Витрины',
        },
        {
          turnedOn: true,
          text: 'Отзывы',
        },
        {
          turnedOn: true,
          text: 'Заказы',
        },
        {
          turnedOn: true,
          text: 'Подписки',
        },
        {
          turnedOn: true,
          text: 'Задания',
        },
        {
          turnedOn: true,
          text: 'Аналитика',
        },
        {
          turnedOn: true,
          text: 'Клиенты',
        },
        {
          turnedOn: true,
          text: 'Продвижение',
        },
      ],
    }
  },
}
</script>
