//Feature #1
let now = new Date();
console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = String(now.getHours()).padStart(2, "0");
let currentMinute = String(now.getMinutes()).padStart(2, "0");
let date = `${currentDay}, ${currentHour}:${currentMinute}`;

let h3 = document.querySelector("h3");
h3.innerHTML = date;

//Feature #2
let searchInput = document.querySelector("#query");

function showCity(event) {
  event.preventDefault();
  console.log("Searchinput");
  console.log(searchInput.value);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  // if (searchInput.value) {
  //   alert(`${searchInput.value}`);
  // }
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", showCity);

// Week 5 homework
let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";

function showTemperature(responce) {
  let CurrentTemperature = Math.round(responce.data.main.temp);
  console.log(responce);
  console.log(CurrentTemperature);

  let strong = document.querySelector("strong");
  strong.innerHTML = `${CurrentTemperature}°C`;
}
