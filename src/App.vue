<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <router-link to="/cars">Cars</router-link>
   </nav> 
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'app',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
