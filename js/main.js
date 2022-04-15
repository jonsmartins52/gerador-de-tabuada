import { retornaTabuada } from "./tabuada.js";
import { clean, insertElementsIntoContainer, switchMode } from "./view.js";
import { elements } from "../misc/elements.js";

const { inputEl, buttonSubmit, buttonClean, iconEl } = elements;

const handleTable = (event) => {
  event.preventDefault();
  const numero = inputEl.value;
  const tabuada = retornaTabuada(numero);
  insertElementsIntoContainer(tabuada);
};

buttonSubmit.addEventListener("click", handleTable);
buttonClean.addEventListener("click", clean);
iconEl.addEventListener("click", switchMode);
