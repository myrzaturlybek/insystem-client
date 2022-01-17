<template>
  <div v-if="activeHeader" class="wrap_header-last-slider">
    <div class="container">
      <ul id="st_nav" class="st_navigation">
        <li class="album">
          <div class="st_thumbs_wrapper">
            <div
              class="
                st_thumbs
                header-last-slider
                nav
                menu_hover-modal
                nav-pills
              "
            >
              <div class="item all" @click="toogleMenu">
                <a
                  class="link_item"
                  href="javascript:void(0)"
                  :class="{ active: showMenu }"
                >
                  <i v-show="!showMenu" class="icon-grid"></i>
                  <i v-show="showMenu" class="icon-x"></i>
                  Все категории
                </a>
              </div>
              <div
                v-for="category in categories"
                :key="category.slug"
                class="item single"
              >
                <a :href="route(routeName, category.slug)" class="link_item">
                  {{ category.name }}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="for-desktop">
      <div
        class="last-nav_modal all tab-content well"
        :class="{ active: showMenu }"
      >
        <div v-if="route().current('tasks.index')" class="container">
          <div
            class="radio_text-wrap header_radio_text-wrap"
            style="margin-bottom: 32px"
          >
            <div class="nav" role="tablist">
              <fieldset>
                <div class="switch-toggle alert alert-light">
                  <input
                    id="registration-title_1"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_1"
                    checked
                  />
                  <label for="registration-title_1">Поставщикам</label>

                  <input
                    id="registration-title_2"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_2"
                  />
                  <label for="registration-title_2">Исполнителям</label>
                  <input
                    id="registration-title_4"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_4"
                  />
                  <label for="registration-title_4">Заказчикам</label>
                  <a class="btn btn-toggle-option"></a>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="container all_modal tab-pane active">
          <div class="tabs">
            <ul class="tabs-nav">
              <li
                v-for="category in categories"
                :key="category.slug"
                :class="{ 'tab-active': category_id == category.id }"
              >
                <a
                  href="javascript:void(0)"
                  @mouseover="(event) => activeMenu(event, category.id)"
                >
                  <div class="img">
                    <img :src="category.icon" class="svg" />
                  </div>
                  <h1 class="title">{{ category.name }}</h1>
                </a>
              </li>
            </ul>
            <div class="tabs-stage">
              <template v-for="category in categories">
                <div
                  v-if="category_id == category.id"
                  :key="category.id"
                  class="tab-block"
                >
                  <header-category-list
                    :category="category"
                    :type="type"
                  ></header-category-list>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="for-mobile">
      <div
        class="last-nav_modal all tab-content well"
        :class="{ active: showMenu }"
      >
        <div class="container">
          <div
            class="radio_text-wrap header_radio_text-wrap"
            style="margin-bottom: 32px"
          >
            <div class="nav" role="tablist">
              <fieldset>
                <div class="switch-toggle alert alert-light">
                  <input
                    id="registration-title_5"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_5"
                    checked
                  />
                  <label for="registration-title_5">Поставщикам</label>

                  <input
                    id="registration-title_6"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_6"
                  />
                  <label for="registration-title_6">Исполнителям</label>
                  <input
                    id="registration-title_7"
                    name="intervaltype"
                    type="radio"
                    data-target="#registration_7"
                  />
                  <label for="registration-title_7">Заказчикам</label>
                  <a class="btn btn-toggle-option"></a>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="container all_modal tab-pane active">
          <div class="tabs">
            <ul class="tabs-nav">
              <!-- <i class="icon-x float-right" style="font-size:20px;" v-show="showMenu" @click="showMenu = false"></i> -->
              <li
                v-for="category in categories"
                :key="category.slug"
                :class="{ 'tab-active': category_id == category.id }"
              >
                <a
                  href="javascript:void(0)"
                  class="tabs-nav__item"
                  @click="(event) => activeMenu(event, category.id)"
                >
                  <div class="img">
                    <img :src="category.icon" class="svg" />
                  </div>
                  <h1 class="title">{{ category.name }}</h1>
                  <i class="icon-chevron-down"></i>
                </a>
              </li>
            </ul>
            <div class="tabs-stage">
              <!--  <button class="back_link"><img src="/img/arr_d.svg" class="svg">
                <p>Назад</p>
              </button> -->

              <template v-for="category in categories">
                <div
                  v-if="category_id == category.id"
                  :key="category.id"
                  class="tab-block"
                >
                  <header-category-list
                    :category="category"
                    :type="type"
                    @backLinks="backLinks"
                  ></header-category-list>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="body_black-menu"
      :class="[showMenu ? 'show' : 'hide']"
      @click="showMenu = false"
    ></div>
  </div>
</template>

<script>
import * as $ from 'jquery'

export default {
  name: 'HeaderSecond',
  props: {
    type: {
      type: String,
      default: 'product',
    },
  },
  data() {
    return {
      showMenu: false,
      categories: [],
      category_id: null,
      activeHeader: true,
    }
  },
  computed: {
    params() {
      return {
        type: this.$props.type ? this.$props.type : '',
        only_parents: true,
        with_children_recursive: true,
      }
    },
    routeName() {
      // eslint-disable-next-line eqeqeq
      if (this.$props.type == 'product') {
        return 'products.catalog'
      } else {
        return 'services.catalog'
      }
    },
  },
  watch: {
    type(value) {
      this.getCategories()
    },
  },
  mounted() {
    this.showSecondMenuOnHover()
    this.getCategories()
    // setTimeout(() => this.activeHeader = true, 100);
  },
  methods: {
    toogleMenu() {
      this.showMenu = !this.showMenu
    },
    activeMenu(e, id) {
      e.preventDefault()
      this.category_id = id
    },
    backLinks() {
      this.category_id = null
    },
    showSecondMenuOnHover() {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
          $('header').addClass('boxShadow')
          $('.wrap_header-last-slider').addClass('hide').addClass('boxShadow')
          $('.header-first').mouseover(function () {
            $('header').removeClass('boxShadow')
            $('.wrap_header-last-slider').removeClass('hide').addClass('show')
          })

          $('.last-nav_modal').mouseover(function () {
            $('.wrap_header-last-slider').removeClass('hide').addClass('show')
          })

          $('.body_black-menu.show').mouseover(function () {
            $('.wrap_header-last-slider').removeClass('hide').addClass('show')
          })

          $('.body_black-menu ').mouseover(function () {
            $('.wrap_header-last-slider').removeClass('hide').addClass('show')
          })

          $('.wrap_header-last-slider').mouseover(function () {
            $('header').removeClass('boxShadow')
            $(this).removeClass('hide').addClass('show')
          })

          $('.wrap_header-last-slider').mouseout(function () {
            $(this).removeClass('show')
            $('header').addClass('boxShadow')
          })

          $('.header-first').mouseout(function () {
            $('header').addClass('boxShadow')
            $('.wrap_header-last-slider').removeClass('show')
          })

          $('.last-nav_modal').mouseout(function () {
            $('.wrap_header-last-slider').removeClass('show')
          })

          if ($('.last-nav_modal').hasClass('active')) {
            $('.wrap_header-last-slider').removeClass('hide').addClass('show')
          }
        } else {
          $('header').removeClass('boxShadow')
          $('.wrap_header-last-slider')
            .removeClass('hide')
            .removeClass('boxShadow')
        }
      })
    },
    async getCategories() {
      const { data } = await window.axios.get(
        this.route('api.list.categories'),
        {
          params: this.params,
        }
      )
      this.categories = data.categories
      // this.category_id = data.categories[0].id
    },
  },
}
</script>
