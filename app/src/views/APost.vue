<template>
    <div class="A-Post">
      <div id="form">
        <h3>A Post</h3>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
        <div class="button-container">
            <button @click="updatePost" class="action-btn">Update Post</button>
            <button @click="deletePost" class="action-btn">Delete Post</button>
      </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: "APost",
    data() {
      return {
        post: {
          id: "",
          body: "",
        },
      };
    },
    methods: {
      fetchAPost(id) {
        fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch the post");
            }
            return response.json();
          })
          .then((data) => {
            this.post = data;
          })
          .catch((err) => {
            console.error("Error fetching post:", err.message);
          });
      },
  
      updatePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.post),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to update the post");
            }
            return response.json();
          })
          .then(() => {
            console.log("Post updated successfully");
            this.$router.push("/");
          })
          .catch((e) => {
            console.error("Error updating post:", e.message);
          });
      },
  
      deletePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete the post");
            }
            return response.json();
          })
          .then(() => {
            console.log("Post deleted successfully");
            this.$router.push("/");
          })
          .catch((e) => {
            console.error("Error deleting post:", e.message);
          });
      },
    },
  
    mounted() {
      this.fetchAPost(this.$route.params.id);
    },
  };
  </script>
  
  <style scoped>
  #form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  h3 {
    text-align: center;
  }
  
  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .action-btn {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .action-btn:hover {
    background-color: #218838;
  }
  </style>
  