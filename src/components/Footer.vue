<template>
  <footer class="footer">
    <p id="footer">Footer</p>
  </footer>
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

.footer{
  margin-top: 20px;
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