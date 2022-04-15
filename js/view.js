import { utils } from "../misc/utils.js";

const inputEl = document.querySelector("input");
const tableElement = document.querySelector(".table-elements");
const spinnerEl = document.querySelector(".spinner-wrapper");
const btnLimpar = document.querySelector(".clean");
const btnSubmit = document.querySelector(".submit");
const iconEl = document.querySelector(".icon");
const headerEl = document.querySelector(".header");
const moonIcon = "./assets/img/moon-solid.svg";
const sunIcon = "./assets/img/sun-solid.svg";

const { LOADER_TIME, DARK_MODE } = utils;

export const insertElementsIntoContainer = (tabuada) => {
  if (typeof tabuada === "string") {
    tableElement.innerHTML = `<li class="table-elements-li">${tabuada}</li>`;
    return;
  }

  showSpinner();
  setTimeout(() => {
    tableElement.innerHTML = tabuada
      .map(({ num, resultado }) => {
        return `<li class="table-elements-li">${inputEl.value} x ${num} = ${resultado}</li>`;
      })
      .join("");
    btnLimpar.style.display = "block";
  }, LOADER_TIME);
};

function showSpinner() {
  spinnerEl.style.display = "block";
  setTimeout(() => (spinnerEl.style.display = "none"), LOADER_TIME);
}

export function clean() {
  showSpinner();

  setTimeout(() => {
    tableElement.innerHTML = "";
    btnLimpar.style.display = "none";
    inputEl.value = "";
  }, LOADER_TIME);
}

export function switchMode() {
  document.body.classList.toggle(DARK_MODE.body);
  headerEl.classList.toggle(DARK_MODE.header);
  iconEl.classList.toggle(DARK_MODE.icon);
  inputEl.classList.toggle(DARK_MODE.input);
  btnSubmit.classList.toggle(DARK_MODE.submit);
  btnLimpar.classList.toggle(DARK_MODE.clean);
  tableElement.classList.toggle(DARK_MODE.table);

  toggleImage();
}

function toggleImage() {
  iconEl.src = iconEl.getAttribute("src") === moonIcon ? sunIcon : moonIcon;
}
