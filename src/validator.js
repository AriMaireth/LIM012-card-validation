const validator = {
  isValid: (numeroTarjetaV) => {
    let array1 = Array.from(numeroTarjetaV);
    let arrayRev = [];
    let sumaTotal = 0;

    for (let i = array1.length - 1; i >= 0; i--) {
      arrayRev.push(array1[i]);
    }
    for (let j = 0; j <= arrayRev.length - 1; j++) {
      if (j % 2 == 0) {
        sumaTotal += parseInt(arrayRev[j]);
      }
      else if (2 * arrayRev[j] < 10) {
        sumaTotal += parseInt(arrayRev[j] * 2);
      }
      else {
        let mult = (2 * arrayRev[j]).toString()
        let mult1 = parseInt(mult.charAt(0))
        let mult2 = parseInt(mult.charAt(1))
        let sumaMult = mult1 + mult2;
        sumaTotal += sumaMult
      }
    }

    if (sumaTotal % 10 == 0) {
      return true;
    }
    else {
      return false;
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
  }

};

export default validator;
