<template>
  <div class="main">
    <section>
      <div class ="flexsection">
        <div class="sidebar">
        </div>
        <div class="posts">
          <div v-for="post in posts" :key="post.id" class="post">
            <div class="postheader">
              <img :src="require('@/assets/' + post.profilePic)" alt="Profile Pic" class="profilePic">
              <p>{{ post.date }}</p>
            </div>
            <p>{{ post.body }}</p>
          </div>
        </div>
        <div class="sidebar">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import posts from "@/assets/posts.json"

export default {
  data() {
    return {
      posts: posts
    };
  },
  mounted() {
    console.log('Posts:', this.posts);
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
