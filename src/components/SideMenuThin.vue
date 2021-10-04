<template>
  <div
    class="border-r w-14 bg-gray-800 text-center py-5"
    @click="hideAll($event)"
  >
    <a href="#" class="block text-white mb-20 hover:text-yellow-500">
      <font-awesome-icon icon="bars" />
    </a>
    <a href="#" class="block text-white mb-5 hover:text-yellow-500">
      <font-awesome-icon icon="list" />
    </a>
    <a href="#" class="block text-white mb-5 hover:text-yellow-500">
      <font-awesome-icon icon="users" />
    </a>
    <a href="#" class="block text-white mb-5 hover:text-yellow-500">
      <font-awesome-icon icon="chart-pie" />
    </a>
    <a href="#" class="block text-white mb-5 hover:text-yellow-500">
      <font-awesome-icon icon="calendar-check" />
    </a>
    <a href="#" class="block bg-red-600 text-white py-4 mb-5 hover:text-white">
      <font-awesome-icon icon="sign-out-alt" />
    </a>
  </div>
</template>
