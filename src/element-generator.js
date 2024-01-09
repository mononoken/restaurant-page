export function listLinkItem(innerHTML, href) {
  const link = linkElement(innerHTML, href);
  const item = completeElement("li", link.outerHTML);

  return item;
}

export function linkElement(innerHTML, href) {
  const element = completeElement("a", innerHTML);
  element.href = href;

  return element;
}

export function imageElement(src, alt) {
  const image = completeElement("img");
  image.src = src;
  image.alt = alt;

  return image;
}

export function completeElement(type, innerHTML = "") {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;

  return element;
}
