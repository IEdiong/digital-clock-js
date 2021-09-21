// Selecting Elements
const clock = document.querySelector(".clock");

const locale = navigator.language;
const options = {
  second: "numeric",
  minute: "numeric",
  hour: "numeric",
};

setInterval(() => {
  console.log(new Intl.DateTimeFormat(locale, options).format(new Date()));
}, 1000);
