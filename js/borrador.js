
// METIENDO LOS OBJETOS CREADOS AL ARRAY
// listadoDeProductos.push (new productos1(1,"DeliBox",2600, " ",  ))
// listadoDeProductos.push (new productos1(2,"ParriBox", 2500, "- Tablita de pino 20x30cms - Cuchillito Mission con hoja de 11cm y vaina de ecocuero - Chips de astillas 'Humos' para ahumar y hacer asados deliciosos! - Repasador de lienzo de 60x45cm - Mini cajita de fósforos - Sal especiada: Sal parrillera, orégano, tomillo, merienda, ajitos, pimentón, nuez moscada y nuestro ingrediente secreto - Sal & pimienta: Mix de sal parrillera y 3 tipos de pimientas molidas - Chimichurri: le agregas aceite y listo - Salame de Oncativo: para disfrutar mientras estas al lado de la parrilla ."));
// listadoDeProductos.push (new productos1(3,'teaTime', 2600));
// listadoDeProductos.push (new productos1(4,'movieNigth', 2400));
// listadoDeProductos.push (new productos1(5,'parriBox', 3000));
// listadoDeProductos.push (new productos1(6,'dealiMets', 2800, "Cerveza Patagonia 🧀 Queso Di Malga 🔥 2 Provoletas especiadas 🥩 Salame de Oncativo 🥓 Pack de Bondiola 🥓 Pack de Lomo Horneado 🥓 Pack de Jamón Crudo 🥓 Pack de Lomito 🥖 Baguettin de pan blanco 🌳 Frasquito con aceitunas 🥜 Frasquito con maní ♻️ Bolsita de tela reutilizable que contiene toda la picadita"));
// listadoDeProductos.push (new productos1(7,'wakeUp', 3000, "🍵 Bowl de Ceramica 🥣 Individual antimanchas y servilleta a tono 🥄 Cucharita de Bambú 🥜 Frasquito con granola 🍯 Frasquito con miel ."));
// listadoDeProductos.push (new productos1(8,'beerBox', 3200, "4 variedades de cerveza Patagonia en latas (se vale pedir todas de la misma 🤪) 🍻 2 copas cerveceras 😉 Juego tipo Jenga de madera en bolsita de tela re-utilizable 🥜 Frasquito de maní"));
// listadoDeProductos.push (new productos1(9,'aperolBox', 3200, "🍹Botella Aperol 🍾 Mini Chandon 🍷 Dos copitas sin tallo 🥄 Cuchara coctelera y medidor de acero 🍊 5 rodajas de cítricos para acompañar el trago"));
// listadoDeProductos.push (new productos1(10,'ginBox', 3500, "Gin Príncipe de los Apóstoles 🥄 Cuchara de cóctel 🥄 Medida para tragos de acero 🍹2 copones de Gin 🍊5 rodajitas de cítricos disecados"));
// listadoDeProductos.push (new productos1(11,'memoriesBox', 3200));
// listadoDeProductos.push (new productos1(12,'provoBox', 2900));
// listadoDeProductos.push (new productos1(13,'wineBox', 2500, "Vino Cordero con Piel de Lobo - Tablita de madera de pino - Juego de copas - Crackers - Y un delicioso queso Cambembert "));


const GuardarEnJson =(clave,valor) => (localStorage.setItem(clave,valor));


// INICIO DE EVENTO PARA SUMAR EL TOTAL DEL CARRITO

let sumarElementos= document.getElementById("2")
sumarElementos.addEventListener("click", sumarTotal1);
function sumarTotal1(e){
        console.log(CarritoDeproductos.precio)

        // let precioParaSumar = listadosDeProductos1.find(evento => evento.id === e.target.precio)
        // CarritoParaOperaciones.push(precioParaSumar);
        // console.log(CarritoParaOperaciones);
        // console.log(CarritoDeproductos)
}






