<template>
  <div
    class="flex absolute h-screen overflow-y-scroll z-10 bg-gray-200 transition-width duration-500"
    :class="sidemenuWidth"
  >
    <div class="w-14 flex-shrink-0 bg-gray-800 text-center py-5 h-full">
      <button
        class="block lg:hidden rounded border text-white px-2 py-1 my-0 mx-auto hover:bg-white hover:text-gray-800"
        @click="toggleLargeSideMenu"
      >
        <font-awesome-icon icon="bars" />
      </button>
      <router-link
        :to="{ name: 'Tasks' }"
        class="block text-white mt-20 mb-5 hover:text-yellow-500"
      >
        <font-awesome-icon icon="list" />
      </router-link>
      <a href="#" class="block text-white mb-5 hover:text-yellow-500">
        <font-awesome-icon icon="users" />
      </a>
      <a href="#" class="block text-white mb-5 hover:text-yellow-500">
        <font-awesome-icon icon="chart-pie" />
      </a>
      <a href="#" class="block text-white mb-5 hover:text-yellow-500">
        <font-awesome-icon icon="calendar-check" />
      </a>
      <a
        href="#"
        @click.prevent="logout()"
        class="block bg-red-600 text-white py-4 mb-5 hover:text-white"
      >
        <font-awesome-icon icon="sign-out-alt" />
      </a>
    </div>
    <div class="flex-1">
      <div
        class="animate-1 lg:block"
        :class="sidemenuOpen ? 'block' : 'hidden'"
      >
        <h2 class="text-center py-5 text-2xl font-semibold text-gray-700">
          My Tasks
        </h2>
        <div class="text-center py-5">
          <router-link
            :to="{ name: 'CreateTask' }"
            class="bg-gray-500 shadow-md px-3 py-2 rounded-full font-light text-gray-200 hover:bg-gray-600 hover:text-white transition-colors"
            >Add Task</router-link
          >
        </div>
        <div>
          <router-link
            :to="{ name: 'Tasks' }"
            class="flex justify-between items-center px-5 mb-7"
          >
            <h4>All Tasks</h4>
            <div
              class="bg-blue-500 text-white text-xs font-light py-1 px-3 rounded-full"
            >
              {{ tasks.length }}
            </div>
          </router-link>
          <a
            v-for="category in categories"
            :key="category.id"
            href="#"
            class="flex justify-between items-center px-5 mb-7 text-gray-700"
          >
            <h4>{{ category.name }}</h4>
            <div
              class="text-white text-xs font-light py-1 px-3 rounded-full"
              :class="badgeColor(category.color)"
            >
              {{ category.tasks.length }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories", "tasks"],
  data() {
    return {
      sidemenuOpen: false,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    };
  },
  methods: {
    toggleLargeSideMenu() {
      //this.$emit("toggleMenu");
      this.sidemenuOpen = !this.sidemenuOpen;
    },
    logout() {
      this.$emit("logout");
    },
    badgeColor(color) {
      return `bg-${color}-500`;
    },
  },
  computed: {
    sidemenuWidth() {
      return this.sidemenuOpen ? "w-80 lg:w-72" : "w-14 lg:w-72";
    },
  },
};
</script>

<style scoped>
@keyframes sidemenu {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-1 {
  animation: sidemenu 1s linear;
}
</style>
