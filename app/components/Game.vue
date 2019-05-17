<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" :to="actionA">{{ messageA }}</router-link>
    <br>
    <router-link class="button" :to="actionB" v-if="actionB">{{ messageB }}</router-link>
    <br>
    <router-link class="button" :to="actionC" v-if="actionC">{{ messageC }}</router-link>
    <h2>{{key}}</h2>
  </div>
</template>

<script>
import game from '../data/data.json';
import keyDoor from '../js/CleStorage.js';

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
    actionC() {
      return game[this.id].actionC;
    },
     messageA() {
       if (game[4].key = "true") {
         return game[4].messageA
       }
      return game[this.id].messageA;
    },
     messageB() {
      return game[this.id].messageB;
    },
    messageC() {
      return game[this.id].messageC;
    },
    key() {
      game[4].key = "true";
      if (game[this.id].key === "true") {
      return game[this.id].key;
      } else {
        return game[this.id].nom;
      }
    },
  },
};
</script>