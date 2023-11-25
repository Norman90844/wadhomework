<template>
  <div>
    <Header />
    <div class="flexsection">
      <div class="sidebar">
      </div>
      <!-- List posts using the Post component -->
      <div class="posts">
        <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
        <div class="resetLikesDiv">
          <button @click="resetLikes" class="resetLikeButton">Reset likes</button>
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