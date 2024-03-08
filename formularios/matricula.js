import { borrar } from "../secciones/botones.js";

const cancelarBtn = document.getElementById("cancelar-btn");
cancelarBtn.addEventListener("click", () => { 
    borrar("Matricula");
});