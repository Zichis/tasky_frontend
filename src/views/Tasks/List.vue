<template>
  <div>
    <views-links></views-links>
    <div>
      <div
        class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Tasks</h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <!--<th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>-->
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Title</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Priority</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Status</div>
                  </th>
                  <th class="p-2 whitespace-nowrap"></th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="task in tasks" :key="task.id">
                  <!--<td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width="40"
                          height="40"
                          alt="Alex Shatov"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Alex Shatov
                      </div>
                    </div>
                  </td>-->
                  <td class="p-2 whitespace-nowrap">
                    <router-link
                      :to="{ name: 'ShowTask', params: { id: task.id } }"
                      class="text-left"
                      >{{ task.title }}</router-link
                    >
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      <h3 class="inline-block text-sm">
                        {{ task.priority.name }}
                      </h3>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-center">
                      <div
                        class="inline-block text-white text-xs font-light rounded px-2 py-1"
                        :style="{ background: statusColor(task.status.name) }"
                      >
                        {{ task.status.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-center">
                      <router-link
                        :to="{ name: 'EditTask', params: { id: task.id } }"
                        class="text-gray-400 hover:text-blue-400 mr-2"
                      >
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                      </router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewsLinks from "@/components/ViewsLinks";
import { mapGetters } from "vuex";

export default {
  components: { ViewsLinks },
  computed: {
    ...mapGetters(["tasks"]),
  },
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
