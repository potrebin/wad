<template>

    <div class="post" id="posts">
        <div class = 'post-top'>
            <div class="author-info">
                <img :src="post.pfp" alt="profile picture">
                <p>{{ post.author }}</p>
            </div>
            <p>{{post.date}}</p>
        </div>

        <div class= 'post-content'>
            <div v-for="(elem, index) in post.content" :key="index">
                <p v-if="elem.type === 'text'">{{ elem.text }}</p>
                <img v-if="elem.type === 'image'" :src="elem.src" :alt="elem.alt">
                <ul v-if="elem.type === 'ulist'">
                    <li v-for="(li, idx) in elem.li" :key="idx">{{ li }}</li>
                </ul>
                <table v-if="elem.type === 'table'">
                    <thead>
                        <tr>
                        <th v-for="(header, idx) in elem.trheader" :key="idx">{{ header }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, idx) in elem.tr" :key="idx">
                        <td v-for="(cell, idx) in row" :key="idx">{{ cell }}</td>
                        </tr>
                    </tbody>
                </table>
                <a v-if="elem.type === 'link'" :href="elem.href" target="_blank">{{ elem.text }}</a>
            </div>
        </div>
        
        <div class="post-bottom">
            <img src="../assets/like_icon.jpg" alt="like" class="like-button" @click="incrementLikes(postId)"/>
            <span class="like-count">{{ post.likes }} likes</span>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['postId'],
  computed: {
    ...mapGetters(['getPostById']),
    post() {
      return this.getPostById(this.postId);
    },
  },
  methods: {
    ...mapActions(['likePost']),
    incrementLikes(postId) {
      this.likePost(postId);
    },
    resetLikes() {
      this.likes = 0; // Reset the like count
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
.like-count {
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-family: Verdana;
    margin-left: 8px;
}
h2 {
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-family: Verdana;
    text-align: center;
    margin-top: 3rem;
}
.posts > .posts-begin {
    color: rgb(103, 80, 194);
    font-style: italic;
}
.posts {
    width: 70vw;
    margin: 0 5vw 5vw 5vw;
}

.post {
    background-color: rgb(211, 213, 255);
    border-radius: 30px;
    border: solid 2px rgb(200, 200, 200);
    margin: 4rem 6rem 4rem 6rem;
    padding: 2rem;
}

.posts-begin + div {
    border: solid 5px rgb(119, 106, 178);
    margin-top: 1rem;
    margin-bottom: 5rem;
}

.post-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.post-top .author-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.post-top .author-info p {
    margin-left: 1rem;
}

.post-content img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
}
.post-content a {
    font-family: Verdana;
    color: rgb(17, 78, 201);
    font-size: 20px;
}
.post-content a:hover {
    color: rgb(47, 158, 255);
}

.post-top img {
    border-radius: 100%;
    width: 3rem;
}

.post-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.post-bottom .like-button {
    border-radius: 100%;
    width: 2rem;
}
.post-bottom .like-button:hover, #submit-button:hover, #file:hover {
    opacity: 0.6;
}
.post-top ~ div {
    margin-top: 2rem;
}

.post-content table {
    width: 100%;
    border-collapse: collapse;
    border: solid 2px rgb(19, 52, 19);
    margin-bottom: 1rem;
}
.post-content td {
    border: solid 2px rgb(19, 52, 19);
    text-align: center;
    background-color: rgb(223, 254, 223);;
    width: 25%;
}
.post-content th {
    border: solid 2px rgb(19, 52, 19);
    text-align: center;
    background-color: rgb(188, 239, 188);;
}
.post-content td:hover{
    background-color: rgb(244, 255, 240);;
}

li {
    list-style: square;
    margin-top: 10px;
}


</style>

