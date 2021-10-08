<template>
  <div class="min-h-screen flex relative">
    <side-menu-thin @toggleMenu="toggleLargeSideMenu"></side-menu-thin>
    <side-menu-large
      class="lg:block"
      :class="{ hidden: isHidden }"
    ></side-menu-large>
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
            id="notificationToggle"
            @click="toggleNotification($event)"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md mr-5"
          >
            <font-awesome-icon
              icon="bell"
              class="text-gray-400"
            ></font-awesome-icon>
            <div
              class="bg-red-400 w-2 h-2 rounded-full absolute top-0 right-0"
            ></div>
            <div
              class="absolute bg-white w-64 z-10 -bottom-56 rounded p-3 shadow-md"
              :class="{ hidden: notificationHidden }"
            >
              <h3>Notifications</h3>
              <hr class="my-2" />
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Create</a
              >
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Update</a
              >
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Delete</a
              >
              <a href="#" class="block text-center text-blue-400">More</a>
            </div>
          </button>
          <a
            href="#"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md mr-5"
          >
            <font-awesome-icon
              icon="envelope"
              class="text-gray-400"
            ></font-awesome-icon>
            <div
              class="bg-red-400 w-2 h-2 rounded-full absolute top-0 right-0"
            ></div>
          </a>
          <a
            href="#"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md"
          >
            <font-awesome-icon
              icon="user"
              class="text-gray-400"
            ></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="py-5" @click="hideAll($event)">
        <h2 class="text-5xl text-gray-600">
          <span class="font-extralight">Welcome, </span><span>Ezichi</span>
        </h2>
        <hr class="my-5" />
        <div class="flex flex-wrap">
          <task-card
            v-for="task in tasks"
            :key="task.id"
            :task="task"
          ></task-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideMenuLarge from "@/components/SideMenuLarge";
import SideMenuThin from "@/components/SideMenuThin";
import TaskCard from "@/components/TaskCard";
import axios from "axios";

export default {
  name: "Home",
  components: { SideMenuLarge, SideMenuThin, TaskCard },
  data() {
    return {
      notificationHidden: true,
      task: {
        category: "Management",
        details: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam et
        excepturi vitae dolor assumenda, perferendis a modi quod iusto quo
        repellat repudiandae tenetur commodi dicta doloribus inventore sunt
        sapiente similique neque at. Maxime aperiam tempora necessitatibus totam
        molestiae illo quaerat!`,
        color: "red",
      },
      tasks: [],
      isHidden: true,
    };
  },
  methods: {
    toggleNotification() {
      this.notificationHidden = !this.notificationHidden;
    },
    hideAll() {
      this.notificationHidden = true;
    },
    toggleLargeSideMenu() {
      this.isHidden = !this.isHidden;
    },
  },
  mounted() {
    let headers = {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("myapp_token"),
    };
    axios
      .get("http://myapi.test/api/tasks", { headers: headers })
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((error) => console.log(error.response.data.message));
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
        next();
      })
      .catch(() => {
        next("/login");
      });
  },
};
</script>
