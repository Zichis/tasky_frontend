export default function(action, message, status) {
  localStorage.setItem("untasky_alert_action", action);
  localStorage.setItem("untasky_alert_message", message);
  localStorage.setItem("untasky_alert_status", status);
}
