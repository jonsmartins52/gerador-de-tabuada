import { utils } from "../misc/utils.js";
import { elements } from "../misc/elements.js";

const { inputEl, tableEl, spinnerEl, iconEl, buttonClean } = elements;
const { LOADER_TIME, DARK_MODE, ICONS } = utils;

export const insertElementsIntoContainer = (tabuada) => {
  if (typeof tabuada === "string") {
    tableEl.innerHTML = `<li class="table-elements-li">${tabuada}</li>`;
    return;
  }

  showSpinner();
  setTimeout(() => {
    tableEl.innerHTML = tabuada
      .map(({ num, resultado }) => {
        return `<li class="table-elements-li">${inputEl.value} x ${num} = ${resultado}</li>`;
      })
      .join("");
    buttonClean.style.display = "block";
  }, LOADER_TIME);
};

function showSpinner() {
  spinnerEl.style.display = "block";
  setTimeout(() => (spinnerEl.style.display = "none"), LOADER_TIME);
}

export function clean() {
  showSpinner();

  setTimeout(() => {
    tableEl.innerHTML = "";
    buttonClean.style.display = "none";
    inputEl.value = "";
  }, LOADER_TIME);
}

export function switchMode() {
  document.body.classList.toggle(DARK_MODE.body);
  inputEl.classList.toggle(DARK_MODE.input);
  tableEl.classList.toggle(DARK_MODE.table);

  toggleClass();
  toggleImage();
}

function toggleClass() {
  Object.keys(DARK_MODE).forEach((k) => {
    const [element] = document.body.getElementsByClassName(k);
    let className;
    if (element) [className] = element?.classList;
    element?.classList.toggle(DARK_MODE[className]);
  });
}

function toggleImage() {
  if (iconEl.getAttribute("src") === ICONS.moon) {
    iconEl.setAttribute("src", ICONS.sun);
    iconEl.setAttribute("alt", "ícone Sol");
    return;
  }

  if (iconEl.getAttribute("src") === ICONS.sun) {
    iconEl.setAttribute("src", ICONS.moon);
    iconEl.setAttribute("alt", "ícone Lua");
    return;
  }
}
