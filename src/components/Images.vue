<template>
  <div class="container">
    <div class="content is-medium">
      <h1>Bilder</h1>
      <div class="tile is-ancestor" :key="image" v-for="image in images">
        <div class="tile">
          <img :src="'images/' + image" />
        </div>
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
      console.log(this.images);
    });
  }
};
</script>
