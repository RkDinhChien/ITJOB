// Minimal interactive behaviors for ITJOB homepage
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Header actions (placeholders)
    document.querySelectorAll(".btn-outline, .btn-primary").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Example: open modal / navigate
            if (btn.textContent.trim().toLowerCase() === "post a job") {
                alert("Post a Job clicked (simulate)");
            }
        });
    });

    // Search form
    const searchBtn = document.querySelector(".search-form .btn-accent");
    if (searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showNotification("Searching jobs (simulated)", "info");
        });
    }

    // Job card actions
    document.querySelectorAll(".job-card").forEach((card) => {
        card.querySelectorAll("button").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const isApply = btn.textContent.toLowerCase().includes("apply");
                showNotification(
                    isApply
                        ? "Application sent (simulated)"
                        : "Saved to favorites",
                    "success"
                );
            });
        });
    });
});

function showNotification(message, type = "info") {
    const el = document.createElement("div");
    el.className = `notification ${type}`;
    el.textContent = message;
    Object.assign(el.style, {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "8px",
        zIndex: 9999,
    });
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
}
