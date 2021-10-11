import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faList,
  faUsers,
  faChartPie,
  faCalendarCheck,
  faSignOutAlt,
  faSearch,
  faEnvelope,
  faBell,
  faUser,
  faCommentAlt,
  faPaperclip,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faList,
  faUsers,
  faChartPie,
  faCalendarCheck,
  faSignOutAlt,
  faSearch,
  faEnvelope,
  faBell,
  faUser,
  faCommentAlt,
  faPaperclip,
  faCheckCircle
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
