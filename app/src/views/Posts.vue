<template>
  <div class="AllPosts">
    <div id="post-list">
      <button @click="logout" class="logout-btn">Logout</button>
      
      <ul>
        <div class="item" v-for="post in posts" :key="post.id">
          <router-link class="singlepost" :to="'/apost/' + post.id">
            <div class="post-content">
                <span class="url"> {{ formatDate(post.date) }} </span>
                <span class="body"> {{ post.body }} </span>
            </div>
          </router-link>
        </div>
      </ul>
      
      <div class="button-container">
        <button @click="addPost" class="action-btn">Add Post</button>
        <button @click="deleteAll" class="action-btn">Delete All</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch("http://localhost:3000/api/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    logout() {
      fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (response.ok) {
            console.log("Logout successful");
            this.$router.push("/login");
          } else {
            console.error("Logout failed");
          }
        })
        .catch((error) => {
          console.error("Error during logout:", error);
        });
    },
    addPost() {
      this.$router.push("/addpost");
    },
    deleteAll() {
      fetch(`http://localhost:3000/api/posts/`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((response) => {
          if (response.ok) {
            this.posts = [];
          } else {
            console.log("Failed to delete all the posts");
          }
        })
        .catch((err) => console.log(err.message));
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
p,
a {
  font-family: Verdana;
}
.item {
  background: rgb(223, 223, 223);
  margin-bottom: 34px;
  padding: 14px;
  border-radius: 10px;
}
#post-list {
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list a {
  color: black;
  text-decoration: none;
}
#post-list a:hover {
  text-decoration: none;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(229, 229, 229, 0.7);
}

.logout-btn,
.action-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.logout-btn:hover,
.action-btn:hover {
  background-color: #45a049;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.post-content {
  display: flex;
  flex-direction: column;
}

.body {
  margin: 15px 0 20px 0;
}

.url {
  text-align: right;
  margin-top: 0;
}

.logout-btn {
  display: block;
  margin: 20px auto;
}
</style>