let crearElementoById = document.getElementById("crearId1");
let cards = document.createElement ("div");
cards.classList.add("row");
cards.classList.add("justify-content-center");
    for (const elemento of listadosDeProductos1){
        cards.innerHTML +=  `   
                                    
                                    <div class="card col-3 d-flex m-2">
                                        <img class="card-img-top" src= "${elemento.img}" alt="Card image cap">
                                        <div class="card-body">
                                            <h5  class="card-title"> ${elemento.nombre}</h5>
                                            
                                            <p> ${elemento.contenido}</p>

                                            <a id="${elemento.id}" class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                                                    Agregar al carrito x ${elemento.precio}
                                            </a>
                                            
                                        </div>
                                    </div>
                                `
        };
        
        

crearElementoById.appendChild(cards);





// let primerElementoAlCarrito = document.getElementsByClassName("btnComprar")
// primerElementoAlCarrito.addEventListener("click", llamado)
// function llamado (e){
//     let seleccionado = listadosDeProductos1.find(amigo => amigo.id ==e.target.id)
//     CarritoDeproductos.push(seleccionado)
//     console.log(seleccionado)
//     console.log(CarritoDeproductos)
    

//     let agregarAlcarrito1 = document.getElementById ("carrito")
//     let cardsCarrito = document.createElement("div")
//         for (const elemento1 of CarritoDeproductos) {
//             cardsCarrito.innerHTML += 

//                                         `   <div class="container">
//                                                 <div class="row">
//                                                 <img class="col-3" src="${elemento1.img}" alt="imagen de producto">
//                                                 <h5 class="col-4"> ${elemento1.nombre} </h5>
                                                
//                                                 <button ${elemento1.id} type="button" class="btn btn-lg btn-primary col-2" disabled>${elemento1.precio}</button>
//                                                 </div>
//                                             </div>
                                        
                                        
                                        
                                        
                                        
//                                         `
            
//         }
//     agregarAlcarrito1.appendChild(cardsCarrito);

 

// }


// Segundo elemento al carrito

// let segundoElementoAlCarrito = document.getElementById("3")
// segundoElementoAlCarrito.addEventListener("click", llamado)
// function llamado (e){
//     let seleccionado = listadosDeProductos1.find(amigo => amigo.id ==e.target.id)
//     CarritoDeproductos.push(seleccionado)
//     console.log(seleccionado)
//     console.log(CarritoDeproductos)
    

//     let agregarAlcarrito1 = document.getElementById ("carrito")
//     let cardsCarrito = document.createElement("div")
//     cardsCarrito    .classList.add("row");
//     cards.classList.add("justify-content-center");

//         for (const elemento1 of CarritoDeproductos) {
//             cardsCarrito.innerHTML += 

//                                         `   <div class="container">
//                                                 <div class="row">
//                                                 <img class="col-3" src="${elemento1.img}" alt="imagen de producto">
//                                                 <h5 class="col-4"> ${elemento1.nombre} </h5>
                                                
//                                                 <button ${elemento1.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${elemento1.precio}</button>
//                                                 </div>
//                                             </div>
                                        
                                        
                                        
                                        
                                        
//                                         `
            
//         }
//     agregarAlcarrito1.appendChild(cardsCarrito);

 

// }


// boton.onclick = () => {console.log(EventTarget)}


// boton.addEventListener("click",respuestaClick)
// function respuestaClick(e){
//        console.log(target)
//        console.log(e)
//     }
    
// for (const elementos of primerElementoAlCarritoB) 



// let crearElementoById = document.getElementById("crearId1");
// let cards = document.createElement ("div");
// cards.classList.add("row");
// cards.classList.add("justify-content-center");


// function crearElemento(elemento){
//     cards.innerHTML +=  `         
//                             <div class="card col-3 d-flex m-2">
//                                 <img class="card-img-top" src= "${elemento.img}" alt="Card image cap">
//                                 <div class="card-body">
//                                     <h5  class="card-title"> ${elemento.nombre}</h5>
                                    
