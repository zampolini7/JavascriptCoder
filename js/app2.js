alert ("Bievenidos a la calculadora ágil y sencilla");
let Valor1 = parseInt(prompt("Ingrese un número"));
let Valor2 = parseInt(prompt("Ingrese un segundo número"));
let Operacion = prompt ("Ingrese la operacion deseada: suma, resta, multiplicación o división");

if (Operacion == "suma") {
    let Valor3 = Valor1 + Valor2;
    console.log ("La suma de los dos números es de = " + Valor3);
    alert ("La suma de los dos números es de = " + Valor3);

}

else if (Operacion == "resta") {
    let Valor3 = Valor1 - Valor2;
    console.log ("La resta de los dos números es de = " + Valor3);
    alert ("La resta de los dos números es de = " + Valor3);
}

else if (Operacion == "multiplicación" || Operacion == "multiplicacion") {
    let Valor3 = Valor1 * Valor2;
    console.log ("La multiplicación de los dos números es de = " + Valor3);
    alert ("La multiplicación de los dos números es de = " + Valor3);
}

else if (Operacion == "división" || Operacion == "division"){
    let Valor3 = Valor1 / Valor2;
    console.log ("La división de los dos números es de = " + Valor3);
    alert ("La división de los dos números es de = " + Valor3);
}

else {
    console.log("Refresque la página y vuelva a intentarlo")
    alert ("Refresque la página y vuelva a intentarlo")
}
