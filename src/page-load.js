import {
  createLinkListItem,
  createImageElement,
  createCompleteElement,
} from "./element-generator";

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

  const aboutLink = createLinkListItem("About", "#");
  links.appendChild(aboutLink);

  const menuLink = createLinkListItem("Menu", "#");
  links.appendChild(menuLink);

  const contactLink = createLinkListItem("Contact", "#");
  links.appendChild(contactLink);

  const introContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;
  const intro = createCompleteElement("p", introContent);
  content.appendChild(intro);
}
