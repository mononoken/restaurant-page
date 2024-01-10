export default function createTab(innerHTML) {
  const tab = document.createElement("div");
  tab.innerHTML = innerHTML;

  return tab;
}
