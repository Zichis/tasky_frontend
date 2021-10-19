<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-2 md:p-5">
    <div
      class="relative bg-white p-3 h-44 rounded border-t-4"
      :class="borderColor(task.task_category.color)"
    >
      <div class="flex justify-between items-center">
        <h3
          class="p-2 rounded inline-block text-sm"
          :class="[
            categoryTextColor(task.task_category.color),
            categoryBgColor(task.task_category.color),
          ]"
        >
          {{ task.task_category.name }}
        </h3>
        <div>
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
      <div class="absolute bottom-0 py-3 text-gray-400">
        <font-awesome-icon
          icon="comment-alt"
          class="text-gray-400"
        ></font-awesome-icon>
        4&nbsp;&nbsp;
        <font-awesome-icon
          icon="paperclip"
          class="text-gray-400"
        ></font-awesome-icon>
        2&nbsp;
        <router-link
          :to="{ name: 'ShowTask', params: { id: task.id } }"
          class="my-1 hover:text-gray-700"
          >View</router-link
        >
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
    categoryBgColor(color) {
      return `custom-bg-${color}-100`;
    },
    categoryTextColor(color) {
      return `custom-text-${color}-500`;
    },
    deleteConfirm(id) {
      this.$emit("deleteConfirm", id);
    },
  },
};
</script>

<style>
:root {
  --red-500: rgba(239, 68, 68, 1);
  --red-100: rgba(254, 226, 226, 1);
  --blue-500: rgba(59, 130, 246, 1);
  --blue-100: rgba(219, 234, 254, 1);
  --yellow-500: rgba(245, 158, 11, 1);
  --yellow-100: rgba(254, 243, 199, 1);
  --green-500: rgba(16, 185, 129, 1);
  --green-100: rgba(209, 250, 229, 1);
}

.custom-bg-red-100 {
  background: var(--red-100);
}

.custom-border-red-500 {
  border-color: var(--red-500);
}

.custom-text-red-500 {
  color: var(--red-500);
}

.custom-bg-blue-100 {
  background: var(--blue-100);
}

.custom-border-blue-500 {
  border-color: var(--blue-500);
}

.custom-text-blue-500 {
  color: var(--blue-500);
}

.custom-bg-yellow-100 {
  background: var(--yellow-100);
}

.custom-border-yellow-500 {
  border-color: var(--yellow-500);
}

.custom-text-yellow-500 {
  color: var(--yellow-500);
}

.custom-bg-green-100 {
  background: var(--green-100);
}

.custom-border-green-500 {
  border-color: var(--green-500);
}

.custom-text-green-500 {
  color: var(--green-500);
}
</style>
