import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

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
