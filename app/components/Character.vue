<template>
  <div class="big-header">
    <div class="content-caractere">
      <h1>{{ message }}</h1>
      <br />
      <router-link class="button" to="/game/1">Policier</router-link>
      <br>
      <router-link class="button" to="/game/28">Randonneur</router-link>
    <div>
  </div>
</template>

<style>
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
