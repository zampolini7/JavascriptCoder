//FUNCION QUE RETORNA UNA PLANTILLA LITERAL CON LOS DATOS DEL ROBOT ENVIADO POR PARAMETRO
function componenteCard(producto){
    return `<div class="card m-4">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${producto.imagen}" class="img-thumbnail">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <h5 class="card-title"> $ ${producto.precio}</h5>
                    <button id=${producto.id} type="button" class="btn btn-primary btn-producto">Agregar</button>
                  </div>
                </div>
              </div>
            </div>`
  }
  