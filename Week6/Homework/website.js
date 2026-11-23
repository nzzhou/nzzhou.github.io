document
  .getElementById("refreshTime")
  .addEventListener("click", function (event) {
    console.log("Time Updated");

    let currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
  });

document
    .getElementById("pageMode")
    .addEventListener("click", function (event) {
  document
  .getElementById("modeSelect").style.bottom = "50px";
});

document
    .getElementById("colorExit")
    .addEventListener("click", function (event) {
  document
  .getElementById("modeSelect").style.bottom = "-5000px";
});

document
    .getElementById("colorRed")
    .addEventListener("click", function (event) {
  document.body.style.backgroundColor = "lightcoral";
});
document
    .getElementById("colorGreen")
    .addEventListener("click", function (event) {
  document.body.style.backgroundColor = "lightgreen";
});
document
    .getElementById("colorWhite")
    .addEventListener("click", function (event) {
  document.body.style.backgroundColor = "white";
});
document
    .getElementById("colorYellow")
    .addEventListener("click", function (event) {
  document.body.style.backgroundColor = "lightyellow";
});