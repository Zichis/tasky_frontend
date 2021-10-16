<template>
  <div>
    <div
      v-if="noTasks"
      class="flex justify-center items-center font-light h-60"
    >
      You have no tasks.&nbsp;
      <router-link
        :to="{ name: 'CreateTask' }"
        class="font-normal text-blue-500 hover:text-blue-600"
        >Add a task.</router-link
      >
    </div>
    <div class="flex flex-wrap">
      <task-card
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @deleteConfirm="deleteConfirm"
      ></task-card>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";
import axios from "axios";
import SetAlert from "../../functions/SetAlert";
import DisplayAlert from "../../functions/DisplayAlert";

export default {
  components: { TaskCard },
  data() {
    return {
      tasks: [],
      noTasks: false,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "tasks", { headers: this.headers })
      .then((response) => {
        this.tasks = response.data;
        if (this.tasks.length < 1) {
          this.noTasks = true;
        }
      })
      .catch((error) => console.log(error.response.data.message));

    DisplayAlert(this.$swal);
  },
  methods: {
    deleteConfirm(id) {
      this.$swal({
        title: "Warning",
        icon: "warning",
        html: "<p>Are you sure you want to delete this task?</>",
        showDenyButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(process.env.VUE_APP_API_URL + `tasks/${id}`, {
              headers: this.headers,
            })
            .then((response) => {
              this.tasks = response.data;
              SetAlert("Deleted", "Your task has been deleted!", "success");
              DisplayAlert(this.$swal);
              if (this.tasks.length < 1) {
                this.noTasks = true;
              }
            })
            .catch((error) => console.log(error));
        }
      });
    },
  },
};
</script>
