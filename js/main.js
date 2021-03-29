//INICIO AGREGAR ELEMENTOS AL DOM
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

                                            <a id="${elemento.id}" class="btn text-light bg-dark d-flex justify-content-center">
                                                    Agregar al carrito x ${elemento.precio}
                                            </a>
                                            
                                        </div>
                                    </div>
                                `
        };
        
        

crearElementoById.appendChild(cards);


// FIN AGREGAR ELEMENTOS CARD AL DOM

// Agregar productos al carrito y mostrarlo en el html


let primerElementoAlCarrito = document.getElementById("2")
primerElementoAlCarrito.addEventListener("click", llamado)
function llamado (e){
    let seleccionado = listadosDeProductos1.find(amigo => amigo.id ==e.target.id)
    CarritoDeproductos.push(seleccionado)
    console.log(seleccionado)
    console.log(CarritoDeproductos)
    

    let agregarAlcarrito1 = document.getElementById ("carrito")
    let cardsCarrito = document.createElement("div")
        for (const elemento1 of CarritoDeproductos) {
            cardsCarrito.innerHTML += 

                                        `   <div class="container">
                                                <div class="row">
                                                <img class="col-3" src="${elemento1.img}" alt="imagen de producto">
                                                <h5 class="col-4"> ${elemento1.nombre} </h5>
                                                
                                                <button ${elemento1.id} type="button" class="btn btn-lg btn-primary col-2" disabled>${elemento1.precio}</button>
                                                </div>
                                            </div>
                                        
                                        
                                        
                                        
                                        
                                        `
            
        }
    agregarAlcarrito1.appendChild(cardsCarrito);

 

}


// Segundo elemento al carrito

let segundoElementoAlCarrito = document.getElementById("3")
segundoElementoAlCarrito.addEventListener("click", llamado)
function llamado (e){
    let seleccionado = listadosDeProductos1.find(amigo => amigo.id ==e.target.id)
    CarritoDeproductos.push(seleccionado)
    console.log(seleccionado)
    console.log(CarritoDeproductos)
    

    let agregarAlcarrito1 = document.getElementById ("carrito")
    let cardsCarrito = document.createElement("div")
    cardsCarrito    .classList.add("row");
    cards.classList.add("justify-content-center");

        for (const elemento1 of CarritoDeproductos) {
            cardsCarrito.innerHTML += 

                                        `   <div class="container">
                                                <div class="row">
                                                <img class="col-3" src="${elemento1.img}" alt="imagen de producto">
                                                <h5 class="col-4"> ${elemento1.nombre} </h5>
                                                
                                                <button ${elemento1.id} type="button" class="btn btn-lg text-white bg-dark col-2" disabled>${elemento1.precio}</button>
                                                </div>
                                            </div>
                                        
                                        
                                        
                                        
                                        
                                        `
            
        }
    agregarAlcarrito1.appendChild(cardsCarrito);

 

}

// FIN AGREGAR PRODUCTOS AL CARRITO

