<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png">
      <br>
      <Contador></Contador>
      <Contador></Contador>
      <Contador></Contador>
      <Contador></Contador>
          <br>
          <div class="planes">
            <h2>Listado de planes de cursos de programacion</h2>
            <div class="planes">
            <!--
                <Plan nombre="Plan 1 - Principiante"></Plan>
                <Plan nombre="Plan 2 - Intermedio"></Plan>
                <Plan nombre="Plan 3 - Avanzado"></Plan>
                <Plan nombre="Plan 4 - Hackers"></Plan>
                -->

              <Planes></Planes>
            </div>
          </div>






    </center>



  </div>
</template>

<script>
 import Contador from "./components/Contador.vue";
 import Planes from "./components/Planes.vue";
export default {
  name: 'App',
  components: {
    Contador,
    Planes
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
}

</style>
