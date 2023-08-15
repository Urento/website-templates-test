const darkModeButton = document.querySelector("#dark-mode-button");
const darkMode = localStorage.getItem("darkMode");

const hasDarkMode = () => {
  const deviceSettings = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (darkMode === null || darkMode === "false" || !deviceSettings)
    return false;
  else return true;
};

if (hasDarkMode()) {
  document.querySelector("link[rel='stylesheet']").href = "dark-mode.css";
  darkModeButton.checked = true;
} else {
  document.querySelector("link[rel='stylesheet']").href = "style.css";
}

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", true);
};
