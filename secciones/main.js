document.addEventListener('DOMContentLoaded', function() {
    const btnCancelar = document.getElementById('cancelar-btn');
    
    btnCancelar.addEventListener('click', function() {
        // Llama a la función borrar para cada formulario
        borrar('Anterior');
        borrar('Actual');
        borrar('Antecedente');
        borrar('Persona');
        borrar('Tomo');
        borrar('Matricula');
    });
});

/*Estilo de los inputs de transicion*/

// Espera a que todo el contenido del documento HTML se cargue antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', function() {
    //Selecciona todos los elementos input.
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    
    inputs.forEach(input => {
        //Agrega un evento cuando se obtiene un foco.
        input.addEventListener('focus', function() {
            this.previousElementSibling.classList.add('label-active');
        });

        //Agrega un evento de escucha cuando el input pierde el foco.
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.previousElementSibling.classList.remove('label-active');
            }
        });

        //Verifica si la cadena no esta vacia.
        if (input.value !== '') {
            input.previousElementSibling.classList.add('label-active');
        }
    });
});