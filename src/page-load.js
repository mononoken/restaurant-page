import {
  listLinkItem,
  imageElement,
  completeElement,
} from "./element-generator";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const header = completeElement("header");
  content.appendChild(header);

  const restaurantName = completeElement("h1", "sushi sushi");
  header.appendChild(restaurantName);

  const banner = imageElement("./images/banner.png", "banner image of sushi");
  header.appendChild(banner);

  const nav = document.createElement("nav");
  header.appendChild(nav);

  const links = document.createElement("ul");
  nav.appendChild(links);

  const aboutLink = listLinkItem("About", "#");
  links.appendChild(aboutLink);

  const menuLink = listLinkItem("Menu", "#");
  links.appendChild(menuLink);

  const contactLink = listLinkItem("Contact", "#");
  links.appendChild(contactLink);

  const introContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;
  const intro = completeElement("p", introContent);
  content.appendChild(intro);
}
