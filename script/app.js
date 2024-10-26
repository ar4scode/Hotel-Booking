import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

document.querySelector("#check-in-date").addEventListener("change", () => {
  const selectedDay = dayjs(
    document.querySelector("#check-in-date").value
  ).format("D MMMM, YYYY");

  document.querySelector(".check-in-output").textContent = selectedDay;
});

document.querySelector("#check-out-date").addEventListener("change", () => {
  const selectedDay = dayjs(
    document.querySelector("#check-out-date").value
  ).format("D MMMM, YYYY");

  document.querySelector(".check-out-output").textContent = selectedDay;
});
