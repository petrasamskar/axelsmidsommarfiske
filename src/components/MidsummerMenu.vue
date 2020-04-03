<template>
  <div>
    <nav class="is-white navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/"
          ><img src="../assets/fish.png" width="100" height="100"
        /></router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMidsummer"
          @click="isOpen = !isOpen"
          v-bind:class="{ 'is-active': isOpen }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMidsummer"
        class="navbar-menu"
        v-bind:class="{ 'is-active': isOpen }"
      >
        <div class="navbar-start">
          <router-link to="/rules" class="navbar-item"
            >Regler och Stadgar</router-link
          >
          <router-link to="/images" class="navbar-item">Bilder</router-link>
          <router-link to="/winners" class="navbar-item">Statistik</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Resultat
            </a>
            <Years />
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
import Years from "./Years.vue";

export default {
  name: "MidsummerMenu",
  data: function() {
    return {
      isOpen: false
    };
  },
  components: {
    Clock: Clock,
    Years: Years
  }
};
</script>
