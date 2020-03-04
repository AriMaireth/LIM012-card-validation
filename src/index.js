import validator from './validator.js';

const pagina1 = document.getElementById('primeraPagina');
const pagina2 = document.getElementById('segundaPagina');
const siguiente = document.getElementById('Siguiente');
const validar = document.getElementById('validarT');
const pagina3 = document.getElementById('terceraPagina');
const regresar = document.getElementById('regresar');
const usuario = document.getElementById('usuario');
const pagina3h1 = document.getElementById('pagina3h1');
const pagina3h2 = document.getElementById('pagina3h2');
const tarjetaInvalida = document.getElementById('tarjetaInvalida');
const pagina2h1 = document.getElementById('pagina2h1');

const numeroTarjetaV = document.getElementById('numeroTarjeta');

pagina1.style.display = ' ';
pagina2.style.display = 'none';
pagina3.style.display = 'none';

siguiente.addEventListener('click', function siguiente1() {
  if (usuario.value == "") {
    alert('no has introducido tu nombre de usuario')
  }
  else {
    pagina1.style.display = 'none';
    pagina2.style.display = 'block';
    pagina3.style.display = 'none';
    const usuario = document.getElementById('usuario').value;
    pagina2h1.textContent = '¡HOLA ' + usuario.toUpperCase() + ' BIENVENIDO!';
  }
});

validar.addEventListener('click', function checkLength() {
  if (validator.isValid(numeroTarjetaV.value)== true) {
    pagina1.style.display = 'none';
    pagina2.style.display = 'none';
    pagina3.style.display = 'block';
    pagina3h1.textContent = validator.maskify(numeroTarjetaV.value);
    pagina3h2.textContent = '¡Tu registro ha sido exitoso!';
  }
  else {
    pagina1.style.display = 'none';
    pagina2.style.display = 'none';
    pagina3.style.display = 'block';
    pagina3h1.textContent = validator.maskify(numeroTarjetaV.value);
    pagina3h2.textContent = '¡oh oh! Tarjeta invalida';
    tarjetaInvalida.textContent = 'Verifica el número de tu tarjeta e intentalo de nuevo.';
  }
});

regresar.addEventListener('click', function regresar() {
  pagina1.style.display = 'none';
  pagina2.style.display = 'block';
  pagina3.style.display = 'none';

});
