<template>
  <div
    class="flex-1 bg-gray-50 flex justify-center items-center px-5 md:px-10 h-screen"
  >
    <div class="w-full">
      <header class="px-5 text-gray-700 mb-8">
        <h2 class="text-2xl font-semibold mb-10">
          Register
        </h2>
        <h3 class="font-semibold mb-2">Manage all your tasks efficiently</h3>
        <p class="font-light">
          Let's get you all started by setting up your account.
        </p>
      </header>
      <form @submit.prevent="register" class="w-full">
        <div v-if="registerErrorMessage !== null">
          <p class="my-1 px-5 text-red-400 font-light">
            {{ registerErrorMessage }}
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="name" class="block mb-2 text-gray-500">Name</label>
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="text"
              name="name"
              v-model="registerForm.name"
              placeholder="Enter name"
              autofocus
            />
            <p
              v-if="registerFormErrors.name"
              class="my-1 text-red-400 font-light"
            >
              {{ registerFormErrors.name[0] }}
            </p>
          </div>
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="email" class="block mb-2 text-gray-500">Email</label>
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              v-model="registerForm.email"
              placeholder="Enter email"
            />
            <p
              v-if="registerFormErrors.email"
              class="my-1 text-red-400 font-light"
            >
              {{ registerFormErrors.email[0] }}
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="password" class="block mb-2 text-gray-500"
              >Password</label
            >
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="password"
              name="password"
              v-model="registerForm.password"
              placeholder="Enter password"
            />
            <p
              v-if="registerFormErrors.password"
              class="my-1 text-red-400 font-light"
            >
              {{ registerFormErrors.password[0] }}
            </p>
          </div>
          <div class="w-full lg:w-1/2 px-5 mb-5">
            <label for="password_confirmation" class="block mb-2 text-gray-500"
              >Confirm Password</label
            >
            <input
              class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
              type="password"
              name="password_confirmation"
              v-model="registerForm.password_confirmation"
              placeholder="Enter password"
            />
          </div>
        </div>
        <button
          class="bg-blue-400 font-light px-3 py-1 mb-2 mx-5 rounded text-blue-100 hover:text-white hover:bg-blue-500"
          type="submit"
        >
          Register
        </button>
        <p class="px-5 font-light text-gray-500">
          Already have an account?
          <router-link
            :to="{ name: 'Login' }"
            class="font-normal text-blue-400 hover:text-blue-500"
            >Log in</router-link
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
  data() {
    return {
      registerErrorMessage: null,
      registerFormErrors: [],
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.name == "" ||
        this.registerForm.email == "" ||
        this.registerForm.password == "" ||
        this.password_confirmation == ""
      ) {
        this.registerErrorMessage = "Fields must not be empty!";

        return;
      }

      let headers = {
        Accept: "application/json",
      };
      axios
        .post(
          process.env.VUE_APP_API_URL + "register",
          this.registerForm,
          headers
        )
        .then((response) => {
          localStorage.setItem("myapp_token", response.data.token);
          router.push("/");
        })
        .catch((error) => {
          this.registerErrorMessage = error.response.data.message;
          this.registerFormErrors = error.response.data.errors;
        });
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
