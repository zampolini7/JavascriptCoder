// INICIO: TRAIGO DATA DE LOS ELEMENTOS AL DOM CON JQUERY CON METODO AJAX


$.getJSON("data/data.json", function (datos, estado) {
    if (estado === "success"){
        
        listadosDeProductos1= datos;

        console.log(datos);
        console.log(estado);
        for (const elemento of listadosDeProductos1) {
            crearElementoCJquery(elemento)
            
           
        }
        // cargaDeProductosDelStorage()
    }
        
    }
);

// FIN : TRAIGO DATA DE LOS ELEMENTOS AL DOM CON JQUERY CON METODO AJAX


function cargaDeProductosDelStorage() {
    const almacenados= JSON.parse(localStorage.getItem("productosDelCarrito"))
    console.log(almacenados)


            for (const producto of almacenados) {
                agregarAlcarrito1.push (new productos1(producto))
                console.log(agregarAlcarrito1)
                
            }
            agregarProductoAlCarritoFunc(agregarAlcarrito1)


}


// INICIO: Genero los elementos y escucho eventos para agregar al carrito

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
    // agregarProductoAlCarritoFunc();
    
    producto.on('click', function(e){
        console.log("Hola me clickeaste")
        let encontrado = agregarAlcarrito1.find(elemento => elemento.id == e.target.id);   
        if (encontrado != undefined) {
            
            nuevoProducto.sumarCantidad()
        } else {
            let encontrado = listadosDeProductos1.find(elemento => elemento.id == e.target.id);
            nuevoProducto = new productos1(encontrado)
            agregarAlcarrito1.push(nuevoProducto)
            
        }
        console.log(nuevoProducto);
       
        // console.log(typeof nuevoProducto);
        
        // agregarAlcarrito1.push(nuevoProducto);
        console.log (agregarAlcarrito1);

        $("#carrito").empty();
        
        agregarProductoAlCarritoFunc();
        
        $("#carrito").hide()
                        .delay(600)
                            .fadeIn(2000);
    })
    $('#crearId1').append(producto)


}




// FIN: Genero los elementos y escucho eventos para agregar al carrito

// INICIO FUNCIÓN READY Y LOAD

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

// FIN FUNCIÓN READY Y LOAD




//  INICIO: función para agregar al carrito, sumar cantidades, restar y eliminar

