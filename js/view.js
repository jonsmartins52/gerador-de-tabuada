const inputEl = document.querySelector("input");
const tableElement = document.querySelector(".table-elements");

export const insertElementsIntoContainer = (tabuada) => {
  tableElement.innerHTML = tabuada
    .map(({ num, resultado }) => {
      return `<li class="table-elements-li">${inputEl.value} x ${num} = ${resultado}</li>`;
    })
    .join("");
};
