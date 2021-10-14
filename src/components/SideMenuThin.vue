<template>
  <div class="border-r w-14 bg-gray-800 text-center py-5 absolute h-screen">
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
</template>

<script>
export default {
  methods: {
    toggleLargeSideMenu() {
      this.$emit("toggleMenu");
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>
