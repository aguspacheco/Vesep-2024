const inputs = document.querySelectorAll('input');
    
inputs.forEach(input => {
  input.addEventListener('focus', function() {
      this.nextElementSibling.style.top = '-15px';
      this.nextElementSibling.style.fontSize = '12px';
      this.nextElementSibling.style.color = '#007bff';
  });
  
  input.addEventListener('blur', function() {
      if (this.value === '') {
          this.nextElementSibling.style.top = '10px';
          this.nextElementSibling.style.fontSize = '';
          this.nextElementSibling.style.color = '';
      }
  });
});