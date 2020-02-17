<template>
  <div id="app">
    <div class="container">
      <input id="menu__toggle" type="checkbox">
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul class="menu">
        
        <li class="menu__item">Личный кабинет</li>
        <router-link tag="li"  class="menu__item" to="/pay" exact>Платежи</router-link>
        <router-link tag="li"  class="menu__item" to="/history">История платежей</router-link>
        <li class="menu__item">Настройки</li>
        <li class="menu__item">Выйти</li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  created(){
    this.$router.push('/pay')
  }
}
</script>
<style src="./assets/css/style.css">
</style>
