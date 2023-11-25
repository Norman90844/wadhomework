import Vuex from 'vuex';
import posts from '@/assets/posts.json';

export default new Vuex.Store({
  state: {
    posts: posts
  },
  mutations: {
    likePost(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.likes++;
      }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
  actions: {
    likePost({ commit }, postId) {
      commit('likePost', postId);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  getters: {
    getPosts: state => state.posts
  }
});
