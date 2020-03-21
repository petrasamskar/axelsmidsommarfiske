<template>
  <div>
    <nav class="is-white navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"
          ><img src="../assets/midsommarstang.jpg" width="40" height="80"
        /></router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/rules" class="navbar-item"
            >Regler och Stadgar</router-link
          >
          <router-link to="/images" class="navbar-item">Bilder</router-link>
          <router-link to="/winners" class="navbar-item">Statistik</router-link>

          <!-- <a class="navbar-item">
            Statistik
          </a> -->

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Resultat
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                2019
              </a>
              <a class="navbar-item">
                2018
              </a>
              <a class="navbar-item">
                2017
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <Clock />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Clock from "./Clock.vue";
export default {
  name: "MidsummerMenu",
  components: {
    Clock: Clock
  }
};
</script>
