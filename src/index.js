import { loadPage } from "./loadPage";
import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";

const homeElement = document.querySelector("#home");
const menuElement = document.querySelector("#menu");
const contactElement = document.querySelector("#contact");

const homeTab = document.querySelector("#home_tab");
const menuTab = document.querySelector("#menu_tab");
const contactTab = document.querySelector("#contact_tab");

function addSwitchListener(element) {
  element.addEventListener("click", (e) => {
    homeTab.classList.add("inactive");
    menuTab.classList.add("inactive");
    contactTab.classList.add("inactive");
    let tab = document.querySelector("#" + element.id + "_tab");
    tab.classList.remove("inactive");
  });

  return;
}

addSwitchListener(homeElement);
addSwitchListener(menuElement);
addSwitchListener(contactElement);

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
});
