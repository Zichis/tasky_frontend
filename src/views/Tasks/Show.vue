<template>
  <div class="w-full md:w-1/2 text-gray-700">
    <button
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="mb-4 font-light text-gray-500 hover:text-gray-700"
    >
      <font-awesome-icon icon="chevron-left" /> Go back
    </button>
    <h1 class="text-3xl mb-1">{{ task.title }}</h1>
    <div
      class="inline-block px-3 rounded border"
      :class="[
        categoryTextColor(task.task_category.color),
        categoryBgColor(task.task_category.color),
        categoryBorderColor(task.task_category.color),
      ]"
    >
      {{ task.task_category.name }}
    </div>
    <p class="my-4 font-light">{{ task.details }}</p>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  data() {
    return {
      task: {
        title: "",
        task_category: {
          name: "",
        },
        details: "",
        color: "",
      },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    };
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
    categoryTextColor(color) {
      return `custom-text-${color}-500`;
    },
    categoryBgColor(color) {
      return `custom-bg-${color}-100`;
    },
    categoryBorderColor(color) {
      return `custom-border-${color}-500`;
    },
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + `tasks/${this.$route.params.id}`, {
        headers: this.headers,
      })
      .then((response) => {
        this.task = response.data;
      })
      .catch((error) => {
        if (error.response.status === 403) {
          router.go(-1);
        }
      });
  },
};
</script>
