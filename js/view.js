import { utils } from "../misc/utils.js";

const inputEl = document.querySelector("input");
const tableElement = document.querySelector(".table-elements");
const spinnerEl = document.querySelector(".spinner-wrapper");
const btnLimpar = document.querySelector(".clean");

const { LOADER_TIME } = utils;

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

export function showSpinner() {
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
