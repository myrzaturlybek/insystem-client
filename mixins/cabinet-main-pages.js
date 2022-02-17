export default {
  methods: {
    toggleAll(event, section) {
      section.forEach((item) => {
        item.checked = event.target.checked
      })
    },
  }
}
