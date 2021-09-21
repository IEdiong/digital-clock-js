// Selecting Elements
const clock = document.querySelector(".clock");

// Get configuration options
const locale = "en-GB";
const options = {
  second: "numeric",
  minute: "numeric",
  hour: "numeric",
};

// Update the UI
setInterval(() => {
  let time = new Intl.DateTimeFormat(locale, options).format(new Date());
  // console.log(time);
  clock.textContent = time;
}, 1000);
