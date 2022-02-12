import { httpClient } from "../config/axios";

export default {
  getTasks() {
    return httpClient.get("/tasks", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
};
