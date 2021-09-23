// Selecting Elements
const clock = document.querySelector(".clock");

// Get configuration options
const config = [
  "en-GB",
  {
    second: "numeric",
    minute: "numeric",
    hour: "2-digit",
    hourCycle: "h12",
  },
];

// Function to display clock
const displayClockElement = (element, config) => {
  setInterval(() => {
    let time = new Intl.DateTimeFormat(...config).format(new Date());
    element.textContent = time;
  }, 1000);
};

// Update the UI
displayClockElement(clock, config);
