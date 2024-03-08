/**
 * Borra los datos de un formulario.
 * @param {string} clase - La clase del formulario que se quiere borrar.
 */
export function borrar(clase) {
    const formulario = document.querySelector(`.${clase}`);
    const elementos = formulario.querySelectorAll('input, textarea, select');

    elementos.forEach(elemento => {
        // Restablece los valores de los campos
        if (elemento.type !== 'submit' && elemento.type !== 'reset') {
            elemento.value = '';
        }
    });
}
