<template>
  <header>
    <div class="header-first">
      <div class="container">
        <div
          class="row justify-content-md-between align-items-center header-row"
        >
          <div class="img-wrap">
            <div class="logo">
              <a href="/" class="desktop">
                <img src="/logo.svg" />
              </a>
              <a href="/" class="mobile">
                <img src="/VS.svg" />
              </a>
            </div>
          </div>
          <div class="btns-wrap">
            <div class="header-categories_link">
              <ul>
                <li class="item">
                  <a href="/products" class="products_link">
                    <i class="icon-briefcase"></i>
                    <b> Товары</b>
                  </a>
                </li>
                <li class="item">
                  <a href="/services" class="services_link">
                    <i class="icon-truck"></i>
                    <b> Услуги</b>
                  </a>
                </li>
                <li class="item">
                  <a href="/">
                    <i class="icon-map"></i>
                    <b>ШОУРУМЫ </b>
                  </a>
                </li>
                <li class="item">
                  <a href="/tasks" class="task_link">
                    <i class="icon-clipboard"></i>
                    <b>Задания</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form id="search_nav">
            <section class="search-menu_wrap">
              <div class="searchInput-wrap">
                <div class="container">
                  <div class="searchInput">
                    <div class="input-wrap">
                      <input
                        id="search-field"
                        type="text"
                        name=""
                        class="form-control input-search"
                        placeholder="Введите поисковый запрос"
                      />
                      <div id="voice-trigger" class="voice-trigger-icon">
                        <img src="/mic.svg" class="svg" />
                      </div>
                    </div>
                    <a class="close"><img src="/x.svg" class="svg" /></a>
                  </div>
                </div>
              </div>
              <!-- <profile-menu></profile-menu> -->
            </section>
          </form>
          <div class="icon-wrap">
            <div class="header-nav-buttons">
              <ul>
                <li>
                  <a class="search-icon">
                    <span class="icon-search"></span>
                  </a>
                </li>
                <li>
                  <a href="/tasks/create" class="task">
                    <span class="icon-plus-square"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon-message-square"></span>
                  </a>
                </li>
                <li>
                  <a class="favorite">
                    <span class="icon-heart"></span>
                  </a>
                </li>
                <li class="shopping-icon">
                  <a class="basket">
                    <span class="icon-shopping-cart"></span>
                  </a>
                </li>
                <li class="login-icon">
                  <a class="account">
                    <span class="icon-user"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button class="menu_mobile">
            <span class="icon-menu menu"></span>
            <span class="icon-x close"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'FirstHeader',
}
</script>
