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
