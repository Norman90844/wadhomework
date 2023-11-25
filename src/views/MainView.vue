<template>
  <div>
    <Header />
    <div class="flexsection">
      <div class="sidebar">
      </div>
      <div class="posts">
    <Post
        v-for="post in getPosts"
        :key="post.id"
        :post="post"
    />
        <div class="resetLikesDiv">
    <button @click="resetLikes">Reset likes</button> <!-- This calls the Vuex action directly -->
        </div>
        </div>
      <div class="sidebar">
      </div>
    </div>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 0%;
  margin-right: 0%;
}

div.posts{
  flex-wrap: nowrap;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-right: 5%;
}

div.sidebar{
  width: 20%;
  background-color: rgba(64, 145, 86, 0.5);
  border-radius: 25px;
}

.flexsection{
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

.resetLikeButton {
  width: 120px;
}

.resetLikesDiv {
  display: flex;
  justify-content: center;
}
</style>