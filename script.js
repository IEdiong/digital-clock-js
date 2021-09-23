// Selecting Elements
const clock = document.querySelector(".clock");

// Get configuration options
const locale = "en-GB";
const options = {
  second: "numeric",
  minute: "numeric",
  hour: "2-digit",
  hourCycle: "h12",
};

// Update the UI
setInterval(() => {
  // Test code starts here
  // This portion of code is for testing purposes only
  // let consoleTime = new Intl.DateTimeFormat("en-GB", {
  //   second: "numeric",
  //   minute: "numeric",
  //   hour: "2-digit",
  //   hour12: true,
  //   hourCycle: "h12",
  // }).format(new Date());
  // console.log(consoleTime);
  // test code ends here

  let time = new Intl.DateTimeFormat(locale, options).format(new Date());
  clock.textContent = time;
}, 1000);
