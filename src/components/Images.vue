<template>
  <div class="container">
    <div class="tile is-ancestor" :key="image" v-for="image in images">
      <div class="tile is-parent box is-4">
        <img :src="'images/' + image" />
      </div>
      <!-- <div class="tile is-parent box is-4">
        <img src="../assets/images/bjorkspo.jpg" />
      </div>
      <div class="tile is-parent box is-4">
        <img src="../assets/images/img_1081.jpg" />
      </div>
      <div class="tile is-parent box is-4">
        <img src="../assets/images/img_1294.jpg" />
      </div>-->
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
      // console.log('APA!!!!!!!!!!!!!!!!');
      // this.images = Array.from(res.data);
      // this.images({ images: images });
      this.images = res.data;
      console.log(this.images);
    });
  }
};
</script>
