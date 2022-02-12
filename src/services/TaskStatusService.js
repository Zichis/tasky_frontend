import { httpClient } from "../config/axios";

export default {
  getTaskStatuses() {
    return httpClient.get("/task-statuses", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
};
