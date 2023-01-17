// Load Menu tab

const loadMenu = (() => {
  const tabsElement = document.querySelector("#tabs");

  const menuElement = document.createElement("div");
  menuElement.setAttribute("id", "menu_tab");
  menuElement.setAttribute("data-tab-content", "#menu_tab");
  menuElement.classList.add("tab_main");
  menuElement.classList.add("inactive");

  menuElement.innerHTML = `
    <div class="menu_header_container">
      <h3 class="tab_header menu_header">Menu</h3>
      <img
        id="chef_img"
        src="https://sultanbadri.github.io/restaurant-page/images/chef.png"
        alt="Chef image"
      />
    </div>
    <div class="menu_grid">
      <div class="item">
        <img 
          id="item1"
          src=""
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img 
          id="item2"
          src=""
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img 
          id="item3"
          src=""
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img 
          id="item4"
          src=""
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img 
          id="item5"
          src=""
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
    </div>
    `;

  tabsElement.appendChild(menuElement);
})();

export { loadMenu };
