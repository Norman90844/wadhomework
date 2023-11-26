<template>
  <HeaderBox/>
  <SignupBox />
  <FooterBox />

</template>

<script>

import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
import SignupBox from "@/components/SignupBox";

export default {
  name: "SignUp",
  components: {
    SignupBox
  }
}
</script>

<style scoped>


</style>