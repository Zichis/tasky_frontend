<template>
  <div class="w-full md:w-1/2 lg:w-1/3">
    <button
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="mb-4 font-light text-gray-500 hover:text-gray-700"
    >
      <font-awesome-icon icon="chevron-left" /> Go back
    </button>
    <h2 class="text-3xl mb-5 font-light text-gray-700">Add new task</h2>
    <form @submit.prevent="createTask">
      <div class="mb-5">
        <label for="title" class="block mb-2">Title</label>
        <input
          class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400"
          type="text"
          v-model="task.title"
          placeholder="Enter task title"
        />
        <p v-if="validationErrors.title" class="my-1 text-red-400 font-light">
          {{ validationErrors.title[0] }}
        </p>
      </div>
      <div class="mb-5">
        <label for="category" class="block mb-2">Category</label>
        <v-select
          label="name"
          :options="categories"
          taggable
          v-model="task.category.name"
        ></v-select>
        <p
          v-if="validationErrors.category"
          class="my-1 text-red-400 font-light"
        >
          {{ validationErrors.category[0] }}
        </p>
        <div class="my-3" v-if="newCategory">
          <label for="color" class="block mt-5 mb-2">Select Color</label>
          <div class="flex flex-wrap">
            <div class="mr-4">
              <input
                class="mr-1"
                type="radio"
                value="red"
                id="red"
                v-model="task.color"
              />
              <label for="red">Red</label>
            </div>
            <div class="mr-4">
              <input
                class="mr-1"
                type="radio"
                value="blue"
                id="blue"
                v-model="task.color"
              />
              <label for="blue">Blue</label>
            </div>
            <div class="mr-4">
              <input
                class="mr-1"
                type="radio"
                value="green"
                id="green"
                v-model="task.color"
              />
              <label for="green">Green</label>
            </div>
            <div class="mr-4">
              <input
                class="mr-1"
                type="radio"
                value="yellow"
                id="yellow"
                v-model="task.color"
              />
              <label for="yellow">Yellow</label>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label for="details" class="block mb-2">Details</label>
        <textarea
          class="px-2 py-1 w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
          rows="6"
          v-model="task.details"
        ></textarea>
        <p v-if="validationErrors.details" class="my-1 text-red-400 font-light">
          {{ validationErrors.details[0] }}
        </p>
      </div>
      <button
        class="bg-blue-400 font-light px-3 py-1 mb-2 rounded text-blue-100 hover:text-white hover:bg-blue-500"
        type="submit"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import SetAlert from "../../functions/SetAlert";

export default {
  data() {
    return {
      task: {
        title: "",
        category: { name: null },
        details: "",
        color: "",
      },
      categories: [],
      validationErrors: [],
    };
  },
  methods: {
    createTask() {
      axios
        .post(process.env.VUE_APP_API_URL + "tasks", this.task, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("myapp_token"),
          },
        })
        .then(() => {
          SetAlert("Saved", "You have added a new task!", "success");
          router.push({ name: "Tasks" });
        })
        .catch((error) => {
          this.validationErrors = error.response.data.errors;
        });
    },
    getCategories() {
      axios
        .get(process.env.VUE_APP_API_URL + "task-categories/names", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("myapp_token"),
          },
        })
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    hasHistory() {
      return window.history.length > 2;
    },
  },
  mounted() {
    this.getCategories();
  },
  computed: {
    newCategory() {
      if (
        this.categories.includes(this.task.category) ||
        this.task.category === ""
      ) {
        return false;
      }

      return true;
    },
  },
};
</script>
