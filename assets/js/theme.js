const determineThemeSetting = () => localStorage.getItem("theme") || "system";

const determineComputedTheme = () => {
  const setting = determineThemeSetting();
  if (setting !== "system") return setting;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setHighlightTheme = (theme) => {
  const light = document.getElementById("highlight_theme_light");
  const dark = document.getElementById("highlight_theme_dark");

  if (!light || !dark) return;

  light.media = theme === "dark" ? "none" : "";
  dark.media = theme === "dark" ? "" : "none";
};

const applyTheme = () => {
  const theme = determineComputedTheme();
  document.documentElement.setAttribute("data-theme-setting", determineThemeSetting());
  document.documentElement.setAttribute("data-theme", theme);
  setHighlightTheme(theme);
};

const setThemeSetting = (themeSetting) => {
  localStorage.setItem("theme", themeSetting);
  applyTheme();
};

const toggleThemeSetting = () => {
  const current = determineThemeSetting();
  if (current === "system") {
    setThemeSetting("light");
  } else if (current === "light") {
    setThemeSetting("dark");
  } else {
    setThemeSetting("system");
  }
};

const initTheme = () => {
  applyTheme();
};

window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("light-toggle");
  if (toggle) toggle.addEventListener("click", toggleThemeSetting);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (determineThemeSetting() === "system") applyTheme();
  });
});
