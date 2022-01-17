<template>
  <div>
    <nav-item
      v-for="item in navList"
      :key="item.id"
      :title="item.title"
      :icon="item.icon"
      :url="item.url"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
import NavList from "./NavList";
export default {
  name: "TheNav",
  components: { NavItem },
  data() {
    return {
      navList: NavList,
    };
  },
};
</script>
