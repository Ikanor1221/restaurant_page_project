// Load Contacts tab

const loadContact = (() => {
  const tabsElement = document.querySelector("#tabs");

  const contactElement = document.createElement("div");
  contactElement.setAttribute("id", "contact_tab");
  contactElement.setAttribute("data-tab-content", "#contact_tab");
  contactElement.classList.add("tab_main");
  contactElement.classList.add("inactive");

  contactElement.innerHTML = `
    <h3 class="tab_header contact_header">Contact us</h3>
    <div class="contact_container">
      <div class="info">
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
        <div class="infoRow phone">
          <span class="icon material-symbols-outlined">call</span>
          <p>(222)-888 5555</p>
        </div>
        <form id="form1" action="">
          <h4 class="infoRow message">
            <span class="icon material-symbols-outlined">mail</span>
            <p>
              <span class="text">Message us!</span>
            </p>
          </h4>
          <div class="input_box">
            <input id="name" type="text" class="input_element" required />
            <label for="name">Full Name</label>
          </div>
          <div class="input_box">
            <input
              id="email"
              type="text"
              class="input_element"
              required
            />
            <label for="email">Email</label>
          </div>
          <div class="input_box">
            <textarea
              id="message"
              type="text"
              class="input_element"
              required
            ></textarea>
            <label class="extra" for="message">Your Message</label>
          </div>
          <button type="submit" form="form1" id="form_button">Send</button>
        </form>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1100%20Fillmore%20St,%20San%20Francisco,%20CA%2094102,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://putlocker-is.org">putlocker</a><br /><style>
            .mapouter {
              position: relative;
              text-align: right;
              height: 500px;
              width: 600px;
            }</style
          ><a href="https://www.embedgooglemap.net"
            >location map for website</a
          ><style>
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 500px;
              width: 600px;
            }
          </style>
        </div>
      </div>
    </div>
    `;

  tabsElement.appendChild(contactElement);
})();

export { loadContact };
