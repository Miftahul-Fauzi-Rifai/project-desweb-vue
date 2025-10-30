<template>
  <div id="app">
    <!-- Jika belum login, tampilkan form login -->
    <UserLogin v-if="!isLoggedIn" @loginSuccess="isLoggedIn = true" />
    
    <!-- Jika sudah login, tampilkan dashboard -->
    <UserDashboard v-else @logout="isLoggedIn = false" />
  </div>
</template>

<script>
import UserLogin from './components/UserLogin.vue';        
import UserDashboard from './components/UserDashboard.vue'; 

export default {
  name: 'App',
  components: {
    UserLogin,     // Panggil components yang akan digunakan
    UserDashboard
  },
  data() {
    return {
      isLoggedIn: false
    };
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
