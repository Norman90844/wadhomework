<template>
  <div>
    <Header />
    <!-- List posts using the Post component -->
    <Post
        v-for="post in getPosts"
        :key="post.id"
        :post="post"
    />
    <button @click="resetLikes">Reset likes</button> <!-- This calls the Vuex action directly -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Post from '@/components/Post.vue';

export default {
  components: {
    Header,
    Footer,
    Post
  },
  computed: {
    ...mapGetters(['getPosts']) // Use the getter directly in the template
  },
  methods: {
    ...mapActions(['resetLikes']) // This adds resetLikes as a method
  },
  // You don't need the created hook to assign to data properties if you're using getPosts directly
}
</script>

<style>

div.post{
  flex-wrap: nowrap;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-right: 5%;
}
</style>