export default function() {
  let alertAction = localStorage.getItem("tasky_alert_action");
  let alertMessage = localStorage.getItem("tasky_alert_message");
  let alertStatus = localStorage.getItem("tasky_alert_status");

  return [alertAction, alertMessage, alertStatus];
}
