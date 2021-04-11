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



// EMPEZAMOS A TRABAJAR CON LOS EVENTOS

function asociarEventos(){
    $(".btnComprar").click(function (e) {
        let encontrado = listadosDeProductos1.find(elemento => elemento.id == e.target.id);
        nuevoProducto = new productos1(encontrado)
        console.log(typeof nuevoProducto);
        agregarAlcarrito1.push(nuevoproducto);
        console.log (agregarAlcarrito1);

        $("#carrito").empty();
        
        agregarProductoAlCarritoFunc();

        $("#carrito").hide()
                        .delay(600)
                            .fadeIn(2000);

        
                  
    });
     $("#btnDelete").click(function (e) { 
        let filtroParaBorrar = agregarAlcarrito1.filter (elemento => elemento.id =! id)
        agregarAlcarrito1.push(filtroParaBorrar)
        console.log(filtroParaBorrar);

        
        
    });


}






function agregarProductoAlCarritoFunc(){
    let total = 0;
    for (const producto of agregarAlcarrito1) {
        total = total + producto.precio
        
        $("#carrito").append(`  <div class="container  carrito-cont">
                                    <div class="row m-3 carrito-row1">
                                                <img class="col-2" src="${producto.img}" alt="imagen de producto">
                                                <h5 class="col-5 d-flex justify-content-center align-items-center"> ${producto.nombre} </h5>
                                                <button ${producto.id} type="button" class=" btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica">-</button>
                                                <h5 class="m-3 d-flex justify-content-center align-items-center" > ${producto.cantidad} </h5>

                                                <button  ${producto.id} type="button" class="btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica">+</button>
                                                
                                                <h5 class="col-1 d-flex justify-content-center align-items-center" > ${producto.precio} </h5>
                                                <button ${producto.id} type="button" class="btn btn-danger d-flex justify-content-center align-items-center btnDelete btnCaracteristica">X</button>
                                    </div>
                                </div>
                            `

        
                          
    );}
   
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



asociarEventos()

