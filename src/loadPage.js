// Load header and container for tabs

const loadPage = (() => {
  const contentElement = document.querySelector("#content");

  const headerElement = document.createElement("header");
  headerElement.innerHTML = `
  <h1>Food-for-People</h1>
  <ul class="links">
    <li><a id="home" data-tab-target="#home_tab" href="#">Home</a></li>
    <li><a id="menu" data-tab-target="#menu_tab" href="#">Menu</a></li>
    <li><a id="contact" data-tab-target="#contact_tab" href="#">Contact us</a></li>
  </ul>`;

  const tabsElement = document.createElement("div");
  tabsElement.classList.add("tabs");
  tabsElement.setAttribute("id", "tabs");

  contentElement.appendChild(headerElement);
  contentElement.appendChild(tabsElement);
})();

export { loadPage };
