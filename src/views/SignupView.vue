<template>
  <div class="signup">
    <Header/>
    <Signup/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: 'SignupView',
  components: {
    Signup,
    Footer,
    Header
  }
}
</script>