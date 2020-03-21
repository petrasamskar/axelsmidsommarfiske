<template>
  <div class="container">
    <div class="content is-medium">
      <h1>Statistik</h1>
      <table class="table is-hoverable is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Deltagare/Lag</th>
            <th>Antal vinster</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="winner._id" v-for="winner in winners">
            <td>{{ winner._id }}</td>
            <td>{{ winner.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getWinners } from "../CompetitionService";

export default {
  name: "Winners",
  data: function() {
    return {
      winners: []
    };
  },
  created: function() {
    getWinners().then(result => {
      // let winners = Array.from(result.data);

      // this.setState({ winners: winners });
      this.winners = result.data;
    });
  }
};
</script>
