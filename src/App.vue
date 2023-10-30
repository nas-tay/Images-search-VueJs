<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #fff;
}
input {
  border: none;
}
button {
  border: none;
  cursor: pointer;
  background: transparent;
}
.container{
        width: 75%;
        max-width: 1420px;
        margin: 0 auto;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
