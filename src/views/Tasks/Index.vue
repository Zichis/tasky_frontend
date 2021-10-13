<template>
  <div class="flex flex-wrap">
    <task-card v-for="task in tasks" :key="task.id" :task="task"></task-card>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard";
import axios from "axios";

export default {
  components: { TaskCard },
  data() {
    return {
      tasks: [],
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    };
  },
  mounted() {
    axios
      .get("http://myapi.test/api/tasks", { headers: this.headers })
      .then((response) => {
        this.tasks = response.data;
      })
      .catch((error) => console.log(error.response.data.message));

    let alerttMessage = localStorage.getItem("tasky_alert_message");

    if (alerttMessage !== null) {
      this.$swal(alerttMessage);
      localStorage.removeItem("tasky_alert_message");
    }
  },
};
</script>
