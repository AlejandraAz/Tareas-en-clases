// Tarea 1
// ------------

// 1 - ingreso el apellido :
let suApellido= prompt("Ingrese su apellido : ");
// 2 - calcular cantidad de caracteres : 
console.log(`Su apellido tiene : ${suApellido.length} caracteres.`);
// 3 - obtener la última letra del apellido
console.log("La última letra del apellido ingresado es : " + suApellido.at(-1));

// ****************************************************************************************

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota" :
let roedor = "marmota";
// 1 - Pasarla a mayuscula :
console.log(roedor.toUpperCase());
// 2 - Capitalizar la palabra (Marmota):
// La manera más óptima :
console.log(roedor[0].toUpperCase() + roedor.substring(1));

// También se puede capitalizar de esta manera, en este caso se utilizaria en arrays, ya nos devuelve una copia de una parte del array:
// console.log(roedor[0].toUpperCase() + roedor.slice(1));

