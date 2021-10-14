export default function(action, message, status) {
  localStorage.setItem("tasky_alert_action", action);
  localStorage.setItem("tasky_alert_message", message);
  localStorage.setItem("tasky_alert_status", status);
}
