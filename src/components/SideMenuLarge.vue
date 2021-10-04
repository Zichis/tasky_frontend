<template>
  <div
    class="hidden lg:block border-r w-64 bg-gray-200"
    @click="hideAll($event)"
  >
    <h2 class="text-center py-5 text-2xl font-semibold text-gray-700">
      My Tasks
    </h2>
    <div>
      <a href="#" class="flex justify-between items-center px-5 mb-7">
        <h4>All Tasks</h4>
        <div
          class="bg-blue-500 text-white text-xs font-light py-1 px-2 rounded-full"
        >
          99+
        </div>
      </a>
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
