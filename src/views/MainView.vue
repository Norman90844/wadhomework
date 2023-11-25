<template>
  <div class="home">
    <Header/>
    <Posts/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'MainView',
  components: {
    Footer,
    Header,
    Posts
  }
}
</script>