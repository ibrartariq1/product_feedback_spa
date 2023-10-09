<template>
     <div  class="d-flex justify-content-center align-items-center vh-100">
    
    <form @submit.prevent="login" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Username/Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-control"
          required
        />
        <div class="invalid-feedback">
          <span
            v-for="message in validation_message.email"
            :key="`email-${message}`"
            >{{ message }}</span
          >
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="form-control"
          required
        />
        <div class="invalid-feedback">
          <span
            v-for="message in validation_message.password"
            :key="`password-${message}`"
            >{{ message }}</span
          >
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
   
  </div>
</template>

<script>
import Api from "@/assets/js/Api";
export default {

  name: "login-component",
  data() {
    return {
      form: {
        email: "",
        password: "",

      },
      validation_message: {
        email: [],
        password: [],
      },
     
    };
  },
  methods: {
    login() {
      
      Api.post('login',this.form).then(res => {
        console.log(res)
        localStorage.setItem("participant_token", res.data.token);
        this.$store.commit("user", res.data.user);
        location.href = "/";
      }).catch(() => {
        localStorage.removeItem("participant_token");
        location.href = "/";

      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
