// ui.js - UI helpers (modals, notifications)
function showNotification(message, type = "info") {
  const el = document.createElement("div");
  el.className = "notification";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function smoothScrollTo(selector) {
  const target = document.querySelector(selector);
  if (target) target.scrollIntoView({ behavior: "smooth" });
}

window.showNotification = showNotification;
window.smoothScrollTo = smoothScrollTo;
