<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-2 md:p-5">
    <div
      class="relative bg-white p-3 h-44 rounded border-t-4"
      :class="borderColor(task.color)"
    >
      <h3
        class="p-2 rounded inline-block text-sm"
        :class="[categoryTextColor(task.color), categoryBgColor(task.color)]"
      >
        {{ task.category }}
      </h3>
      <p class="my-2 text-gray-500 h-12 overflow-hidden">
        {{ task.details | brief }}
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
        2
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
      return `border-${color}-500`;
    },
    categoryBgColor(color) {
      return `bg-${color}-100`;
    },
    categoryTextColor(color) {
      return `text-${color}-500`;
    },
  },
};
</script>
