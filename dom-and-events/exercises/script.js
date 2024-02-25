//javascript document
function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });

  missionAbort.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
  });

  missionAbort.addEventListener("click", (event) => {
    paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
  });

  window.addEventListener("load", init);
}
