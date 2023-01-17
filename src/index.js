// Load all HTML content

import { loadPage } from "./loadPage";
import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";
import { loadImages } from "./loadImages";

// Find all links and related content by the custom attributes and apply switchListeners
const links = document.querySelectorAll("[data-tab-target]");
const content = document.querySelectorAll("[data-tab-content]");
links.forEach((node) => {
  addSwitchListener(node);
});

// Remove default event of form sending from the button in form
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
});

//Switch the tab to selected, make others inactive
function addSwitchListener(element) {
  element.addEventListener("click", (e) => {
    content.forEach((node) => {
      node.classList.add("inactive");
    }); // Make content inactive
    let tab = document.querySelector(
      `[data-tab-content= "${element.dataset.tabTarget}"]`
    ); //Select the right tab and make it active
    tab.classList.remove("inactive");
  });
  return;
}
