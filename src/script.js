const { log,debug,table } = console

/**
 * 
 * @param {HTMLDivElement} div 
 */

function changeLanguageHome(div) {
  const langSelected = langs[div.id];
  const covers = document.querySelectorAll("div.cover");
  const cover = div.querySelector("div.cover");
  const homeText = document.querySelector("p#home-text");
  const navs = document.querySelectorAll("a.nav")

  homeText.textContent = langSelected["home"];
  covers.forEach(cv => {
    cv.classList.contains("hidden")? null: cv.classList.add("hidden");
  })
  navs.forEach(nav => {
    nav.textContent = langSelected["linkNames"][nav.id]
  })
  cover.classList.remove("hidden");
}