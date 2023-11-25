<template>
  <div class="header">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

*{
  font-family: Helvetica;
  box-sizing: border-box;
}

.nav a{
  text-decoration: none;
}

.nav a:visited{
  color: black;
}

a:hover{
  background-color: #dbd7da !important;
}

.nav {
  display:flex;
  align-items: center;
  height: max-content;
  font-size: 2em;
  gap: 30px;
}

.header {
  overflow: auto;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(64, 145, 86, 0.5);
  border-radius: 10px;
  width: 100%;
  min-width: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>