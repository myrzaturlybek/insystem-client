<template>
  <div class="mt16 white-container">
    <div class="general-content-header-top">
      <div>
        <h3 class="general-body-item-title">Комментарии к заказу</h3>
      </div>
    </div>

    <div class="row mt32">
      <div
        class="col-md-12 little-grey-text d-flex cursor-pointer hover-black"
        @click="$emit('addComment')"
      >
        <i class="icon-plus"></i>
        <p class="ml16">Добавить</p>
      </div>
    </div>
  </div>
</template>
