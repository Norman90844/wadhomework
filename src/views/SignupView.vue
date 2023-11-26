<template>
  <div class="signup">
    <Header/>
    <div class="box">
      <SignupBox/>
    </div>

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SignupBox from "@/components/SignupBox.vue";

export default {
  name: 'SignupView',
  components: {
    SignupBox,
    Footer,
    Header
  }
}
</script>

<style scoped>
  .box {
    margin-left: 30%;
    margin-right: 30%;
  }

  @media (max-width: 800px) {
    .box {
      margin-left: 5%;
      margin-right: 5%;
    }
  }

</style>