export default function() {
  let alertAction = localStorage.getItem("untasky_alert_action");
  let alertMessage = localStorage.getItem("untasky_alert_message");
  let alertStatus = localStorage.getItem("untasky_alert_status");

  return [alertAction, alertMessage, alertStatus];
}
