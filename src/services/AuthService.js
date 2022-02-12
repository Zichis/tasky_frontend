import { httpClient } from "../config/axios";

export default {
  login(loginForm) {
    return httpClient.post("/login", loginForm, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("myapp_token"),
      },
    });
  },
  logout() {
    return httpClient.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("myapp_token"),
        },
      }
    );
  },
};
