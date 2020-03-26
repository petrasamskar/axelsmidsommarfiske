<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        <figure class="image is-ratio">
          <img
            :src="`images/group/group_${year}.jpg`"
            alt="Image"
            width="200px"
            height="100px"
          />
        </figure>
      </div>
      <div class="column content">
        <table class="table is-hoverable is-fullwidth is-striped">
          <thead>
            <tr>
              <th>Deltagare/Lag</th>
              <th>Poäng</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="participant._id" v-for="participant in participants">
              <td>{{ participant.name }}</td>
              <td>{{ participant.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getParticipants } from "../CompetitionService";
export default {
  name: "Competition",
  data: function() {
    return {
      year: this.$route.params.year,
      participants: [
        {
          name: "",
          score: ""
        }
      ]
    };
  },

  created: function() {
    getParticipants(this.year).then(result => {
      this.participants = result.data;
    });
  }
};
</script>
