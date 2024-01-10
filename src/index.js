import "./style.css";
import pageLoad from "./page-load";

import createTab from "./tabs/tab.js";
import { aboutTabHTML } from "./tabs/about-tab.js";
import { menuTabHTML } from "./tabs/menu-tab.js";
import { contactTabHTML } from "./tabs/contact-tab.js";

pageLoad();

const content = document.querySelector("#content");

// Default tab load
const tab = createTab(aboutTabHTML);
content.appendChild(tab);

const aboutButton = document.querySelector("#about-tab");
aboutButton.addEventListener("click", () => {
  tab.innerHTML = aboutTabHTML;
});

const menuButton = document.querySelector("#menu-tab");
menuButton.addEventListener("click", () => {
  tab.innerHTML = menuTabHTML;
});

const contactButton = document.querySelector("#contact-tab");
contactButton.addEventListener("click", () => {
  tab.innerHTML = contactTabHTML;
});
