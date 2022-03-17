const clockTitle = document.querySelector(".js-clock");
function christmas() {
  const date = new Date();
  const dateChrist = new Date("2022-12-25");
  const left = dateChrist - date;
  const days = String(Math.floor(left / (1000 * 60 * 60 * 24))).padStart(
    3,
    "0"
  );
  const hours = String(Math.floor((left / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const mins = String(Math.floor((left / (1000 * 60)) % 60)).padStart(2, "0");
  const secs = String(Math.floor((left / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
}
christmas();
setInterval(christmas, 1000);
