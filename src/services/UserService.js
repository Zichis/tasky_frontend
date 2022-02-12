import { httpClient } from "../config/axios";

export default {
  getCurrentUser() {
    return httpClient.get("/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
};
