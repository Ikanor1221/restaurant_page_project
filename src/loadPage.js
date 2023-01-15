const loadPage = (() => {

  const contentElement = document.querySelector("#content");

  const headerElement = document.createElement("header");

  headerElement.innerHTML = `
  <h1>Food-for-People</h1>
  <ul class="links">
    <li id="home">Home</li>
    <li id="menu">Menu</li>
    <li id="contact">Contact us</li>
  </ul>`

  const tabsElement = document.createElement("div");
  tabsElement.classList.add("tabs");
  tabsElement.setAttribute("id", "tabs");

  contentElement.appendChild(headerElement);
  contentElement.appendChild(tabsElement);
})();

export { loadPage };

