const darkModeButton = document.getElementById("dark-mode-button");
const darkMode = () => {
  if (
    localStorage.getItem("darkMode") ||
    localStorage.getItem("darkMode") !== null
  )
    return true;
  else return false;
};
//add this later to auto use account seetings:
//window.matchMedia("(prefers-color-scheme: dark)").matches;

const cssFilePath = "assets/css/";
const darkCSSFilePath = "assets/css/dark-mode/";

const hasDarkMode = () => {
  if (darkMode() === true || darkMode() === "true") return true;
  else return false;
};

/*console.log("hasDarkMode function: " + hasDarkMode());
console.log("darkMode:" + darkMode());
*/
if (hasDarkMode()) {
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${darkCSSFilePath}/dark-mode.css`;
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${darkCSSFilePath}/navbar-dark.css`;
  darkModeButton.checked = true;
  console.log("darkmode from page load");
} else {
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${cssFilePath}/style.css`;
  document.querySelector(
    "link[rel='stylesheet']"
  ).href = `${cssFilePath}/navbar.css`;
  console.log("no darkmode from page load");
}

const changeColorMode = () => {
  console.log("dm before change:" + hasDarkMode());
  if (!hasDarkMode()) {
    console.log("enabled");
    //update default stylesheet
    document.querySelector(
      "link[rel='stylesheet']"
    ).href = `${darkCSSFilePath}/dark-mode.css`;
    //update navbar stylesheet
    document.querySelector(
      "link[rel='stylesheet']"
    ).href = `${darkCSSFilePath}/navbar-dark.css`;
    darkModeButton.checked = true;
    localStorage.setItem("darkMode", true);
  } else {
    console.log("disabled");
    document.querySelector(
      "link[rel='stylesheet']"
    ).href = `${cssFilePath}/style.css`;
    darkModeButton.checked = false;
    localStorage.removeItem("darkMode");
  }
};
