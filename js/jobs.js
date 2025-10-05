// jobs.js - job card actions and simulated data
const jobData = [];

function saveJob(id) {
  // simulate saving
  showNotification("Job saved");
}

function applyJob(id) {
  // simulate apply
  showNotification("Applied to job (simulated)");
}

window.saveJob = saveJob;
window.applyJob = applyJob;
