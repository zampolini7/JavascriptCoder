// Generar Html con DOM
let listadosDeProductos1 = DATOS;


let crearElementoById = document.getElementById("crearId1");
let cards = document.createElement ("div");
cards.classList.add("row");
cards.classList.add("justify-content-center");


function crearElemento(){
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
                        `;
            
    crearElementoById.appendChild(cards);
    }

}






// Asociando Eventos
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

    // agregarProductoAlCarritoFunc(agregarAlcarrito1);
    }
}


// console.log(agregarAlcarrito1)




// function agregarProductoAlCarritoFunc(listado){

//     let padre = document.getElementById( "carrito")
//     let html = "";
//     let total= 0;
// }
//     for (const producto of agregarProductoAlCarrito1) {
//         total = total + producto.precio
//         html += 
//         `   <div class="container">
//                         <div class="row">
//                             <img class="col-2" src="${producto.img}" alt="imagen de producto">
//                             <h5 class="col-2"> ${producto.nombre} </h5>
//                             <button type="button" class="col-1 btn btn-secondary">Secondary</button>
//                             <h5 class="col-2"> ${producto.cantidad} </h5>
//                             <button type="button" class="btn btn-secondary">Secondary</button>
//                             <button ${producto.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${producto.precio}</button>
//                             </div>
//                     </div>
//                  `


//                         //     `<div class="card mb-3" style="max-width: 540px;">
//                         //         <div class="row no-gutters">
//                         //         <div class="col-md-4">
//                         //             <img src="${producto.img}" alt="...">
//                         //     </div>
//                         //     <div class="col-md-8">
//                         //         <div class="card-body">
//                         //         <h5 class="card-title">${producto.nombre}</h5>
//                         //         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         //         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                         //         // <button ${producto.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${producto.precio}</button>
                                
//                         //         </div>
//                         //     </div>
//                         //     </div>
//                         // </div>`
        
//     }

crearElemento()
asociarEventos()
