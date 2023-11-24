'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Ciao a tutti',
      image: 'img/ostia.jpg',
    };
  },
}).mount('#app');
