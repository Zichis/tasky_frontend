<template>
  <div class="flex">
    <div
      class="hidden md:p-5 lg:p-10 md:block md:w-1/3"
      style="background-image: linear-gradient(rgba(31,50,77,0.9),rgba(31,50,77,1)), url('https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')"
    >
      <h2 class="font-extrabold text-2xl text-yellow-50">Tasky</h2>
      <div class="flex justify-center items-center h-full">
        <div>
          <h3 class="text-4xl text-white font-light mb-5">
            Get started managing your tasks with our new features
          </h3>
          <ul class="pl-5">
            <li class="text-2xl mb-4 animate-1">
              <font-awesome-icon
                icon="check-circle"
                class="text-green-400 mr-2"
              ></font-awesome-icon>
              <span class="font-extralight text-white">
                Track Personal Tasks
              </span>
            </li>
            <li class="text-2xl mb-4 animate-2">
              <font-awesome-icon
                icon="check-circle"
                class="text-green-400 mr-2"
              ></font-awesome-icon>
              <span class="font-extralight text-white">
                Create Projects
              </span>
            </li>
            <li class="text-2xl mb-4 animate-3">
              <font-awesome-icon
                icon="check-circle"
                class="text-green-400 mr-2"
              ></font-awesome-icon>
              <span class="font-extralight text-white">
                Invite friends for collaboration
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
            </div>
            <div class="w-full lg:w-1/2 px-5 mb-5">
              <label
                for="password_confirmation"
                class="block mb-2 text-gray-500"
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
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  data() {
    return {
      registerErrorMessage: null,
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
        .post("http://myapi.test/api/register", this.registerForm, headers)
        .then((response) => {
          localStorage.setItem("myapp_token", response.data.token);
          router.push("/");
        })
        .catch(
          (error) => (this.registerErrorMessage = error.response.data.message)
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

<style scoped>
@keyframes authInfo {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.25;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}

.animate-1 {
  animation: authInfo 1s linear;
}
.animate-2 {
  animation: authInfo 2s linear;
}
.animate-3 {
  animation: authInfo 3s linear;
}
</style>
