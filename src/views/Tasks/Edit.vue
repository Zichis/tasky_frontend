<template>
  <div class="w-full md:w-1/2 lg:w-1/3">
    <button
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="mb-4 font-light text-gray-500 hover:text-gray-700"
    >
      <font-awesome-icon icon="chevron-left" /> Go back
    </button>
    <h2 class="text-3xl mb-5 font-light text-gray-700">Edit task</h2>
    <form @submit.prevent="editTask">
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
          v-model="task.task_category"
        ></v-select>
        <p
          v-if="validationErrors.category"
          class="my-1 text-red-400 font-light"
        >
          {{ validationErrors.category[0] }}
        </p>
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
        Update
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import SetAlert from "../../functions/SetAlert";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
      task: {
        title: "",
        task_category: {
          name: "",
        },
        details: "",
        color: "",
      },
      //categories: [],
      validationErrors: [],
    };
  },
  methods: {
    editTask() {
      axios
        .put(
          process.env.VUE_APP_API_URL + `tasks/${this.$route.params.id}`,
          this.task,
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + localStorage.getItem("myapp_token"),
            },
          }
        )
        .then((response) => {
          this.$store.dispatch("tasks", response.data);
          SetAlert("Updated", "Your task has been updated!", "success");
          router.push({ name: "Tasks" });
        })
        .catch((error) => {
          this.validationErrors = error.response.data.errors;
        });
    },
    hasHistory() {
      return window.history.length > 2;
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
  computed: {
    ...mapGetters(["tasks", "categories"]),
  },
};
</script>
