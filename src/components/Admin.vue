<template>
  <div class="container">
    <div class="content is-medium">
      <h1>
        Administrera fiskeresultat
      </h1>
      Här läggs resultat efter tävlingen in.
      <p></p>
      <form id="admin-form" @submit.prevent="processForm">
        <div class="field">
          <label class="label">År</label>
          <div class="control">
            <input
              id="year"
              class="input"
              type="text"
              placeholder="2020"
              v-model="participant.year"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Placering</label>
          <div class="control">
            <input
              id="place"
              class="input"
              type="text"
              placeholder="1"
              v-model="participant.place"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Namn</label>
          <div class="control">
            <input
              id="name"
              class="input"
              type="text"
              placeholder="Petra"
              v-model="participant.name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Antal fiskar</label>
          <div class="control">
            <input
              id="score"
              class="input"
              type="text"
              placeholder="8"
              v-model="participant.score"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { addParticipant } from "../CompetitionService";
export default {
  name: "Admin",
  el: "#admin-form",
  data: function() {
    return {
      participant: {
        year: "",
        place: "",
        name: "",
        score: ""
      }
    };
  },
  methods: {
    processForm: function() {
      addParticipant(this.participant);
    }
  }
};
</script>