function agregarProductoAlCarritoFunc(){
    let total = 0;
    for (const producto of agregarAlcarrito1) {


        total = total + producto.precio* producto.cantidad

        const elementoProducto = $(`
            <div class="container  carrito-cont">
                <div class="row m-3 carrito-row1">
                    <img class="col-2" src="${producto.img}" alt="imagen de producto">
                    <h5  class="col-5 d-flex justify-content-center align-items-center"> ${producto.nombre} </h5>
                    <button id="${producto.id}" type="button" class=" btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica btnRestar">-</button>
                    <h5 class="m-3 d-flex justify-content-center align-items-center" > ${producto.cantidad} </h5>

                    <button id="${producto.id}" type="button" class="btn btn-secondary d-flex justify-content-center align-items-center btnCaracteristica btnSumar">+</button>
                    
                    <h3 class="col-1 d-flex justify-content-center align-items-center" > ${producto.precio * producto.cantidad} </h3>
                    <button id="${producto.id}" type="button" class="btn btn-danger d-flex justify-content-center align-items-center btnDelete btnCaracteristica btnEliminar">X</button>
                </div>
            
            </div>

        `);

        const botonRestar = elementoProducto.children().eq(0).children('.btnRestar');
        const botonSumar= elementoProducto.children().eq(0).children('.btnSumar');
        const botonEliminar= elementoProducto.children().eq(0).children('.btnEliminar');

    
        botonSumar.on("click", (e) => {
            console.log("Clickea3")
            let nuevoProducto = agregarAlcarrito1.find(elemento => elemento.id == e.target.id);

            
            nuevoProducto.sumarCantidad();
            
            console.log(nuevoProducto)
           
            $("#carrito").empty();
        
            agregarProductoAlCarritoFunc();

            
        })

        botonRestar.on("click", (e) => {
            console.log("Clickea4")
            let nuevoProducto = agregarAlcarrito1.find(elemento => elemento.id == e.target.id);

            
            nuevoProducto.restarCantidad();
            
            console.log(nuevoProducto)
           
            $("#carrito").empty();
        
            agregarProductoAlCarritoFunc();

            
        })

        botonEliminar.on("click", (e) => {
            console.log("Clickea3")
            let nuevoProducto = agregarAlcarrito1.filter(elemento => elemento.id != e.target.id);
            e.preventDefault();
            agregarAlcarrito1=nuevoProducto;
            
            console.log(nuevoProducto)
            console.log(agregarAlcarrito1)
           
            $("#carrito").empty();
        
            agregarProductoAlCarritoFunc();

            
        })
        
        $("#carrito").append(elementoProducto);
              
    }

    guardarEnStorage(agregarAlcarrito1)

   
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

// INICIO Botón comprar ahora para finalizar compra

$('#comprarAhora').click(function (e) { 
        
    let total = 0;
    let Totalproducto ="";
    // $(document).ready(function(){
    //      console.log("La carga del carrito finalizó");

    //  })
     
    for (const producto of agregarAlcarrito1) {
        total = total + producto.precio* producto.cantidad
        Totalproducto = $(`
        <div class="container  carrito-cont">
            <div class="row m-3 carrito-row1">
                <img class="col-4" src="${producto.img}" alt="imagen de producto">
                <h5  class="col d-flex justify-content-center align-items-center"> ${producto.nombre} </h5>
                
                <h5 class="m-3 d-flex justify-content-center align-items-center" > * ${producto.cantidad } =  </h5>


                
                <h5 class="col d-flex justify-content-center align-items-center" > ${producto.precio * producto.cantidad} </h5>
                
            </div>
        
        </div>

        `);
    }
    $("#modalTotal").empty();
    $("#modalTotal").append(Totalproducto);
    
    $("#modalTotal").append(` <h2 class="d-flex justify-content-end">El precio total es: ${total} </h2>` ); 
    
    




    
});

// FIN Botón comprar ahora para finalizar compra

// INICIO Traigo datos de provincias y municipios desde API del gobierno

const API = "https://apis.datos.gob.ar/georef/api/provincias"

$(document).ready(function () {
    console.log("El carrito esta listo");
    $.get(API, function (datos,estado) {
       
            console.log(datos.provincias);
            console.log(estado);
            $("#selectProvincias").empty();
            for (const provincia of datos.provincias) {
                $("#selectProvincias").append(`<option value="${provincia.id}">${provincia.nombre}</option>`);
                
            }
           
            
       

        
    })
});

$("#selectProvincias").change(function (e) { 
    console.log($("#selecProvincias"));
    let ApiMunicipio = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${this.value}&campos=id,nombre&max=100`
    $.get(ApiMunicipio, function (datos,estado) {
        console.log(datos.municipios);
        $("#selectMunicipio").empty();
        for (const municipio of datos.municipios) {
            $("#selectMunicipio").append(`<option value="${municipio.id}">${municipio.nombre}</option>`);
            
        }
        
    })
});

// FIN Traigo datos de provincias y municipios desde API del gobierno

// INICIO Manejo de datos del formulario

$("#btnEnviar1").submit(function (e) { 
    e.preventDefault();

    let nombreApellido= $(e.target).children().eq(0).children().eq(1)
    console.log(nombreApellido);
    console.log(nombreApellido[0].value);

    let mail= $(e.target).children().eq(1).children().eq(1)
    console.log(mail);
    console.log(mail[0].value);

    let provinciaSelec= $(e.target).children().eq(2).children().eq(1)
    console.log(provinciaSelec);
    console.log(provinciaSelec[0].value);

    let municioSelec= $(e.target).children().eq(3).children().eq(1)
    console.log(municioSelec);
    console.log(municioSelec[0].value);

    let wasap= $(e.target).children().eq(4).children().eq(1)
    console.log(wasap);
    console.log(wasap[0].value);



 
});
//  FIN Manejo de datos del formulario


// INICIO Guardo datos del carrito en local storage.
function guardarEnStorage() {

    const enJson= JSON.stringify(agregarAlcarrito1);
            console.log(enJson);
            localStorage.setItem("productosDelCarrito", enJson)
            
            


  }

//   FIN Guardo datos del carrito en local storage.


  
 