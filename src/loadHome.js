// Load Home tab

const loadHome = (() => {
  const tabsElement = document.querySelector("#tabs");

  const homeElement = document.createElement("div");
  homeElement.setAttribute("id", "home_tab");
  homeElement.setAttribute("data-tab-content", "#home_tab");
  homeElement.classList.add("tab_main");

  homeElement.innerHTML = `
    <div class="hero">
      <h2>The best people food in the area!</h2>
      <p>Cheap and good for all types of people!</p>
      <a href="#" data-tab-target="#menu_tab" class="order_now">Order now</a>
    </div>
    <div class="info dark_bg">
      <div class="infoRow location">
        <span class="icon material-symbols-outlined">location_on</span>
        <p>
          1100 Fillmore St
          <br />
          San Francisco, CA 94115
      </p>
      </div>
      <div class="infoRow hours">
        <span class="icon material-symbols-outlined">schedule</span>
        <p>
          <span class="text">Mon-Thurs:</span> 8am-8pm
          <br />
          <span class="text">Fri-Sun:</span> 8am-11pm
        </p>
      </div>
    </div>
    `;

  tabsElement.appendChild(homeElement);
})();

export { loadHome };
