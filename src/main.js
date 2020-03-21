// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;
// om jag inte har denna kommer jag aldrig till backend, men om jag har det får jag cors error
axios.defaults.baseURL = "http://localhost:3000/api";
// axios.defaults.baseURL = "api";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
