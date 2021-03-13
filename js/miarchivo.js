//--- VARIABLES GLOBALES ----
let nombrePersona = "";
let entradaDeUsuario = "";



// CREACIÓN DE ARRAYS

const listadoDeProductos = [];
const CarritoDeproductos = [];
const CarritoParaOperaciones = [];



//PETICIÓN POR PROMPT DE NOMBRE
function saludo (){
    nombrePersona = prompt("¿Nos contarías tu nombre?");
    alert ("¡Hola " + nombrePersona + "! Bienvenido a PANDA, que disfrutes tu recorrido :)" );
    return nombrePersona;
}

saludo();



// PETICIONES POR PROMPT PARA VER OBJETOS

entradaDeUsuario = prompt(nombrePersona + " para ver nuestros productos escribe: ver \n" + "De lo contrario solo acepta y continua tu recorrido")
//CREADOR DE OBJETOS

class productos1 {

    constructor(nombre, precio) {
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

}







// METIENDO LOS OBJETOS CREADOS AL ARRAY
listadoDeProductos.push (new productos1 ("DeliBox",2600))
listadoDeProductos.push (new productos1("ParriBox", 2500));
listadoDeProductos.push (new productos1('teaTime', 2600));
listadoDeProductos.push (new productos1('movieNigth', 2400));
listadoDeProductos.push (new productos1('parriBox', 3000));
listadoDeProductos.push (new productos1('dealiMets', 2800));
listadoDeProductos.push (new productos1('wakeUp', 3000));
listadoDeProductos.push (new productos1('beerBox', 3200));
listadoDeProductos.push (new productos1('aperolBox', 3200));
listadoDeProductos.push (new productos1('ginBox', 3500));
listadoDeProductos.push (new productos1('memoriesBox', 3200));
listadoDeProductos.push (new productos1('provoBox', 2900));
listadoDeProductos.push (new productos1('wineBox', 2500));




// FOR PARA RECORRER LOS OBJETOS CREADOS
let mensaje = "";
for (let i of listadoDeProductos){
    mensaje += " Box: " + i.nombre + ", Precio: "+ i.precio + "\n" ;
}

if( entradaDeUsuario == "ver"|| entradaDeUsuario == "VER") {
    
    console.log (listadoDeProductos);
    alert ( "Estas son nuestras box disponibles: \n" + mensaje);


   
    
}


// -- ACTIVIDAD COMPLEMENTARIA DE ORDENAR EL ARRAY, VOY A REALIZARLO DE MENOR A MAYOR BASADO EN LOS PRECIOS //

let listadosDeProductos1 = listadoDeProductos;
listadosDeProductos1 = listadosDeProductos1.sort((a,b)=>a.precio-b.precio); 
console.log(listadosDeProductos1)


// FUNCIÓN PARA SUMAR Y RESTAR COSAS DEL ARRAY


// alert ("Bievenidos a la calculadora ágil y sencilla");
// let Valor1 = parseInt(prompt("Ingrese un número"));
// let Valor2 = parseInt(prompt("Ingrese un segundo número"));
// let Operacion = prompt ("Ingrese la operacion deseada: suma, resta, multiplicación o división");


//Me puede servir este if para operar sobre el array, lo veremos más adelante
// function operaciones (){


//     if (Operacion == "suma") {
//         let Valor3 = Valor1 + Valor2;
//         console.log ("La suma de los dos números es de = " + Valor3);
//         alert ("La suma de los dos números es de = " + Valor3);
    
//     }
    
//     else if (Operacion == "resta") {
//         let Valor3 = Valor1 - Valor2;
//         console.log ("La resta de los dos números es de = " + Valor3);
//         alert ("La resta de los dos números es de = " + Valor3);
//     }
    
//     else if (Operacion == "multiplicación" || Operacion == "multiplicacion") {
//         let Valor3 = Valor1 * Valor2;
//         console.log ("La multiplicación de los dos números es de = " + Valor3);
//         alert ("La multiplicación de los dos números es de = " + Valor3);
//     }
    
//     else {
//         console.log("Refresque la página y vuelva a intentarlo")
//         alert ("Refresque la página y vuelva a intentarlo")
//     }
    
    

// }    
