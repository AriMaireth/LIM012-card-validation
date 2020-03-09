const validator = {
  isValid: (numeroTarjetaV) => {
    let array1 = Array.from(numeroTarjetaV);
    let arrayRev = [];
    let sumaTotal = 0;
    for (let i = array1.length - 1; i >= 0; i = i - 1) {
      arrayRev.push(array1[i]);
    }
    for (let j = 0; j <= arrayRev.length - 1; j = j + 1) {
      if (j % 2 == 0) {
       //aca me agarra las posiciones 0,2,4,6,8,10,12,14,16 posiciones pares
        sumaTotal += parseInt(arrayRev[j]);
        //las sumo entre si y guardo en suma total
      }
      else if (2*arrayRev[j]<10){
        sumaTotal+= parseInt(2*arrayRev[j]);
        }
        else {
        let mult = (2*arrayRev[j]).toString()
        let mult1 = parseInt(mult.charAt(0))
        let mult2 = parseInt(mult.charAt(1))
        let sumaMult = mult1 + mult2;
        sumaTotal+= sumaMult
        }
      }
    
    if (sumaTotal % 10 == 0) {
      return true
    }
    else {
      return false
    }
  }

,

maskify: (numeroTarjetaV) => {
  let trfNumero = numeroTarjetaV.slice(-4);
  let maskiNumero = " ";
  for (let i = 0; i < numeroTarjetaV.length - 4; i++) {
  maskiNumero += '#';
  }
  return maskiNumero + trfNumero;
}}

export default validator;
