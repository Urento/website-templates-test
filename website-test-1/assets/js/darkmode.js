const darkModeButton = document.getElementById("dark-mode-button");
const darkMode = () => {
  if (
    localStorage.getItem("darkMode") ||
    localStorage.getItem("darkMode") !== null
  )
    return true;
  else return false;
};
//add this later: window.matchMedia("(prefers-color-scheme: dark)").matches;

const hasDarkMode = () => {
  if (darkMode === null || darkMode === "false") return false;
  else return true;
};

console.log("hasDarkMode function: " + hasDarkMode());

if (hasDarkMode()) {
  document.querySelector("link[rel='stylesheet']").href =
    "assets/css/dark-mode.css";
  darkModeButton.checked = true;
  console.log("darkmode from function");
} else {
  document.querySelector("link[rel='stylesheet']").href =
    "assets/css/style.css";
  console.log("no darkmode from function");
}

const changeColorMode = () => {
  if (!hasDarkMode()) {
    console.log("enabled");
    document.querySelector("link[rel='stylesheet']").href = "dark-mode.css";
    darkModeButton.checked = true;
    localStorage.setItem("darkMode", true);
  } else {
    console.log("disabled");
  }
};
