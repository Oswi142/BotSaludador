import verficarDatos from "./verificarDatos";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Bienvenido")
});
