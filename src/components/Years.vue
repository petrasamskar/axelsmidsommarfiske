<template>
  <div class="navbar-dropdown">
    <div :key="year" v-for="year in years">
      <router-link to="/years?" class="navbar-item">{{ year }}</router-link>
    </div>
  </div>
</template>
<script>
import { getYears } from "../CompetitionService";
export default {
  name: "Years",
  data: function() {
    return {
      years: []
    };
  },
  created: function() {
    getYears().then(result => {
      this.years = result.data;
    });
  }
};
</script>
