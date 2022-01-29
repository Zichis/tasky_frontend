<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-2 md:p-5">
    <div class="relative bg-white p-3 h-44 rounded border-t-4">
      <div class="flex justify-between items-center">
        <div>
          <router-link
            :to="{ name: 'ShowTask', params: { id: task.id } }"
            class="text-gray-400 hover:text-blue-400 mr-2"
          >
            <font-awesome-icon icon="eye"></font-awesome-icon>
          </router-link>
          <router-link
            :to="{ name: 'EditTask', params: { id: task.id } }"
            class="text-gray-400 hover:text-blue-400 mr-2"
          >
            <font-awesome-icon icon="edit"></font-awesome-icon>
          </router-link>
          <button
            @click="deleteConfirm(task.id)"
            class="text-gray-400 hover:text-red-400"
          >
            <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          </button>
        </div>
      </div>
      <p class="my-2 text-gray-500 h-12 overflow-hidden">
        {{ task.title | brief }}
      </p>
      <div class="w-full text-right mx-auto bottom-0 py-3 text-gray-400">
        <div
          class="inline-block text-white text-xs font-light rounded px-2 py-1"
          :style="{ background: statusColor(task.status.name) }"
        >
          {{ task.status.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  data() {
    return {};
  },
  filters: {
    brief(sentence) {
      return sentence
        .split(" ")
        .slice(0, 20)
        .join(" ");
    },
  },
  props: ["task"],
  methods: {
    borderColor(color) {
      return `custom-border-${color}-500`;
    },
    deleteConfirm(id) {
      this.$emit("deleteConfirm", id);
    },
    statusColor(status) {
      if (status == "Completed") {
        return "green";
      }

      if (status == "In Progress") {
        return "orange";
      }

      return "red";
    },
  },
};
</script>
