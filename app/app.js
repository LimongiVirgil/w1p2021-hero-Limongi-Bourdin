import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';

new Vue({ router: router }).$mount('#root');

let sound = document.getElementById('sound');
sound.play();
sound.volume = 1;
