alert("A continuación, introduzca los numeros de los cuales quiere obtener el resultado")
let num1 = parseFloat(prompt("PRIMER NÚMERO: "));

let num2 = parseFloat(prompt("SEGUNDO NÚMERO: "));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "NO ES POSIBLE REALIZAR LA OPERACIÓN CON EL CERO";

alert("RESULTADO DE LA SUMA: " + suma);
alert("RESULTADO DE LA RESTA: " + resta);
alert("RESULTADO DE LA MULTIPLICACIÓN: " + multiplicacion);
alert("RESULTADO DE LA DIVISIÓN: " + division);