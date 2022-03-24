<template>
  <div class="input">
    <label v-if="label">{{ label }}</label>
    <input
      v-if="isInput"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      class="input"
      @input="$emit('input', $event)"
    />
    <textarea
      v-if="type === 'textarea'"
      :id="name"
      :value="value"
      :name="name"
      @input="$emit('input', $event)"
    >
    </textarea>
    <select
      v-if="type === 'select'"
      :id="name"
      :name="name"
      :value="value"
      @input="$emit('input', $event)"
    >
      <option
        v-for="option in select.options"
        :key="option.id"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <div v-if="metrics" class="select-metrics">{{ metrics }}</div>
    <div
      v-if="type === 'datetime-local' && value === null"
      class="datetime-placeholder"
    >
      {{ placeholder }}
    </div>
    <div v-if="icon" class="input-icon">
      <i :class="icon"></i>
    </div>
    <div v-if="type === 'radio'" class="radio-buttons">
      <label
        v-for="radio in radios"
        :key="radio.id"
        class="
          col-md-3
          d-flex
          justify-content-start
          align-items-center
          radio-button-container
        "
      >
        <input type="radio" :name="radio.name" />
        <span></span>
        <span class="icon-check radio-picked-icon"></span>
        <p>{{ radio.label }}</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    select: {
      type: Object,
      default: () => {},
    },
    metrics: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    radios: {
      type: Array,
      default: null,
    },
  },
  computed: {
    isInput() {
      if (
        this.type === 'text' ||
        this.type === 'number' ||
        this.type === 'datetime-local'
      ) {
        return true
      }
      return false
    },
  },
}
</script>

<style scoped>
.input,
select,
textarea {
  width: 100% !important;
}

.input {
  position: relative;
}

input,
select,
textarea,
.radio-buttons {
  border: none !important;
  border-bottom: 1px solid #ebebeb !important;
  padding: 16px 0;
}

.radio-buttons {
  display: flex;
  flex-wrap: wrap;
}

textarea {
  resize: none;
}

label {
  font-weight: bold;
}

select {
  position: relative;
  background-image: url('/chevron-down.svg');
  background-repeat: no-repeat;
  background-position: right 0 top 60%, 0 0;
  cursor: pointer;
}

select:hover {
  background-image: url('/chevron-downblack.svg');
}

.select-metrics {
  position: absolute;
  color: #bbbbbc;
  right: 32px;
  top: 55%;
}

input[type='datetime-local']::-webkit-calendar-picker-indicator {
  background: url('/calendar.svg');
  background-repeat: no-repeat;
  background-position: right 0 top 60%, 0 0;
}

.datetime-placeholder {
  position: absolute;
  background: #fff;
  color: #bbbbbc;
  width: 90%;
  top: 32px;
  padding: 3px 0;
}

.input-icon {
  position: absolute;
  color: #bbbbbc;
  right: 0;
  top: 55%;
  border: none;
  cursor: pointer;
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
  margin-left: 16px;
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
</style>
