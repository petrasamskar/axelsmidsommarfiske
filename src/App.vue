<template>
  <div id="app">
      <MidsummerMenu/> 
    <router-view />
  </div>
</template>

<script>
import MidsummerMenu from './components/MidsummerMenu.vue'
export default {
    name: "App",
    components: {
      'MidsummerMenu' : MidsummerMenu
  } 
}
</script>
