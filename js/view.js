const inputEl = document.querySelector("input");
const tableElement = document.querySelector(".table-elements");
const spinnerEl = document.querySelector(".spinner-wrapper");

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
};

export function showSpinner() {
  spinnerEl.style.display = "block";
  setTimeout(() => (spinnerEl.style.display = "none"), 2000);
}
