//--- VARIABLES GLOBALES ----
let nombrePersona = "";




//Función saludar
function saludo (){
    nombrePersona = prompt("¿Nos contarías tu nombre?");
    alert ("¡Hola " + nombrePersona + "! Bienvenido a PANDA, que disfrutes tu recorrido :)" );
    return nombrePersona;
}

saludo();





// let entradaDeUsuario = prompt(nombrePersona + " para crear un objeto ingresa: crear")
//CREADOR DE OBJETOS

class productos1 {

    constructor(nombre, precio) {
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);

    }


    // sumarIva(){
    //     this.precio= this.precio*1.21;
    //     alert(nombrePersona + "El precio de tu producto es de: ")


    // }

}



// if( entradaDeUsuario == "crear") {
//     listadoDeProductos.push(new productos1 ("DeliBox",2600))
//     console.log (listadoDeProductos);


   
    
// }

const listadoDeProductos = [];

listadoDeProductos.push = (new productos1("ParriBox", 2500));
listadoDeProductos.push = (new productos1('teaTime', 2600));
listadoDeProductos.push = (new productos1('movieNigth', 2400));
listadoDeProductos.push = (new productos1('parriBox', 3000));
listadoDeProductos.push = (new productos1('dealiMets', 2800));
listadoDeProductos.push = (new productos1('wakeUp', 3000));
listadoDeProductos.push = (new productos1('beerBox', 3200));
listadoDeProductos.push = (new productos1('aperolBox', 3200));
listadoDeProductos.push = (new productos1('ginBox', 3500));
listadoDeProductos.push = (new productos1('memoriesBox', 3200));
listadoDeProductos.push = (new productos1('provoBox', 2900));
listadoDeProductos.push = (new productos1('wineBox', 2500));
console.log(listadoDeProductos);

for (let i of listadoDeProductos){
    console.log(i);
}







