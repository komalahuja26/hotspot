// Show real-time date & clock
function updateDateTime() {
  const now = new Date();

  // Date (e.g., Thu Oct 2 2025) without commas
  const dateStr = now.toLocaleDateString("en-US", { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).replace(/,/g, "");  // remove commas

  // Time (e.g., 08:25:45 PM)
  const timeStr = now.toLocaleTimeString("en-US", { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  document.getElementById("dateTime").textContent = dateStr;
  document.getElementById("time").textContent = timeStr;
}
setInterval(updateDateTime, 1000);
updateDateTime();


// Countdown (90 minutes from start)
let remaining = 90 * 60; // 90 mins in seconds
function updateCountdown() {
  let minutes = Math.floor(remaining / 60);
  let seconds = remaining % 60;

  if (remaining > 0) {
    document.getElementById("countdown").textContent = 
      `This pass expires after ${minutes}m ${seconds}s`;
    remaining--;
  } else {
    document.getElementById("countdown").textContent = "Pass expired";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();
