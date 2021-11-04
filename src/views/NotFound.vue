<template>
  <div class="flex justify-center items-center h-screen overflow-y-scroll">
    <div class="text-center">
      <h1 class="text-6xl text-gray-600">404</h1>
      <p class="mb-5">Page not found!</p>
      <button
        class="bg-green-500 text-green-100 px-3 py-1 rounded transition-colors hover:bg-green-600 hover:text-white"
        @click="goBack"
      >
        Go back
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  metaInfo: {
    title: "UnTasky | Not Found",
  },
  methods: {
    goBack() {
      if (window.history.length >= 2) {
        router.go(-1);
      }

      router.push("/");
    },
  },
};
</script>
