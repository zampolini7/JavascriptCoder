// function saludo (){
//     nombrePersona = prompt("¿Nos contarías tu nombre?");
//     alert ("¡Hola " + nombrePersona + "! Bienvenido a PANDA, que disfrutes tu recorrido :)" );
//     return nombrePersona;
// }

// saludo();


// FOR PARA RECORRER LOS OBJETOS CREADOS IF 
// let mensaje = "";
// for (let i of listadoDeProductos){
//     mensaje += " Box: " + i.nombre + ", Precio: "+ i.precio + "\n" ;
// }

// if( entradaDeUsuario == "ver"|| entradaDeUsuario == "VER") {
    
//     console.log (listadoDeProductos);
//     alert ( "Estas son nuestras box disponibles: \n" + mensaje);


   
    
// }



// METIENDO LOS OBJETOS CREADOS AL ARRAY
listadoDeProductos.push (new productos1(1,"DeliBox",2600,))
listadoDeProductos.push (new productos1(2,"ParriBox", 2500, "- Tablita de pino 20x30cms - Cuchillito Mission con hoja de 11cm y vaina de ecocuero - Chips de astillas 'Humos' para ahumar y hacer asados deliciosos! - Repasador de lienzo de 60x45cm - Mini cajita de fósforos - Sal especiada: Sal parrillera, orégano, tomillo, merienda, ajitos, pimentón, nuez moscada y nuestro ingrediente secreto - Sal & pimienta: Mix de sal parrillera y 3 tipos de pimientas molidas - Chimichurri: le agregas aceite y listo - Salame de Oncativo: para disfrutar mientras estas al lado de la parrilla ."));
listadoDeProductos.push (new productos1(3,'teaTime', 2600));
listadoDeProductos.push (new productos1(4,'movieNigth', 2400));
listadoDeProductos.push (new productos1(5,'parriBox', 3000));
listadoDeProductos.push (new productos1(6,'dealiMets', 2800, "Cerveza Patagonia 🧀 Queso Di Malga 🔥 2 Provoletas especiadas 🥩 Salame de Oncativo 🥓 Pack de Bondiola 🥓 Pack de Lomo Horneado 🥓 Pack de Jamón Crudo 🥓 Pack de Lomito 🥖 Baguettin de pan blanco 🌳 Frasquito con aceitunas 🥜 Frasquito con maní ♻️ Bolsita de tela reutilizable que contiene toda la picadita"));
listadoDeProductos.push (new productos1(7,'wakeUp', 3000, "🍵 Bowl de Ceramica 🥣 Individual antimanchas y servilleta a tono 🥄 Cucharita de Bambú 🥜 Frasquito con granola 🍯 Frasquito con miel ."));
listadoDeProductos.push (new productos1(8,'beerBox', 3200, "4 variedades de cerveza Patagonia en latas (se vale pedir todas de la misma 🤪) 🍻 2 copas cerveceras 😉 Juego tipo Jenga de madera en bolsita de tela re-utilizable 🥜 Frasquito de maní"));
listadoDeProductos.push (new productos1(9,'aperolBox', 3200, "🍹Botella Aperol 🍾 Mini Chandon 🍷 Dos copitas sin tallo 🥄 Cuchara coctelera y medidor de acero 🍊 5 rodajas de cítricos para acompañar el trago"));
listadoDeProductos.push (new productos1(10,'ginBox', 3500, "Gin Príncipe de los Apóstoles 🥄 Cuchara de cóctel 🥄 Medida para tragos de acero 🍹2 copones de Gin 🍊5 rodajitas de cítricos disecados"));
listadoDeProductos.push (new productos1(11,'memoriesBox', 3200));
listadoDeProductos.push (new productos1(12,'provoBox', 2900));
listadoDeProductos.push (new productos1(13,'wineBox', 2500, "Vino Cordero con Piel de Lobo - Tablita de madera de pino - Juego de copas - Crackers - Y un delicioso queso Cambembert "));

//FIN OBJETOS EN ARRAY




// FIN FOR & IF

// -- ACTIVIDAD COMPLEMENTARIA DE ORDENAR EL ARRAY, VOY A REALIZARLO DE MENOR A MAYOR BASADO EN LOS PRECIOS //

let listadosDeProductos1 = listadoDeProductos;
listadosDeProductos1 = listadosDeProductos1.sort((a,b)=>a.precio-b.precio); 
console.log(listadosDeProductos1)

//FIN ACTIVIDAD COMPLEMENTARIA DE ORDERNAR EL ARRAY


//INICIO DE CREACIÓN DE EVENTOS

let mouse = document.getElementById ("pruebaEvento");
mouse.onclick = () => (console.log("Esto También funciona"));
mouse.onmousemove = () => (console.log("Esto se esta pasando"));



//INICIO PREVENT DEFAULT FORM
let botonEnviar = document.getElementById("btnEnviar1")
botonEnviar.addEventListener ("submit", submiti)

function submiti(e){
    e.preventDefault();
    console.log("formulario enviado");
}
//FINPREVENT DEFAULT FORM





// let botonAñadirCarro1 = document.getElementById("4")
// botonAñadirCarro1.addEventListener ("click", clickean)
// function clickean(){
//     console.log("formulario enviado");
// }



//FIN CREACIÓN DE EVENTOS

