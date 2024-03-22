const { log,debug,table } = console
const $ = document
/**
 * 
 * @param {HTMLDivElement} div 
 */

function changeLanguageHome(div) {
  const langSelected = langs[div.id];
  const covers = $.querySelectorAll("div.cover");
  const cover = div.querySelector("div.cover");
  $.querySelector("p#home-text").textContent = langSelected["home"]["text"];
  $.querySelector("h1#title").textContent = langSelected["home"]["title"];
  const navs = $.querySelectorAll("a.nav")

  covers.forEach(cv => {
    cv.classList.contains("hidden")? null: cv.classList.add("hidden");
  })
  navs.forEach(nav => {
    nav.textContent = langSelected["linkNames"][nav.id]
  })
  cover.classList.remove("hidden");
}

/**
 * 
 * @param {HTMLDivElement} div 
 */

function changeLanguageServices(div) {
  const langSelected = langs[div.id];
  const covers = $.querySelectorAll("div.cover");
  const cover = div.querySelector("div.cover");
  const navs = $.querySelectorAll("a.nav");
  $.querySelector("h3#title").textContent = langSelected["services"]["title"] ;
  const list = $.querySelector("ul#service-list");

  while(list.firstChild) {
    list.removeChild(list.firstChild)
  }

  langSelected["services"]["services"].forEach(service => {
    const li = $.createElement("li")
    li.innerHTML = service
    list.appendChild(li)
  })
  covers.forEach(cv => {
    cv.classList.contains("hidden")? null: cv.classList.add("hidden");
  })
  navs.forEach(nav => {
    nav.textContent = langSelected["linkNames"][nav.id]
  })
  cover.classList.remove("hidden");
}
/**
 * 
 * @param {HTMLDivElement} div 
 */

function changeLanguageContact(div) {
  const langSelected = langs[div.id];
  const covers = $.querySelectorAll("div.cover");
  const cover = div.querySelector("div.cover");
  const navs = $.querySelectorAll("a.nav");
  const title = $.querySelector("h3#title");
  const text = $.querySelector("p#main-text");
  const tel = $.querySelector("span#tel");
  const social = $.querySelector("span#social-media");

  title.textContent = langSelected["contact"]["title"];
  text.textContent = langSelected["contact"]["text"];
  tel.textContent = langSelected["contact"]["tel"];
  social.textContent = langSelected["contact"]["socialMedia"];

  covers.forEach(cv => {
    cv.classList.contains("hidden")? null: cv.classList.add("hidden");
  })
  navs.forEach(nav => {
    nav.textContent = langSelected["linkNames"][nav.id]
  })
  cover.classList.remove("hidden");
}