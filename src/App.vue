<script>
  import HeaderApp from '../src/components/header/HeaderApp.vue';
  import MainApp from './components/main/MainApp.vue';

  import {store} from './store'
  import axios from 'axios'

  export default{
  components:{
    HeaderApp,
    MainApp,
  },
  data(){
    return{
      store,
      // showImage: true,
    }
  },
  methods:{
      // hideImage(){
      //   this.showImage = false;
      // }
      // refreshPage(){
      //   window.location.reload()
      // }
    },
  };
</script>

<template>
  <header>
    <HeaderApp/>
  </header>
  <main>
    <!-- <img v-if="showImage" src="./assets/img/boolflix big img.png" alt="Hompeage Image" id="homepage-img"> -->
    <MainApp/>
  </main>
</template>

<style lang="scss">
@use "./assets/styles/styles.scss";
  #homepage-img{
    width: 100%;
  }
</style>
