import { httpClient } from "../config/axios";

export default {
  getTaskPriorities() {
    return httpClient.get("/task-priorities", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
};
