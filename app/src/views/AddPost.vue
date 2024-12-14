<template>
    <div class="form">
      <h3>Add a Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <button @click="addPost" class="addPost">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddPost",
    data() {
      return {
        post: {
          body: "",
          urllink: "",
        },
      };
    },
    methods: {
      addPost() {
        const data = {
          body: this.post.body,
          urllink: this.post.urllink,
        };
  
        fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Post added:", data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.error("Error adding post:", e);
          });
      },
    },
  };
  </script>
  
  <style>
  .form {
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
  }
  
  .addPost {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .addPost:hover {
    background-color: #218838;
  }
  </style>
  