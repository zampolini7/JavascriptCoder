//INICIO AGREGAR ELEMENTOS AL DOM
let crearElementoById = document.getElementById("crearId1");
let cards = document.createElement ("div");
    for (const elemento of listadosDeProductos1){
        cards.innerHTML +=  `<div  class="card-deck"> 


                                    <div class="card  col-6 d-flex justify-content-center">
                                        <img class="card-img-top" src="images1/parriboxvino1.jpeg" alt="Card image cap">
                                        <div class="card-body">
                                            <h5  class="card-title"> ${elemento.nombre}</h5>
                                            
                                            <p> ${elemento.contenido}</p>

                                            <a id="${elemento.id}" class="btn btn-primary d-flex justify-content-center">
                                                    Agregar al carrito x ${elemento.precio}
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>`
        };
        
        

crearElementoById.appendChild(cards);


// FIN AGREGAR ELEMENTOS CARD AL DOM


let boton23 = document.getElementById ("2")
boton23.addEventListener("click", prueba)
function prueba(){
    console.log("Usted ha añadido al carrito su producto");
    
    let div = document.createElement("div")
    div.innerHTML +=`   <ul class="list-group">
                            <li class="list-group-item">
                            <h5 > ${listadoDeProductos.id[2]}</h5>
                            </li>
                            
                        </ul>
    
    
    
    `
    boton23.appendChild(boton23)
}
