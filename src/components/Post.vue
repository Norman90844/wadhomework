<template>
  <div class="post">
    <div class="post-header">
      <!-- Profile picture -->
      <img :src="require('@/assets/' + post.profilePic)" alt="Profile picture" class="profile-pic">
      <!-- Author's name and post date -->
      <h3>{{ post.authorName }}</h3>
      <p>{{ post.date }}</p>
    </div>
    <!-- Post image -->
    <img :src="post.img" alt="Post image" class="post-image">
    <!-- Post body -->
    <p>{{ post.body }}</p>
    <div class="post-footer">
      <!-- Like button and like count -->
      <button @click="likePost(post.id)">Like</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    likePost(postId) {
      // Dispatch the 'likePost' action to the Vuex store
      this.$store.dispatch('likePost', postId);
    }
  }
}
</script>


<style scoped>
*{
  font-family: Helvetica;
  box-sizing: border-box;
}

.flexsection{
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}

div.sidebar{
  width: 20%;
  background-color: rgba(64, 145, 86, 0.5);
  border-radius: 25px;
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

div.post{
  overflow:auto;
  border-radius: 25px;
  background-color: rgba(64, 145, 86, 0.5);
  padding: 2%;
}

.postheader{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
  align-items: center;
}

.profilePic{
  width: 40px;
  height: 40px;
}

.post > img + p{
  font-weight: bold;
}
.post > img ~ p{
  font-style: italic;
}

p {
  text-align: left;
}

@media (max-width: 800px) {
  .sidebar {
    display: none;
  }

  div.posts {
    width: 85%;
  }
}

</style>
