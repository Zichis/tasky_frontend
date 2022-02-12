import { httpClient } from "../config/axios";

export default {
  getMyOrganizations() {
    return httpClient.get("/my-organizations", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
};
