import {
  createImageElement,
  createCompleteElement,
} from "./element-generator.js";

import bannerImageSrc from "./images/banner.png";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const header = createCompleteElement("header");
  content.appendChild(header);

  const restaurantName = createCompleteElement("h1", "sushi sushi");
  header.appendChild(restaurantName);

  const bannerImage = createImageElement(
    bannerImageSrc,
    "banner image of sushi",
  );
  header.appendChild(bannerImage);

  const nav = document.createElement("nav");
  header.appendChild(nav);

  const links = document.createElement("ul");
  nav.appendChild(links);

  const aboutOption = document.createElement("li");
  const aboutButton = document.createElement("button");
  aboutButton.innerHTML = "About";
  aboutButton.id = "about-tab";
  aboutOption.appendChild(aboutButton);
  links.appendChild(aboutOption);

  const menuOption = document.createElement("li");
  const menuButton = document.createElement("button");
  menuButton.innerHTML = "Menu";
  menuButton.id = "menu-tab";
  menuOption.appendChild(menuButton);
  links.appendChild(menuOption);

  const contactOption = document.createElement("li");
  const contactButton = document.createElement("button");
  contactButton.innerHTML = "Contact";
  contactButton.id = "contact-tab";
  contactOption.appendChild(contactButton);
  links.appendChild(contactOption);
}
