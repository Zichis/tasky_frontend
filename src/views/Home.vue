<template>
  <div class="min-h-screen flex">
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
      <a
        href="#"
        class="block bg-red-600 text-white py-4 mb-5 hover:text-white"
      >
        <font-awesome-icon icon="sign-out-alt" />
      </a>
    </div>
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
            class="bg-blue-500 text-white text-sm font-light py-1 px-3 rounded-full"
          >
            122
          </div>
        </a>
        <a
          href="#"
          class="flex justify-between items-center px-5 mb-7 text-gray-700"
        >
          <h4>Management</h4>
          <div
            class="bg-red-500 text-white text-sm font-light py-1 px-3 rounded-full"
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
            class="bg-yellow-500 text-white text-sm font-light py-1 px-3 rounded-full"
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
            class="bg-green-500 text-white text-sm font-light py-1 px-3 rounded-full"
          >
            17
          </div>
        </a>
      </div>
    </div>
    <div class="flex-1 p-5 bg-gray-100">
      <div class="flex">
        <div class="w-1/3 flex items-center">
          <font-awesome-icon
            icon="search"
            class="text-2xl text-gray-400"
          ></font-awesome-icon>
          <input
            type="text"
            class="h-16 w-full p-5 bg-gray-100 text-2xl font-extralight focus:outline-none"
            placeholder="Search tasks"
          />
        </div>
        <div class="flex-1 flex justify-end items-center">
          <button
            id="notificationToggle"
            @click="toggleNotification($event)"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md mr-5"
          >
            <font-awesome-icon
              icon="bell"
              class="text-gray-400"
            ></font-awesome-icon>
            <div
              class="bg-red-400 w-2 h-2 rounded-full absolute top-0 right-0"
            ></div>
            <div
              class="absolute bg-white w-64 z-10 -bottom-56 right-0 rounded p-3 shadow-md"
              :class="{ hidden: notificationHidden }"
            >
              <h3>Notifications</h3>
              <hr class="my-2" />
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Create</a
              >
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Update</a
              >
              <a
                href="#"
                class="block py-2 text-left text-gray-500 hover:text-gray-800"
                >Delete</a
              >
              <a href="#" class="block text-center text-blue-400">More</a>
            </div>
          </button>
          <a
            href="#"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md mr-5"
          >
            <font-awesome-icon
              icon="envelope"
              class="text-gray-400"
            ></font-awesome-icon>
            <div
              class="bg-red-400 w-2 h-2 rounded-full absolute top-0 right-0"
            ></div>
          </a>
          <a
            href="#"
            class="relative flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 shadow-md"
          >
            <font-awesome-icon
              icon="user"
              class="text-gray-400"
            ></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="py-5" @click="hideAll($event)">
        <h2 class="text-5xl text-gray-600">
          <span class="font-extralight">Welcome back, </span><span>Ezichi</span>
        </h2>
        <hr class="my-5" />
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 lg:w-1/3 p-5">
            <div
              class="relative bg-white p-3 h-44 rounded border-t-4 border-blue-500 shadow-md"
            >
              <h3 class="bg-blue-200 text-blue-500 p-2 rounded inline-block">
                Management
              </h3>
              <p class="my-2 text-gray-500">
                Finalize the sales plan for new product marketing...
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      notificationHidden: true,
    };
  },
  methods: {
    toggleNotification() {
      this.notificationHidden = !this.notificationHidden;
    },
    hideAll() {
      this.notificationHidden = true;
    },
  },
};
</script>
