function calcular() {
    var num1 = parseFloat(prompt("Introduzca el primer número:"));
    var num2 = parseFloat(prompt("Introduzca el segundo número:"));
    
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    
    alert("La suma es: " + suma + "\n" +
          "La resta es: " + resta + "\n" +
          "La multiplicación es: " + multiplicacion + "\n" +
          "La división es: " + division);
  }