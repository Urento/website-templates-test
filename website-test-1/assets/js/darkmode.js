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

const cssFilePath = "assets/css/";

const hasDarkMode = () => {
  if (darkMode() !== null || darkMode() === "true") return true;
  else return false;
};

/*console.log("hasDarkMode function: " + hasDarkMode());
console.log("darkMode:" + darkMode());
*/
if (hasDarkMode()) {
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${cssFilePath}/dark-mode.css`;
  darkModeButton.checked = true;
  console.log("darkmode from page load");
} else {
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${cssFilePath}/style.css`;
  console.log("no darkmode from page load");
}

const changeColorMode = () => {
  if (!hasDarkMode()) {
    console.log("enabled");
    document.querySelector(
      "link[rel='stylesheet']"
    ).href = `${cssFilePath}/dark-mode.css`;
    darkModeButton.checked = true;
    localStorage.setItem("darkMode", true);
  } else {
    console.log("disabled");
  }
};
