

/*Estilo de los inputs con transicion*/
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.previousElementSibling.classList.add('label-active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.previousElementSibling.classList.remove('label-active');
            }
        });

        if (input.value !== '') {
            input.previousElementSibling.classList.add('label-active');
        }
    });
});