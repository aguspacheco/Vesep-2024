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


const camposNumero = document.querySelectorAll('input[type="number"]');

for (let i = 0; i < camposNumero.length; i++) {
    camposNumero[i].addEventListener('input', function() {
        const valor = parseFloat(this.value);

        if (valor < 0 || isNaN(valor)) {
            alert("Solo se permiten ingresar números postivos")
            this.value = '';
        }
   });   
}

const cuilInput = document.getElementById('cuit');

cuilInput.addEventListener('input', function() {
    // Obtener el valor actual del input
    let valor = this.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos

    // Aplicar el formato con guiones
    if (valor.length > 2) {
        valor = valor.substring(0, 2) + '-' + valor.substring(2);
    }

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    // Asignar el valor formateado al input
    this.value = valor;
});
