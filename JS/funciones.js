function tablaDeMultiplicar(
    numero = parseInt(prompt("Ingrese el valor de la tabla a calcular")),
    vueltas = parseInt(prompt("del 1 al cuanto?"))
    ) {
    if (isNaN(numero) || isNaN(vueltas)) {
        return alert("Debe ingresar un número");
    }
    document.write(`Tabla del ${numero}<br>`);
    for (let index = 1; index <= vueltas; index++) {
      document.write(`${numero} x ${index} = ${numero * index}<br>`); //2 x 1 = 2
    }
    }