<template>
  <div
    class="flex-1 bg-gray-50 flex justify-center items-center px-5 md:px-10 h-screen"
  >
    <div class="w-full">
      <header class="px-5 text-gray-700 mb-8">
        <h2 class="text-2xl font-semibold mb-10">
          Login
        </h2>
        <h3 class="font-semibold mb-2">Log into your account</h3>
        <p class="font-light">
          Welcome back to Tasky. Enter your account details to continue from
          where you stopped.
        </p>
      </header>
      <form @submit.prevent="login" class="w-full">
        <div v-if="loginErrorMessage !== null">
          <p class="my-1 px-5 text-red-400 font-light">
            {{ loginErrorMessage }}
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="email" class="block mb-2 text-gray-500">Email</label>
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              v-model="loginForm.email"
              placeholder="Enter email"
            />
          </div>
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="password" class="block mb-2 text-gray-500"
              >Password</label
            >
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="password"
              name="password"
              v-model="loginForm.password"
              placeholder="Enter password"
            />
          </div>
          <button
            class="bg-blue-400 font-light px-3 py-1 mb-2 mx-5 rounded text-blue-100 hover:text-white hover:bg-blue-500"
            type="submit"
          >
            Login
          </button>
        </div>
        <p class="px-5 font-light text-gray-500">
          You don't have an account?
          <router-link
            :to="{ name: 'Register' }"
            class="font-normal text-blue-400 hover:text-blue-500"
            >Sign Up</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  metaInfo: {
    title: "Tasky | Login",
  },
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
        .post(process.env.VUE_APP_API_URL + "login", this.loginForm, headers)
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
      .get(process.env.VUE_APP_API_URL + "user", {
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
