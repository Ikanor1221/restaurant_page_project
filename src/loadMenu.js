const loadMenu = (() => {

    const tabsElement = document.querySelector("#tabs");
  
    const menuElement = document.createElement("div");
    menuElement.setAttribute("id", "menu_tab")
    menuElement.classList.add("tab_main")
    menuElement.classList.add("inactive")
  
    menuElement.innerHTML = `
    <div class="menu_header_container">
      <h3 class="tab_header menu_header">Menu</h3>
      <img
        src="https://sultanbadri.github.io/restaurant-page/images/chef.png"
        alt="Chef image"
      />
    </div>
    <div class="menu_grid">
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>
            Very delicious item, purchase it please! Take itit easy,Take
            it easy,Take it easy,Take it easy,Take it easy,Take it
            easy,Take it easy,Take it easy,Take it easy,Take it easy,Take
            it easy,
          </p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
      <div class="item">
        <img
          src="https://sultanbadri.github.io/restaurant-page/images/hamburger.png"
          alt="Item 1"
        />
        <div class="description">
          <h4>Human Food 1</h4>
          <p>Very delicious item, purchase it please!</p>
        </div>
      </div>
    </div>
    `
  
    tabsElement.appendChild(menuElement);
  })();
  
  export { loadMenu };