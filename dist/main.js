(()=>{"use strict";var n={};n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const n=document.querySelector("#content"),e=document.createElement("header");e.innerHTML='\n  <h1>Food-for-People</h1>\n  <ul class="links">\n    <li><a id="home" data-tab-target="#home_tab" href="#">Home</a></li>\n    <li><a id="menu" data-tab-target="#menu_tab" href="#">Menu</a></li>\n    <li><a id="contact" data-tab-target="#contact_tab" href="#">Contact us</a></li>\n  </ul>';const t=document.createElement("div");t.classList.add("tabs"),t.setAttribute("id","tabs"),n.appendChild(e),n.appendChild(t)})(),(()=>{const n=document.querySelector("#tabs"),e=document.createElement("div");e.setAttribute("id","home_tab"),e.setAttribute("data-tab-content","#home_tab"),e.classList.add("tab_main"),e.innerHTML='\n    <div class="hero">\n      <h2>The best people food in the area!</h2>\n      <p>Cheap and good for all types of people!</p>\n      <a href="#" data-tab-target="#menu_tab" class="order_now">Order now</a>\n    </div>\n    <div class="info dark_bg">\n      <div class="infoRow location">\n        <span class="icon material-symbols-outlined">location_on</span>\n        <p>\n          1100 Fillmore St\n          <br />\n          San Francisco, CA 94115\n      </p>\n      </div>\n      <div class="infoRow hours">\n        <span class="icon material-symbols-outlined">schedule</span>\n        <p>\n          <span class="text">Mon-Thurs:</span> 8am-8pm\n          <br />\n          <span class="text">Fri-Sun:</span> 8am-11pm\n        </p>\n      </div>\n    </div>\n    ',n.appendChild(e)})(),(()=>{const n=document.querySelector("#tabs"),e=document.createElement("div");e.setAttribute("id","menu_tab"),e.setAttribute("data-tab-content","#menu_tab"),e.classList.add("tab_main"),e.classList.add("inactive"),e.innerHTML='\n    <div class="menu_header_container">\n      <h3 class="tab_header menu_header">Menu</h3>\n      <img\n        id="chef_img"\n        src="https://sultanbadri.github.io/restaurant-page/images/chef.png"\n        alt="Chef image"\n      />\n    </div>\n    <div class="menu_grid">\n      <div class="item">\n        <img \n          id="item1"\n          src=""\n          alt="Item 1"\n        />\n        <div class="description">\n          <h4>Human Food 1</h4>\n          <p>Very delicious item, purchase it please!</p>\n        </div>\n      </div>\n      <div class="item">\n        <img \n          id="item2"\n          src=""\n          alt="Item 1"\n        />\n        <div class="description">\n          <h4>Human Food 1</h4>\n          <p>Very delicious item, purchase it please!</p>\n        </div>\n      </div>\n      <div class="item">\n        <img \n          id="item3"\n          src=""\n          alt="Item 1"\n        />\n        <div class="description">\n          <h4>Human Food 1</h4>\n          <p>Very delicious item, purchase it please!</p>\n        </div>\n      </div>\n      <div class="item">\n        <img \n          id="item4"\n          src=""\n          alt="Item 1"\n        />\n        <div class="description">\n          <h4>Human Food 1</h4>\n          <p>Very delicious item, purchase it please!</p>\n        </div>\n      </div>\n      <div class="item">\n        <img \n          id="item5"\n          src=""\n          alt="Item 1"\n        />\n        <div class="description">\n          <h4>Human Food 1</h4>\n          <p>Very delicious item, purchase it please!</p>\n        </div>\n      </div>\n    </div>\n    ',n.appendChild(e)})(),(()=>{const n=document.querySelector("#tabs"),e=document.createElement("div");e.setAttribute("id","contact_tab"),e.setAttribute("data-tab-content","#contact_tab"),e.classList.add("tab_main"),e.classList.add("inactive"),e.innerHTML='\n    <h3 class="tab_header contact_header">Contact us</h3>\n    <div class="contact_container">\n      <div class="info">\n        <div class="infoRow location">\n          <span class="icon material-symbols-outlined">location_on</span>\n          <p>\n            1100 Fillmore St\n            <br />\n            San Francisco, CA 94115\n          </p>\n        </div>\n        <div class="infoRow hours">\n          <span class="icon material-symbols-outlined">schedule</span>\n          <p>\n            <span class="text">Mon-Thurs:</span> 8am-8pm\n            <br />\n            <span class="text">Fri-Sun:</span> 8am-11pm\n          </p>\n        </div>\n        <div class="infoRow phone">\n          <span class="icon material-symbols-outlined">call</span>\n          <p>(222)-888 5555</p>\n        </div>\n        <form id="form1" action="">\n          <h4 class="infoRow message">\n            <span class="icon material-symbols-outlined">mail</span>\n            <p>\n              <span class="text">Message us!</span>\n            </p>\n          </h4>\n          <div class="input_box">\n            <input id="name" type="text" class="input_element" required />\n            <label for="name">Full Name</label>\n          </div>\n          <div class="input_box">\n            <input\n              id="email"\n              type="text"\n              class="input_element"\n              required\n            />\n            <label for="email">Email</label>\n          </div>\n          <div class="input_box">\n            <textarea\n              id="message"\n              type="text"\n              class="input_element"\n              required\n            ></textarea>\n            <label class="extra" for="message">Your Message</label>\n          </div>\n          <button type="submit" form="form1" id="form_button">Send</button>\n        </form>\n      </div>\n      <div class="mapouter">\n        <div class="gmap_canvas">\n          <iframe\n            width="600"\n            height="500"\n            id="gmap_canvas"\n            src="https://maps.google.com/maps?q=1100%20Fillmore%20St,%20San%20Francisco,%20CA%2094102,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"\n            frameborder="0"\n            scrolling="no"\n            marginheight="0"\n            marginwidth="0"\n          ></iframe\n          ><a href="https://putlocker-is.org">putlocker</a><br /><style>\n            .mapouter {\n              position: relative;\n              text-align: right;\n              height: 500px;\n              width: 600px;\n            }</style\n          ><a href="https://www.embedgooglemap.net"\n            >location map for website</a\n          ><style>\n            .gmap_canvas {\n              overflow: hidden;\n              background: none !important;\n              height: 500px;\n              width: 600px;\n            }\n          </style>\n        </div>\n      </div>\n    </div>\n    ',n.appendChild(e)})();const e=n.p+"fa56f8afd6bfffdd2432.png",t=n.p+"d9240a1702761a81ccef.jpg",a=n.p+"c447272b17a7d1327926.png",i=n.p+"e3a52bbab055d85a9f85.png",s=((()=>{const n=document.createElement("link");n.rel="icon",n.type="image/x-icon",n.href=e,document.querySelector("head").appendChild(n),document.querySelector("#home_tab").setAttribute("style",`background-image: url(${t})`),document.querySelector("#item1").setAttribute("src",a),document.querySelector("#item2").setAttribute("src",a),document.querySelector("#item3").setAttribute("src",a),document.querySelector("#item4").setAttribute("src",a),document.querySelector("#item5").setAttribute("src",a),document.querySelector("#chef_img").setAttribute("src",i)})(),document.querySelectorAll("[data-tab-target]")),c=document.querySelectorAll("[data-tab-content]");s.forEach((n=>{var e;(e=n).addEventListener("click",(n=>{c.forEach((n=>{n.classList.add("inactive")})),document.querySelector(`[data-tab-content= "${e.dataset.tabTarget}"]`).classList.remove("inactive")}))})),document.querySelector("button").addEventListener("click",(n=>{n.preventDefault()}))})();