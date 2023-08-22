function setDarkTheme() {
  var lightSwitch = document.getElementById("light-switch");
  lightSwitch.className = "right";
  document.body.className = "dark";
  setModeCookie("dark");
}

function setLightTheme() {
  var lightSwitch = document.getElementById("light-switch");
  lightSwitch.className = "left";
  document.body.className = "";
  setModeCookie("light");
}

function switchTheme() {
  var subtitle = document.getElementsByClassName("subtitle")[0];
  var lightSwitch = document.getElementById("light-switch");
  if (lightSwitch.className === "left") {
    setDarkTheme();
    subtitle.textContent = "ah much better";
  } else if (lightSwitch.className === "right") {
    setLightTheme();
    subtitle.textContent = "take breaks to avoid eye strain";
  }
}

function setModeCookie(value) {
  document.cookie = "dark_mode=" + value + "; path=/";
  console.log(document.cookie);
}

function getModeCookie() {
  var cookieValue = document.cookie
    .split(';')
    .find((row) => row.startsWith("dark_mode="))
    ?.split("=")[1];

  return cookieValue;
}

window.onload = function () {
  var mode = getModeCookie();

  if (mode === "dark") {
    setDarkTheme();
  } else if (mode === "light") {
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
