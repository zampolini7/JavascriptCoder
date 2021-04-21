// let misDatos;
// PASO 1 GENERO Y AGREGO ELEMENTOS AL DOM CON JQUERY



$.getJSON("data/data.json", function (datos, estado) {
    if (estado === "success"){
        
        listadosDeProductos1= datos;

        console.log(datos);
        console.log(estado);
        for (const elemento of listadosDeProductos1) {
            crearElementoCJquery(elemento)
            
           
        }
        
    }
        
    }
);

// listadosDeProductos1 = misDatos;


// listadosDeProductos1 = listadosDeProductos1.sort((a,b)=>a.precio-b.precio); 
// console.log(listadosDeProductos1)

function crearElementoCJquery (elemento){
    const producto = $(`
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
    );
    producto.on('click', function(e){
        console.log("Hola me clickeaste")
        let encontrado = listadosDeProductos1.find(elemento => elemento.id == e.target.id);
        console.log(encontrado);
        nuevoProducto = new productos1(encontrado)
        // console.log(typeof nuevoProducto);
        agregarAlcarrito1.push(nuevoProducto);
        console.log (agregarAlcarrito1);

        $("#carrito").empty();
        
        agregarProductoAlCarritoFunc();

        $("#carrito").hide()
                        .delay(600)
                            .fadeIn(2000);
    })
    $('#crearId1').append(producto)
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
    </div>`
    );

    console.log ("¡Todos los productos ya fueron cargados!");

    
});








function agregarProductoAlCarritoFunc(){
    let total = 0;
    for (const producto of agregarAlcarrito1) {
        total = total + producto.precio

        const elementoProducto = $(`
            <div class="container  carrito-cont">
                <div class="row m-3 carrito-row1">
                    <img class="col-2" src="${producto.img}" alt="imagen de producto">
                    <h5  class="col-5 d-flex justify-content-center align-items-center"> ${producto.nombre} </h5>
                    <button id="${producto.id}" type="button" class=" btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica btnRestar">-</button>
                    <h5 class="m-3 d-flex justify-content-center align-items-center" > ${producto.cantidad} </h5>

                    <button id="${producto.id}" type="button" class="btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica btnSumar">+</button>
                    
                    <h5 class="col-1 d-flex justify-content-center align-items-center" > ${producto.precio * producto.cantidad} </h5>
                    <button id="${producto.id}" type="button" class="btn btn-danger d-flex justify-content-center align-items-center btnDelete btnCaracteristica btnEliminar">X</button>
                </div>
            </div>
        `);

        const botonRestar = elementoProducto.children().eq(0).children('.btnRestar');
        const botonSumar= elementoProducto.children().eq(0).children('.btnSumar');
        const botonEliminar= elementoProducto.children().eq(0).children('.btnEliminar');

        /**
         * TODO (Para el caso del boton de sumar):
         * 1) Cuando el usuario presione el boton de sumar, buscar con el id el objeto dentro del array del carrito.
         * 2) Una vez que tenga el objeto, tengo que agregarle 1 a la cantidad utilizando el metodo sumarCantidad de la clase.
         * 3) Vaciar el div del carrito (#carrito) con el .empty() y volver a ejecutar la funcion agregarProductoAlCarritoFunc().
         */
        botonSumar.on("click", (e) => {
            console.log("Clickea3")
        })
        
        $("#carrito").append(elementoProducto);
    
    }
   
    $("#total").html(` <h2 class="d-flex justify-content-end">El precio total es: ${total} </h2>` );           
    $("#comprarAhora").animate({
        height: "100px",
        width: "100px",
        opacity: "0.25",
        opacity: "0,50",
        opacity: "0,75",
        opacity: "1"},
        "slow",
        function(){
            console.log("final de la transición");
        } 
    
                
    
    )    
}



// asociarEventos();

