<template>
  <div class="container">
    <div class="content is-medium">
      <h1>Bilder</h1>
      <div :key="image" v-for="image in images">
        <figure class="image">
          <img :src="'images/' + image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import { getImages } from "../CompetitionService";
export default {
  name: "Images",
  data: function() {
    return {
      images: null
    };
  },
  created: function() {
    getImages().then(res => {
      this.images = res.data;
    });
  }
};
</script>
