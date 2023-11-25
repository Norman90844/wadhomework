<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer{
  margin-top: 10px;
  border-radius: 25px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(64, 145, 86, 0.5);
}

.footer > p{
  font-size: 2em;
}

#footer{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
<script setup>
</script>