export function createLinkListItem(innerHTML, href) {
  const link = createLinkElement(innerHTML, href);
  const item = createCompleteElement("li", link.outerHTML);

  return item;
}

export function createLinkElement(innerHTML, href) {
  const element = createCompleteElement("a", innerHTML);
  element.href = href;

  return element;
}

export function createImageElement(src, alt) {
  const image = createCompleteElement("img");
  image.src = src;
  image.alt = alt;

  return image;
}

export function createCompleteElement(type, innerHTML = "") {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;

  return element;
}
