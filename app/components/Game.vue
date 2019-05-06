<template>
  <div class="big-header">
    <h1>Game</h1>
    <br />
    <router-link class="button" to="/Win">Go to Win</router-link>
    <router-link class="button" to="/Lose">Go to Lose</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Hetic'
    };
  }
};
</script>