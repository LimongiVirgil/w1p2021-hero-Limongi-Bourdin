<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <h2>{{subtitle}}</h2>
    <br>
    <router-link class="button" :to="actionA">{{ messageA }}</router-link>
    <br>
    <router-link class="button" :to="actionB" v-if="actionB">{{ messageB }}</router-link>
    <br>
    <router-link class="button" :to="actionC" v-if="actionC && messageC">{{ messageC }}</router-link>
    <div>{{ temporalite }}</div>
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
      if (this.$route.params.id === "3") {
        if (game[3].key === "true" && game[3].combat === "true") {
          return game[this.id].actionD;
        } else if (game[3].key === "true") {
          return game[this.id].actionA;
        } else {
          return game[this.id].actionC;
        }
      } else if (this.$route.params.id === "1") {
        if (game[this.id].cle === "true") {
          return game[this.id].actionC;
        }
      }
      return game[this.id].actionA
    },
    actionB() {
      return game[this.id].actionB;
    },
    actionC() {
      return game[this.id].actionC;
    },
     messageA() {
      return game[this.id].messageA;
    },
     messageB() {
      return game[this.id].messageB;
    },
    messageC() {
      return game[this.id].messageC;
    },
    temporalite() {
      if (this.$route.params.id === "4") {
        if (game[3].key === "true") {
          return game[this.id].key;
        } else {
          game[3].key = "true", game[1].cle = "true";
        }
      } else if (this.$route.params.id === "14") {
        if (game[3].combat === "false") {
          game[3].combat = "true",
          game[3].message = "Plus aucun bruit ne vient de cette salle"
        }
      }
    },
    subtitle() {
      return game[this.id].subtitle;
    }
  }
};
</script>