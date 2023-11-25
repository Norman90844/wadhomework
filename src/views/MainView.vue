<template>
  <div>
    <Header />
    <!-- List posts using the Post component -->

    <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
    />
    <button @click="resetLikes">Reset likes</button>
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
    ...mapGetters(['getPosts'])
  },
  methods: {
    ...mapActions(['resetAllLikes']),
    resetLikes() {
      this.resetAllLikes();
    }
  },
  created() {
    this.posts = this.getPosts;
  }
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