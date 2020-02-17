import validator from './validator.js';
const pagina1 = document.getElementById('primeraPagina');
const pagina2 = document.getElementById('segundaPagina');
const siguiente = document.getElementById('Siguiente');
const validar = document.getElementById('validarT');
const pagina3 = document.getElementById('terceraPagina');
const regresar = document.getElementById('regresar');

    pagina1.style.display = ' ';
    pagina2.style.display = 'none';
    pagina3.style.display = 'none';

siguiente.addEventListener('click', function siguiente1(){
  if (usuario.value =="") {
    alert ('no has introducido tu nombre de usuario')
  }
  else {
    pagina1.style.display ='none';
    pagina2.style.display ='block';
    pagina3.style.display ='none';
  const usuario= document.getElementById('usuario').value;
  const pagina2h1= document.getElementById('pagina2h1');
pagina2h1.textContent ='HOLA ' + usuario.toUpperCase() + ' BIENVENIDO!'};
});

   validar.addEventListener('click',function checkLength(numeroTarjeta){
    const numeroTarjetaV= document.getElementById('numeroTarjeta').value;
    if (numeroTarjetaV.length ===16) {
      pagina1.style.display ='none';
      pagina2.style.display ='none';
      pagina3.style.display ='block';
      let array = Array.from(numeroTarjetaV);
      let array2 =[];
      for ( let i=numeroTarjetaV.length-1;i>=0;i--){
        array2.push(array[i]);
        if (true) {

        }
        console.log(array2);
      }

     }else {
      alert('ingreso invalido')};
  });
