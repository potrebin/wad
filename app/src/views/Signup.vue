<template>

    <div class="signup-container">
      <div class="form-box">
        <form @submit.prevent="validateForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
  
          <button type="submit" class="signup-btn">Signup</button>
        </form>
  
        <div v-if="errorMessages.length > 0" class="error-messages">
          <p>The password is not valid:</p>
          <ul>
            <li v-for="(message, index) in errorMessages" :key="index">
              {{ message }}
            </li>
          </ul>
        </div>
      </div>
    </div>

  </template>

<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessages: [],
    };
  },
  methods: {
    validateForm() {
      this.errorMessages = [];
      const password = this.password;

      const regexUppercase = /[A-Z]/;
      const regexLowercase = /(?:.*[a-z].*){2}/;
      const regexNumber = /[0-9]/;
      const regexStartsWithUpperc = /^[A-Z]/;
      const regexUnderscore = /_/;

      if (password.length < 8 || password.length >= 15) {
        this.errorMessages.push("The password must be between 8 and 15 characters.");
      }
      if (!regexUppercase.test(password)) {
        this.errorMessages.push("The password must include at least one uppercase alphabet character.");
      }
      if (!regexLowercase.test(password)) {
        this.errorMessages.push("The password must include at least two lowercase alphabet characters.");
      }
      if (!regexNumber.test(password)) {
        this.errorMessages.push("The password must include at least one numeric value.");
      }
      if (!regexStartsWithUpperc.test(password[0])) {
        this.errorMessages.push("The password must start with an uppercase alphabet character.");
      }
      if (!regexUnderscore.test(password)) {
        this.errorMessages.push('The password must include the character "_".');
      }

      if (this.errorMessages.length === 0) {
        this.$router.push({ name: 'main' });        
      }
    },
  },
};

</script>


<style scoped>
p, td, th, li, label {
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
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #777dcb, #789ac9);
  margin: 0;
}

.form-box {
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

label {
  display: block;
  font-size: 16px;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.signup-btn {
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}

.signup-btn:hover {
  background-color: #45a049;
}
.error-messages {
  margin-top: 1rem;
  color: red;
  text-align: left;
}
.error-messages ul {
  margin: 0;
  padding-left: 1rem;
}
</style>
