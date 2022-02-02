<template>
  <div
    class="flex-1 bg-gray-50 flex justify-center items-center p-5 md:px-10 min-h-screen"
  >
    <div class="w-full">
      <header class="px-5 text-gray-700 mb-5">
        <h2 class="text-2xl font-semibold mb-5">
          Register Organization
        </h2>
        <h3 class="font-semibold mb-2">
          Keep track of all your organization's tasks.
        </h3>
        <p class="font-light">
          Let's get you all started by setting up an account.
        </p>
        <p class="font-light">
          You can create an individual account
          <router-link
            :to="{ name: 'Register' }"
            class="font-normal text-green-400 hover:text-green-500"
            >here</router-link
          >.
        </p>
      </header>
      <form @submit.prevent="register" class="w-full">
        <div class="px-5 mb-10">
          <div v-if="registerErrorMessage !== null">
            <p class="my-1 text-red-400 font-light">
              {{ registerErrorMessage }}
            </p>
          </div>
          <h2 class="text-xl font-light my-2">Organization Info</h2>
          <hr class="my-2" />
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 lg:pr-5">
              <label for="organization_name" class="block mb-2 text-gray-500"
                >Organization Name</label
              >
              <input
                class="px-2 py-1 mb-4 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
                type="text"
                name="organization_name"
                v-model="registerForm.organization_name"
                placeholder="Eg. Enterprise Organization"
                autofocus
              />
              <label for="organization_email" class="block mb-2 text-gray-500"
                >Organization Email</label
              >
              <input
                class="px-2 py-1 mb-4 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
                type="email"
                name="organization_email"
                v-model="registerForm.organization_email"
                placeholder="Eg. info@organization.com"
              />
              <label for="organization_address" class="block mb-2 text-gray-500"
                >Organization Address</label
              >
              <input
                class="px-2 py-1 mb-4 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
                type="text"
                name="organization_address"
                v-model="registerForm.organization_address"
                placeholder="Eg. 221B Baker Street"
              />
            </div>
            <div class="w-full lg:w-1/2 lg:pl-5">
              <label for="brief_info" class="block mb-2 text-gray-500"
                >Brief Information</label
              >
              <textarea
                class="px-2 py-1 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400 w-full resize-none"
                name="brief_info"
                rows="10"
                v-model="registerForm.brief_info"
                placeholder="Eg. This is an awesome company."
              ></textarea>
            </div>
          </div>
        </div>
        <div class="px-5 mb-5">
          <h2 class="text-xl font-light my-2">Admin Info</h2>
          <hr class="my-2" />
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
  metaInfo: {
    title: "UnTasky | Sign Up",
  },
  data() {
    return {
      registerErrorMessage: null,
      registerFormErrors: [],
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        organization_name: "",
        organization_email: "",
        organization_address: "",
        brief_info: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.name == "" ||
        this.registerForm.email == "" ||
        this.registerForm.password == "" ||
        this.password_confirmation == "" ||
        this.registerForm.organization_name == "" ||
        this.registerForm.organization_email == ""
      ) {
        this.registerErrorMessage = "Fields must not be empty!";

        return;
      }

      let headers = {
        Accept: "application/json",
      };
      axios
        .post(
          process.env.VUE_APP_API_URL + "register-organization",
          this.registerForm,
          headers
        )
        .then((response) => {
          localStorage.setItem("myapp_token", response.data.token);
          this.$store.dispatch("user", response.data.user);
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
