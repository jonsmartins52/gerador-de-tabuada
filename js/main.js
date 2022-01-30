import { retornaTabuada } from "./tabuada.js";
import { insertElementsIntoContainer } from "./view.js";

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

const handleTable = (event) => {
  event.preventDefault();
  const numero = inputEl.value;
  const tabuada = retornaTabuada(numero);
  insertElementsIntoContainer(tabuada);
};

buttonEl.addEventListener("click", handleTable);
