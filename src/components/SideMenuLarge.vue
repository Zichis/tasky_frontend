<template>
  <div class="border-r w-64 bg-gray-200 absolute h-screen left-14 z-10">
    <h2 class="text-center py-5 text-2xl font-semibold text-gray-700">
      My Tasks
    </h2>
    <div class="text-center py-5">
      <router-link
        :to="{ name: 'CreateTask' }"
        class="bg-gray-500 shadow-md px-3 py-2 rounded-full font-light text-gray-200 hover:bg-gray-600 hover:text-white transition-colors"
        >Add Task</router-link
      >
    </div>
    <div>
      <router-link
        :to="{ name: 'Tasks' }"
        class="flex justify-between items-center px-5 mb-7"
      >
        <h4>All Tasks</h4>
        <div
          class="bg-blue-500 text-white text-xs font-light py-1 px-2 rounded-full"
        >
          99+
        </div>
      </router-link>
      <a
        href="#"
        class="flex justify-between items-center px-5 mb-7 text-gray-700"
      >
        <h4>Management</h4>
        <div
          class="bg-red-500 text-white text-xs font-light py-1 px-2 rounded-full"
        >
          17
        </div>
      </a>
      <a
        href="#"
        class="flex justify-between items-center px-5 mb-7 text-gray-700"
      >
        <h4>Sales</h4>
        <div
          class="bg-yellow-500 text-white text-xs font-light py-1 px-2 rounded-full"
        >
          17
        </div>
      </a>
      <a
        href="#"
        class="flex justify-between items-center px-5 mb-7 text-gray-700"
      >
        <h4>Operations</h4>
        <div
          class="bg-green-500 text-white text-xs font-light py-1 px-2 rounded-full"
        >
          17
        </div>
      </a>
    </div>
  </div>
</template>
