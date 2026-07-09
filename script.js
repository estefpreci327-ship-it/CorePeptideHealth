function setLanguage(language) {
  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });

  localStorage.setItem("language", language);
}

window.onload = function () {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);
};
