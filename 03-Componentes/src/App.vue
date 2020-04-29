<template>
  <div class="container"><!-- deve de haber un componente raiz por cada componente-->
    <header-post></header-post>
    <ejemplo-post></ejemplo-post>
    <footer-post></footer-post>
  </div>
</template>

<script>
import EjemploPost  from "./components/Post";
import headerPost from "./components/Header";
import footerPost from "./components/Footer";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    EjemploPost,
    headerPost,
    footerPost
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
