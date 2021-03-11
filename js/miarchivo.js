
function saludo (){
    nombrePersona = prompt("¿Nos contarías tu nombre?");
    alert ("¡Hola " + nombrePersona + "! Bienvenido a PANDA, que disfrutes tu recorrido :)" );
    return nombrePersona;
}
saludo();
let nombrePersona1 = nombrePersona;



let entradaDeUsuario = prompt(nombrePersona1 + " para crear un objeto ingresa: crear")

class productos1 {

    constructor(nombre, precio) {
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.vendido= false;

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

    vender(){
        this.vendido= true;
    
    }

}

const producto1 = new productos1 ("ParriBox", 2500);
let listadoDeProductos = [];

if( entradaDeUsuario == "crear") {
    listadoDeProductos.push(new productos1 ("DeliBox",2600))
    console.log (listadoDeProductos);


   
    
}











