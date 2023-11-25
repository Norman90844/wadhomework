<template>
  <div class="post">
    <div class="post-header">
      <img :src="require('@/assets/' + post.profilePic)" alt="Profile picture" class="profile-pic">
      <div class="post-details">
        <p>{{ post.date }}</p>
      </div>
    </div>
    <img v-if="post.img" :src="post.img" alt="Post image" class="post-image">
    <p class="post-body">{{ post.body }}</p>
    <div class="post-footer">
      <img :src="require('@/assets/like.png')" alt="Like" class="like-icon" @click="likePost(post.id)">
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
      this.$store.dispatch('likePost', postId);
    }
  }
}
</script>

<style scoped>
.post {
  overflow: auto;
  border-radius: 25px;
  background-color: #dbd7da;
  padding: 2%;
  font-family: Helvetica, sans-serif;
  box-sizing: border-box;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
}

.profile-pic {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.post-details h3 {
  font-weight: bold;
}

.post-details p {
  font-style: italic;
}

.post-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.post-body {
  margin-bottom: 10px;
  text-align: left;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.like-icon {
  cursor: pointer;
  width: 40px; /* Adjust as necessary */
  height: 40px; /* Adjust as necessary */
}
</style>
