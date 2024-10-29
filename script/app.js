import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { hotels } from "./data";

// Set today's date as the minimum date for check-in and check-out inputs
const today = new Date().toISOString().split("T")[0];
document.getElementById("check-in-date").setAttribute("min", today);
document.getElementById("check-out-date").setAttribute("min", today);

// Format the selected check-in date
document.querySelector("#check-in-date").addEventListener("change", () => {
  const selectedDay = dayjs(
    document.querySelector("#check-in-date").value
  ).format("D MMMM, YYYY");

  document.querySelector(".check-in-output").textContent = selectedDay;
});

// Format the selected check-out date
document.querySelector("#check-out-date").addEventListener("change", () => {
  const selectedDay = dayjs(
    document.querySelector("#check-out-date").value
  ).format("D MMMM, YYYY");

  document.querySelector(".check-out-output").textContent = selectedDay;
});

const photosHTML = "";

hotels.forEach((hotel) => {
  `<div class="top-pic">
        <img src="../images/royal-horsegaurd-building.jpg" alt="royal horsegaurd building">

        <div class="tooltip">
          <p class="hotel-name">The Royal HorseGuard</p>
          <div class="location">
            <i class="fa-solid fa-location-dot" style="color: #ffffff;"></i>
            London, United Kingdom
          </div>
        </div>
        <div class="btn-tooltip">
          <i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>
        </div>
      </div>

      <div class="bottom-images">
        <img src="../images/royal-horsegaurd-familyroom.jpg" alt="royal horsegaurd familyroom">
        <img src="../images/royal-horsegaurd-hallway.jpg" alt="royal horsegaurd hallway">
        <img src="../images/royal-horseguard-doubleroom.jpg" alt="royal horseguard doubleroom">
      </div>`;
});
