<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" :to="actionA">{{ messageA }}</router-link>
    <router-link class="button" :to="actionB" v-if="  actionB">{{ messageB }}</router-link>
  </div>
</template>

<script>
import game from '../data/data.json';

export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    message() {
      return game[this.id].message;
    },
    actionA() {
      return game[this.id].actionA;
    },
    actionB() {
      return game[this.id].actionB;
    },
     messageA() {
      return game[this.id].messageA;
    },
     messageB() {
      return game[this.id].messageB;
    },
  },
};
</script>