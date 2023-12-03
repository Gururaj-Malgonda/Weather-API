const fetchBtn = document.getElementById("fetch-btn");
const form = document.getElementById("landingForm");
const app = document.querySelector(".app");
const latitudeButton = document.getElementById("latitudebox");
const longitudeButton = document.getElementById("longbox");
const iframe = document.getElementById("iframe");


form.addEventListener("submit", (event) => {
  event.stopPropagation();
  event.preventDefault();
  form.style.display = "none";
  app.style.display = "flex";
  getLocation();
});