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

// Component loader: fetch component HTML and inject into placeholders
async function loadComponent(path, selector) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    const html = await res.text();
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function loadComponents() {
  const mapping = [
    { path: "components/navigation.html", selector: "#component-navigation" },
    { path: "components/banner.html", selector: "#component-banner" },
    { path: "components/categories.html", selector: "#component-categories" },
    { path: "components/how.html", selector: "#component-how" },
    { path: "components/jobs.html", selector: "#component-jobs" },
    { path: "components/testimonials.html", selector: "#component-testimonials" },
    { path: "components/articles.html", selector: "#component-articles" },
    { path: "components/cta.html", selector: "#component-cta" },
    { path: "components/footer.html", selector: "#component-footer" },
  ];

  const results = await Promise.all(mapping.map((m) => loadComponent(m.path, m.selector)));
  const allOk = results.every(Boolean);
  const ev = new CustomEvent("componentsLoaded", { detail: { success: allOk } });
  window.dispatchEvent(ev);
  return allOk;
}

window.loadComponents = loadComponents;
