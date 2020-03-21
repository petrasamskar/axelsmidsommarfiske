import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Rules from "@/components/Rules";
import Images from "@/components/Images";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/rules",
      name: "Rules",
      component: Rules
    },
    {
      path: "/images",
      name: "Images",
      component: Images
    }
    /* {
      path: '/winners',
      name: 'Winners',
      component: Winners
    },
    {
      path: '/competition/:year',
      name: 'Competition',
      component: Competition
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    } */
  ]
});
