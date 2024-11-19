<template>
  <div class="middle-section">
        <div class="left-bar">
        </div>
        <div class="post-section">

            <h2>Welcome!</h2>

            <div id="posts">
              <Post v-for="post in posts" :key="post.id" :post="post"/>
            </div>

        </div>

        <div class="right-bar">

        </div>
  </div> <!-- Make sure to close the root div -->
</template>

<script>
import Post from '@/components/Post.vue'


export default {
  name: 'Main',
  components: {
    Post,
  },
  computed: {
  posts() {
    console.log(this.$store.state.posts); // Check if posts data is available
    return this.$store.state.posts;
  },
},
}
</script>

<style scoped>
.middle-section {
    display: flex;
    flex-direction: row;
}

.left-bar, .right-bar {
    background: linear-gradient(to bottom, #5f6287, #807cb7);
    width: 15vw;
    border-radius: 10px;
    margin:2px

}
</style>
