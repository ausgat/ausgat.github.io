function switchTheme() {
  var lightSwitch = document.getElementById("light-switch");

  if (lightSwitch.className === "left") {
    lightSwitch.className = "right";
    document.body.className = "dark";
  } else if (lightSwitch.className === "right") {
    lightSwitch.className = "left";
    document.body.className = "";
  }
}

window.onload = function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    var lightSwitch = document.getElementById("light-switch");
    document.body.className = "dark";
    lightSwitch.className = "right";
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      var lightSwitch = document.getElementById("light-switch");
      if (event.matches) {
        document.body.className = "dark";
        lightSwitch.className = "right";
      } else {
        document.body.className = "";
        lightSwitch.className = "left";
      }
    });
};
