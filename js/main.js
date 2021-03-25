//INICIO AGREGAR ELEMENTOS AL DOM
let crearElementoById = document.getElementById("crearId1");
let cards = document.createElement ("div");
cards.innerHTML= `
                    <div class="row">
                                
                    </div> 


                `
    for (const elemento of listadosDeProductos1){
        cards.innerHTML +=  `   
                                    
                                    <div class="card col-3 d-flex">
                                        <img class="card-img-top" src="images1/parriboxvino1.jpeg" alt="Card image cap">
                                        <div class="card-body">
                                            <h5  class="card-title"> ${elemento.nombre}</h5>
                                            
                                            <p> ${elemento.contenido}</p>

                                            <a id="${elemento.id}" class="btn btn-primary d-flex justify-content-center">
                                                    Agregar al carrito x ${elemento.precio}
                                            </a>
                                            
                                        </div>
                                    </div>
                                `
        };
        
        

crearElementoById.appendChild(cards);


// FIN AGREGAR ELEMENTOS CARD AL DOM


// let PrimerElementoAlCarrito = document.getElementById ("2")
// PrimerElementoAlCarrito.addEventListener("click", prueba)
// function prueba(){
//     console.log("Usted ha añadido al carrito su producto");
//     let PrimerElementoAlCarrito = document.getElementById ("2")
//     let div = document.createElement("div")
//     div.innerHTML +=`   <ul class="list-group">
//                             <li class="list-group-item">
//                             <h5 > ${listadoDeProductos.id[2]}</h5>
//                             </li>
                            
//                         </ul>
    
    
    
//     `
//     PrimerElementoAlCarrito.appendChild()
// }


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
                                                <img class="col-3" src="" alt="imagen de producto">
                                                <h5 class="col-4"> ${elemento1.nombre} </h5>
                                                
                                                <button ${elemento1.id} type="button" class="btn btn-lg btn-primary col-2" disabled>${elemento1.precio}</button>
                                                </div>
                                            </div>
                                        
                                        
                                        
                                        
                                        
                                        `
            
        }
    agregarAlcarrito1.appendChild(cardsCarrito);

    // let añadirAlCarrito= document.getElementById ("2")

}



let sumarElementos= document.getElementById("2")
sumarElementos.addEventListener("click", sumarTotal1);
function sumarTotal1(e){

        let precioParaSumar = listadosDeProductos1.find(evento => evento.id === e.target.precio)
        CarritoParaOperaciones.push(precioParaSumar);
        console.log(CarritoParaOperaciones);
}

