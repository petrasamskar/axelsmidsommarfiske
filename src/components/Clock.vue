<template>
  <div class="notification is-success">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Clock",
  data: function() {
    return {
      text: `Nästa tävling om ${this.updateClock()} dagar`
    };
  },
  methods: {
    getDaysRemaining: function(endTime) {
      var t = Date.parse(endTime) - Date.parse(new Date());
      return Math.floor(t / (1000 * 60 * 60 * 24));
    },
    updateClock: function() {
      var t = this.getDaysRemaining("2020-06-19");
      return t;
    }
  }
};
</script>
