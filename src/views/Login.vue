<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="login">
      <div v-if="loginErrorMessage !== null">
        <p class="my-1 text-red-400 font-light">{{ loginErrorMessage }}</p>
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2">Email</label>
        <input
          class="px-2 py-1 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
          type="text"
          name="email"
          v-model="loginForm.email"
          placeholder="Enter email"
          autofocus
        />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2">Password</label>
        <input
          class="px-2 py-1 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
          type="password"
          name="password"
          v-model="loginForm.password"
          placeholder="Enter password"
        />
      </div>
      <button
        class="bg-blue-400 font-light px-3 py-1 rounded text-blue-100 hover:text-white hover:bg-blue-500"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loginErrorMessage: null,
    };
  },
  methods: {
    login() {
      if (this.loginForm.email == "" || this.loginForm.password == "") {
        this.loginErrorMessage = "Fields must not be empty!";

        return;
      }

      let headers = {
        Accept: "application/json",
      };
      axios
        .post("http://myapi.test/api/login", this.loginForm, headers)
        .then((response) => {
          localStorage.setItem("myapp_token", response.data.token);
          router.push("/");
        })
        .catch(
          (error) => (this.loginErrorMessage = error.response.data.message)
        );
    },
  },
  beforeRouteEnter(to, from, next) {
    axios
      .get("http://myapi.test/api/user", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("myapp_token"),
        },
      })
      .then(() => {
        next("/");
      })
      .catch(() => {
        next();
      });
  },
};
</script>