//                                     <p> ${elemento.contenido}</p>

//                                     <a id="${elemento.id}" class="btn text-light bg-dark d-flex justify-content-center btnComprar">
//                                             Agregar al carrito x ${elemento.precio}
//                                     </a>
                                    
//                                 </div>
//                             </div>
//                         `;
            
//     crearElementoById.appendChild(cards);

// }

// $(window).load(function () {
//     $('#crearId2').html(`<div class="alert alert-warning" role="alert">
//                             ¡Todos los productos ya fueron cargados!
//                         </div>`);

//     console.log ("¡Todos los productos ya fueron cargados!");
// });



function asociarEventos(){

    let botones = document.getElementsByClassName("btnComprar")
    for (const boton of botones) {
    boton.onclick = SeleccionarProductos1;

}


function SeleccionarProductos1 (e) {
    console.log(e.target);
    console.log(e.target.id);
    
    let productoSeleccionadoXFind = listadosDeProductos1.find (elemento => elemento.id == e.target.id)
    agregarAlcarrito1.push(productoSeleccionadoXFind)
    console.log (agregarAlcarrito1)


    
    // const nuevoProductoEnCarrito = new productos1 (productoSeleccionadoXFind)
    // console.log(agregarAlcarrito1);
     // agregarAlcarrito1.push(productoSeleccionadoXFind)
    // nuevoProductoEnCarrito= new productos1(productoSeleccionadoXFind)
    // nuevoProductoEnCarrito.sumariva()
    // console.log(nuevoProductoEnCarrito)
    // productoSeleccionadoXFind.descuento(200);
    // agregarAlcarrito1.push(productoSeleccionadoXFind)
    // agregarAlcarrito1.push(nuevoProductoEnCarrito)
    


    // if (productoSeleccionadoXFind === undefined){
    //     let listadosDeProductos1   = listadosDeProductos1.find( elemento => elemento.id == e.target.id );
    //     // let nuevoProducto = new Producto(productoSeleccionado);
    //     agregarAlcarrito1.push(productoSeleccionadoXFind);
    //   }else{
    //     console.log(listadosDeProductos1)
    //   }

    //   console.warn(agregarAlcarrito1);
    // //   agregarCarrito(agregarAlcarrito1 );

    agregarProductoAlCarritoFunc(agregarAlcarrito1);
}
// console.log(agregarAlcarrito1)




function agregarProductoAlCarritoFunc(listado){
    let padre = document.getElementById( "carrito")
    let html = "";
    let total= 0;
    for (const producto of listado) {
        total = total + producto.precio
        html += 
        `   <div class="container">
                        <div class="row">
                            <img class="col-2" src="${producto.img}" alt="imagen de producto">
                            <h5 class="col-2"> ${producto.nombre} </h5>
                            <button type="button" class="col-1 btn btn-secondary">Secondary</button>
                            <h5 class="col-2"> ${producto.cantidad} </h5>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button ${producto.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${producto.precio}</button>
                            </div>
                    </div>
                 `


                        //     `<div class="card mb-3" style="max-width: 540px;">
                        //         <div class="row no-gutters">
                        //         <div class="col-md-4">
                        //             <img src="${producto.img}" alt="...">
                        //     </div>
                        //     <div class="col-md-8">
                        //         <div class="card-body">
                        //         <h5 class="card-title">${producto.nombre}</h5>
                        //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        //         // <button ${producto.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${producto.precio}</button>
                                
                        //         </div>
                        //     </div>
                        //     </div>
                        // </div>`
        
    }
    padre.innerHTML= html;
    padre.appendChild(total)

}



// post
$.post("url", "lo que quiero enviar", function(data, estado){
    console.log(data);
    $("#Dondequieroagregar").append (`Hola usuario ${data.id}`)
})