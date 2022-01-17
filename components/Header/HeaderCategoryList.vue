<template>
  <div class="result">
    <!--  <button class="close-mobile">
      <img src="/x.svg" class="svg">
    </button> -->

    <div class="title-main" @click="backLinks">
      <div class="icon"><i class="icon-chevron-down"></i></div>
      {{ category.name }}
    </div>
    <div class="main-wrap">
      <div class="wrap-links">
        <ul
          v-for="children in category.children_recursive"
          :key="children.id"
          class="links-block collapse-wrap_order for_mobile"
        >
          <!-- <li>
                  <a  :href="route(routeName(children.type), children.slug)" class="title">{{ children.name }}</a>
                </li> -->
          <div
            class="btn-modal__collapse"
            @click="activeCategoryId = children.id"
          >
            {{ children.name }}
            <div class="icon"><i class="icon-chevron-down"></i></div>
          </div>

          <ul
            class="modal__collapse"
            :class="{ active: activeCategoryId == children.id }"
          >
            <li>
              <a class="btn-back" @click="activeCategoryId = null">
                <div class="icon"><i class="icon-chevron-down"></i></div>
                {{ children.name }}
              </a>
            </li>
            <li v-for="child in children.children_recursive" :key="child.id">
              <a :href="route(routeName(child.type), child.slug)" class="link">
                {{ child.name }}
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderCategoryList',
  props: {
    category: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      categories: [],
      activeCategoryId: null,
    }
  },
  methods: {
    routeName(type) {
      // eslint-disable-next-line eqeqeq
      if (type == 'product') {
        return 'products.catalog'
      } else {
        return 'services.catalog'
      }
    },
    backLinks() {
      this.$emit('backLinks')
    },
    closeCallapse(id) {
      document.getElementById(`#header-${id}`).collapse('hide')
    },
  },
}
</script>
<style lang="scss">
.btn-modal__collapse {
  font-family: Arial;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #ebebeb;
}

.btn-modal__collapse .icon {
  display: none;
}

.btn-back {
  display: none;
}

@media (min-width: 300px) and (max-width: 1024px) {
  .btn-modal__collapse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #ebebeb;
    font-family: Arial;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    margin-bottom: 0px;

    .icon {
      display: inline-block;
      transform: rotate(270deg);
      i {
        color: #bbbbbc;
        display: block;
      }
    }
  }
  .modal__collapse {
    position: absolute;
    top: 0px;
    left: 0px;
    background: #fff;
    height: 100%;
    z-index: 2;
    display: none;
    width: 100%;
    &.active {
      display: block;
    }
    .link {
      font-family: Arial;
      font-size: 14px;
      line-height: 16px;
      padding: 20px 0px;
      border-bottom: 1px solid #ebebeb;
      margin-bottom: 0px;
    }
  }
  .btn-back {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    padding-bottom: 16px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    .icon {
      display: inline-block;
      transform: rotate(90deg);
      margin-right: 16px;
      i {
        color: #bbbbbc;
        display: block;
      }
    }
  }
}
</style>
