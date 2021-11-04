<template>
  <div class="min-h-screen flex relative">
    <side-menu @toggleMenu="toggleLargeSideMenu" @logout="logout"></side-menu>
    <div
      class="flex-1 p-5 bg-gray-100 pl-16 lg:pl-80 h-screen overflow-y-scroll"
    >
      <div class="flex">
        <div class="w-1/3 flex items-center">
          <font-awesome-icon
            icon="search"
            class="text-2xl text-gray-400"
          ></font-awesome-icon>
          <input
            type="text"
            class="h-16 w-full p-5 bg-gray-100 text-2xl font-extralight focus:outline-none"
            placeholder="Search tasks"
          />
        </div>
        <div class="flex-1 flex justify-end items-center">
          <button
            @click="toggleUserMenu()"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md"
          >
            <font-awesome-icon
              icon="user"
              class="text-gray-400"
            ></font-awesome-icon>
            <div
              class="absolute bg-white w-64 z-10 top-12 right-0 rounded p-3 shadow-md"
              :class="{ hidden: userMenuHidden }"
            >
              <p class="text-left">{{ user.name }}</p>
              <hr class="my-2" />
              <a
                href="#"
                @click.prevent="logout"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Logout</a
              >
            </div>
          </button>
        </div>
      </div>
      <div class="py-5">
        <h2 class="text-5xl text-gray-600">
          <span class="font-extralight">Welcome, </span
          ><span v-if="user !== null">{{ user.name }}</span>
        </h2>
        <hr class="my-5" />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideMenu from "@/components/SideMenu";
import axios from "axios";
import router from "../router";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  metaInfo: {
    title: "UnTasky",
  },
  components: { SideMenu },
  data() {
    return {
      userMenuHidden: true,
      isHidden: true,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    };
  },
  methods: {
    toggleUserMenu() {
      this.notificationHidden = true;
      this.userMenuHidden = !this.userMenuHidden;
    },
    toggleLargeSideMenu() {
      this.isHidden = !this.isHidden;
    },
    getCategories() {
      axios
        .get(process.env.VUE_APP_API_URL + "task-categories", {
          headers: this.headers,
        })
        .then((response) => {
          this.$store.dispatch("categories", response.data);
        })
        .catch((error) => console.log(error.response));
    },
    getTasks() {
      axios
        .get(process.env.VUE_APP_API_URL + "tasks", { headers: this.headers })
        .then((response) => {
          this.$store.dispatch("tasks", response.data);
        })
        .catch((error) => console.log(error.response));
    },
    updateData() {
      this.getCategories();
      this.getTasks();
    },
    logout() {
      axios
        .post(
          process.env.VUE_APP_API_URL + "logout",
          {},
          {
            headers: this.headers,
          }
        )
        .then((response) => {
          if (response.status === 204) {
            localStorage.removeItem("myapp_token");
            this.$store.dispatch("user", null);
            router.push({ name: "Login" });
          }
        })
        .catch((error) => console.log(error.response.data.message));
    },
  },
  created() {
    axios
      .get(process.env.VUE_APP_API_URL + "user", { headers: this.headers })
      .then((response) => {
        this.$store.dispatch("user", response.data);
      })
      .catch((error) => console.log(error.response));

    console.log(process.env.VUE_APP_API_URL);
    this.updateData();
  },
  computed: {
    ...mapGetters(["user", "tasks"]),
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
        next();
      })
      .catch(() => {
        next({ name: "Login" });
      });
  },
};
</script>
