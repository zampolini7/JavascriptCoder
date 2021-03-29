
let listadosDeProductos1 = DATOS;

listadosDeProductos1.push(new productos1(12, "NewBox", 3600, "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "file:///C:/Users/nicoz/Desktop/PANDA2/images1/movie2.jpeg"))

// Guardar en JSON LOS PRODUCTOS

const GuardarEnJson = JSON.stringify(listadosDeProductos1);

// OBTENER ARRAY ALMACENADO

const almacenados = JSON.parse(GuardarEnJson)

for (const almacenado of almacenados) {
    listadosDeProductos1.push(new productos1(almacenado))
}

listadosDeProductos1= almacenados;

/* -- ACTIVIDAD COMPLEMENTARIA DE ORDENAR EL ARRAY, VOY A AGREGAR UN NUEVO OBJETO CON EL CONSTRUCTOR PARA
DESPUÉS ORDENARLO DE MENOR A MAYOR BASADO EN LOS PRECIOS */

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
//FIN PREVENT DEFAULT FORM



//FIN CREACIÓN DE EVENTOS

// futura función para sumar elementos del carrito

function sumarElementosDelcarrito (item1, item2){
    for (const elementoASumar of CarritoDeproductos) {

        
    }
}