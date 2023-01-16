import mainIconUrl from "./assets/main_icon.png";
import mainBackgroundUrl from "./assets/main_background.jpg";
import hamburgerUrl from "./assets/hamburger.png";
import chefUrl from "./assets/chef.png";

const loadImages = (() => {
    // Set icon
    const mainIcon = document.createElement('link');
    mainIcon.rel = "icon";
    mainIcon.type = "image/x-icon";
    mainIcon.href = mainIconUrl;
    document.querySelector("head").appendChild(mainIcon);

    // Set main background
    document.querySelector("#home_tab").setAttribute("style", `background-image: url(${mainBackgroundUrl})`);

    // Set items' pictures
    document.querySelector("#hamburger_img").setAttribute("src", hamburgerUrl) 
    
    document.querySelector("#chef_img").setAttribute("src", chefUrl) 
    
    
  })();
  
  export { loadImages };