<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Image"
          />
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <table class="table is-hoverable is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Deltagare/Lag</th>
                <th>Poäng</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="participant._id" v-for="participant in participants">
                <td>{{ participant._id }}</td>
                <td>{{ participant.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Competition",
  data: function() {
    return {
      participants: []
    };
  }
};
</script>
