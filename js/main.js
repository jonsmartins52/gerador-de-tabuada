import { retornaTabuada } from "./tabuada.js";
import { clean, insertElementsIntoContainer } from "./view.js";

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const buttonCleanEl = document.querySelector(".clean");
const iconEl = document.querySelector(".icon");

const handleTable = (event) => {
  event.preventDefault();
  const numero = inputEl.value;
  const tabuada = retornaTabuada(numero);
  insertElementsIntoContainer(tabuada);
};

buttonEl.addEventListener("click", handleTable);
buttonCleanEl.addEventListener("click", clean);
iconEl.addEventListener("click", () => console.log("trocar tema"));
