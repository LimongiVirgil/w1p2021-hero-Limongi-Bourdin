<template>
  <div class="perso">
    <div class="content-caractere">
      <h1>{{ message }}</h1>
      <br />
      <router-link class="button" to="/game/1">Policier</router-link>
      <br>
      <router-link class="button" to="/game/28">Promeneur</router-link>
    <div>
  </div>
</template>

<style>
  .perso {
    background: url('../assets/images/persos.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    color: white;
  }

  .content-caractere {
    margin: auto;
     display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .content-caractere h1 {
    font-size: 30px;
  }
</style>

<script>
export default {
  data() {
    return {
      message: 'Choisissez votre personnage'
    };
  }
};
</script>
