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
    }
  },
  methods:{
      
    },
  };
</script>

<template>
  <header>
    <HeaderApp/>
  </header>
  <main>
    <MainApp/>
  </main>
</template>

<style lang="scss">
@use "./assets/styles/styles.scss";

</style>
