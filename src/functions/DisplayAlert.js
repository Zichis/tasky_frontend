import GetAlert from "./GetAlert";
import DeleteAlert from "./DeleteAlert";

export default function(swal) {
  let [alertAction, alertMessage, alertStatus] = GetAlert();

  if (alertMessage !== null) {
    swal(alertAction, alertMessage, alertStatus);
    DeleteAlert();
  }
}
