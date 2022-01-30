const inputEl = document.querySelector("input");
const tableElement = document.querySelector(".table-elements");
const spinnerEl = document.querySelector(".spinner-wrapper");
const btnLimpar = document.querySelector(".clean");

export const insertElementsIntoContainer = (tabuada) => {
  if (typeof tabuada === "string") {
    tableElement.innerHTML = `<li class="table-elements-li">${tabuada}</li>`;
    return;
  }

  showSpinner();
  tableElement.innerHTML = tabuada
    .map(({ num, resultado }) => {
      return `<li class="table-elements-li">${inputEl.value} x ${num} = ${resultado}</li>`;
    })
    .join("");
  btnLimpar.style.display = "block";
};

export function showSpinner() {
  spinnerEl.style.display = "block";
  setTimeout(() => (spinnerEl.style.display = "none"), 2000);
}

export function clean() {
  showSpinner();
  tableElement.innerHTML = "";
  btnLimpar.style.display = "none";
  inputEl.value = "";
}
