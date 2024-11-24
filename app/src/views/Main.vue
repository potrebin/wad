<template>
  <div class="middle-section">
        <div class="left-bar">
        </div>
        <div class="post-section">

            <h2>Welcome!</h2>

            <div id="posts">
              <Post v-for="(post, index) in posts" :key="index" :postId="index" />
            </div>

            <button class="reset-likes-button" @click="resetAllLikes">Reset All Likes</button>

        </div>

        <div class="right-bar">

        </div>
  </div> <!-- Make sure to close the root div -->
</template>

<script>
import Post from '@/components/Post.vue'
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'Main',
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['allPosts']),

    posts() {
      return this.allPosts; 
    },
  },
  methods: {
    ...mapActions(['likePost']), 

    resetAllLikes() {
  this.$store.commit('resetAllLikes');
},
  },
};
</script>

<style scoped>
p, td, th, li {
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-family: Verdana;
}
h2 {
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-family: Verdana;
    text-align: center;
    margin-top: 3rem;
}
.middle-section {
    display: flex;
    flex-direction: row;
}
.post-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.reset-likes-button {
  text-align: center;
  background-color: rgb(99, 150, 243);
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: Verdana;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  margin: 2rem 0 2rem;
  box-shadow: 0 2px 12px rgb(56, 56, 56);
}

.reset-likes-button:hover {
  background-color: rgb(137, 186, 250);
}

.left-bar, .right-bar {
    background: linear-gradient(to bottom, #5f6287, #807cb7);
    width: 15vw;
    border-radius: 10px;
    margin:2px

}
</style>
