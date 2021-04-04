
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