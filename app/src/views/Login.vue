<template>
<div class = "container">
  <div class="form">
    <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" name="email"  required placeholder="Enter your email" v-model="email">
    </div>
    <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" name="password" required placeholder="Enter your password" v-model="password">
    </div>
    <div class="buttons-container">
      <button @click="LogIn"  class="center">LogIn</button>
      <button @click='this.$router.push("/signup")' class="center">Signup</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "LogIn", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }

</script>

<style scoped>
label {
  display: block;
  font-size: 16px;
  margin-bottom: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
button:hover {
  background-color: #45a049;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.buttons-container {
  display: flex;
  justify-content: center;
}
.form{
  background-color: #bae6b5;
  border-radius: 15px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}
input {
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #777dcb, #789ac9);
  margin: 0;
}
</style>