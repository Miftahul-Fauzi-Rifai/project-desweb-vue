<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    handleLogin() {
      // Cek jika user dan pass yang diinputkan adalah "admin"
      if (this.username === 'admin' && this.password === 'admin') {
        this.$emit('loginSuccess'); // Emit event ke parent
        this.errorMessage = ''; // Hapus pesan error jika berhasil
      } else {
        //  Definisikan kalimat jika gagal login
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.login {
  text-align: center;
}
</style>
