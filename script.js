// Show real-time date & clock
function updateDateTime() {
  const now = new Date();

  const dateStr = now.toLocaleDateString("en-US", { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).replace(/,/g, "");

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

// Countdown starting from 89 minutes
let remaining = 89; // minutes

function updateCountdown() {
  if (remaining > 0) {
    document.getElementById("countdown").textContent = 
      `This pass expires after ${remaining} minutes`;
    remaining--;
  } else {
    document.getElementById("countdown").textContent = "Pass expired";
  }
}

setInterval(updateCountdown, 60 * 1000); // update every minute
updateCountdown();
