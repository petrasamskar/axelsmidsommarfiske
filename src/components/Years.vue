<template>
  <div class="navbar-dropdown">
    <div :key="year" v-for="year in years">
      <router-link :to="`/competition/${year}`" class="navbar-item">{{
        year
      }}</router-link>
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
