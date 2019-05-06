<template>
  <div class="big-header">
    <h1>Game</h1>
    <br />
    <router-link class="button" :to="actionA">{{ message }}</router-link>
    <router-link class="button" :to="actionB" v-if="actionB">{{ message }}</router-link>
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
  },
};
</script>