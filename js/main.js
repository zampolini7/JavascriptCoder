// PASO 1 GENERO Y AGREGO ELEMENTOS AL DOM CON JQUERY

for (const elemento of listadosDeProductos1) {
    crearElementoCJquery(elemento)
}

function crearElementoCJquery (elemento){
    $('#crearId1').append(`    
                                <div class="card col-3 d-flex m-2">
                                    <img class="card-img-top" src= "${elemento.img}" alt="Card image cap">
                                    <div class="card-body">
                                        <h5  class="card-title"> ${elemento.nombre}</h5>
                                        
                                        <p> ${elemento.contenido}</p>

                                        <a id="${elemento.id}" class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                                                Agregar al carrito x ${elemento.precio}
                                        </a>
                                        
                                    </div>
                               
                                </div>`     

    )
}


// FIN AGREGAR ELEMENTOS CARD AL DOM

// INICIO Y FIN DE LA FUNCIÓN READY

$(document).ready(function(){
   $('#crearId2').append(`<div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
    </div>`);
    console.log("La carga del DOM finalizó");
})

window.addEventListener ('load', function(){
    $('#crearId2').html(`<div class="alert alert-warning" role="alert">
                            ¡Todos los productos ya fueron cargados!
                        </div>`);

    console.log ("¡Todos los productos ya fueron cargados!");

    
});
// $(window).load(function () {
//     $('#crearId2').html(`<div class="alert alert-warning" role="alert">
//                             ¡Todos los productos ya fueron cargados!
//                         </div>`);

//     console.log ("¡Todos los productos ya fueron cargados!");
// });



// EMPEZAMOS A TRABAJAR CON LOS EVENTOS

function asociarEventos(){
    let botones = document.getElementsByClassName("btnComprar")
    for (const boton of botones) {
    boton.onclick = SeleccionarProductos1;

}

function SeleccionarProductos1 (e) {
    console.log(e.target);
    console.log(e.target.id);

    let productoSeleccionadoXFind = listadosDeProductos1.find (elemento => elemento.id == e.target.id)
    // nuevoProductoEnCarrito= new productos1(productoSeleccionadoXFind)
    // nuevoProductoEnCarrito.sumariva()
    // console.log(nuevoProductoEnCarrito)
    // productoSeleccionadoXFind.descuento(200);
    agregarAlcarrito1.push(productoSeleccionadoXFind)
    // agregarAlcarrito1.push(nuevoProductoEnCarrito)
    console.log(agregarAlcarrito1);


    // if (productoSeleccionadoXFind === undefined){
    //     let listadosDeProductos1   = listadosDeProductos1.find( elemento => elemento.id == e.target.id );
    //     // let nuevoProducto = new Producto(productoSeleccionado);
    //     agregarAlcarrito1.push(productoSeleccionadoXFind);
    //   }else{
    //     console.log(listadosDeProductos1)
    //   }

    //   console.warn(agregarAlcarrito1);
    // //   agregarCarrito(agregarAlcarrito1 );

    agregarProductoAlCarrito(agregarAlcarrito1);
}
// console.log(agregarAlcarrito1)


}


function agregarProductoAlCarrito(listado){
    let padre = document.getElementById("carrito")
    let html = "";
    for (const producto of listado) {
        html += `   <div class="container">
                        <div class="row">
                            <img class="col-3" src="${producto.img}" alt="imagen de producto">
                            <h5 class="col-4"> ${producto.nombre} </h5>
                            
                            <button ${producto.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${producto.precio}</button>
                            </div>
                    </div>
                 `
        
    }
    padre.innerHTML= html;

}




asociarEventos()

