function setDarkTheme() {
  var lightSwitch = document.getElementById("light-switch");
  lightSwitch.className = "right";
  document.body.className = "dark";
}

function setLightTheme() {
  var lightSwitch = document.getElementById("light-switch");
  lightSwitch.className = "left";
  document.body.className = "";
}

function switchTheme() {
  var lightSwitch = document.getElementById("light-switch");
  if (lightSwitch.className === "left") {
    setDarkTheme();
    document.cookie = "dark";
  } else if (lightSwitch.className === "right") {
    setLightTheme();
    document.cookie = "light";
  }
}

window.onload = function () {
  if (document.cookie === "dark") {
    setDarkTheme();
  } else if (document.cookie === "light") {
    setLightTheme();
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkTheme();
    }
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      var lightSwitch = document.getElementById("light-switch");
      if (event.matches) {
        setDarkTheme();
      } else {
        setLightTheme();
      }
    });
};
