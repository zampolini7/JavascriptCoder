//----------------------------------FUNCIONES----------------------------------//
//AGREGAMOS UNA ESTRUCTURA HTML AL CONTENEDOR DE ID contenidoGenerado
function generarHTMLJQ(robot){
    //UTILIZAMOS EL METODO DE jQUERY PREPEND PARA AGREGAR
    $('#contenidoGenerado').prepend(componenteCard(robot))
}

function generarProductos(listado){
    $('#contenidoGenerado').empty();
    //POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML ASOCIADA.
    for (const producto of listado) {
        //LLAMADA A LA FUNCIÓN DE generarHTML POR CADA ROBOT. PASAMOS LA INFORMACION DEL "robot" POR PARÁMETRO.
        generarHTMLJQ(producto);
    }
    //DEFINIMOS EL MANEJADOR DE EVENTOS PARA TODOS LOS BOTONES CON CLASE .btn-producto
    $(".btn-producto").click(agregarProducto);
}

function agregarProducto(e){
    //VER SI EL PRODUCTO YA ESTA EN EL CARRITO CON FIND
    let producto = SELECCIONADOS.find(producto => producto.id == e.target.id);
    if (producto != undefined) {
        //ESTA EN EL CARRITO, ENTONCES NO ES NECESARIO BUSCAR LA INFORMACION EN EL ARRAY DE DATOS, SUMAMOS UNA CANTIDAD
        producto.addCantidad();
    } else {
        //NO ESTA EN EL CARRITO, ENTONCES LO BUSCAMOS EN EL ARRAY DE DATOS
        let seleccionado = DATOSAPP.find(producto => producto.id == e.target.id);
        SELECCIONADOS.push(new Producto(seleccionado));
    }
    console.log(SELECCIONADOS);
    //DESAPARECER ELEMENTO CLICKEADO
    //e.target.fadeOut();
    //$(e.target).fadeOut();
    //$(e.target).parent().parent().parent().parent().fadeOut();
    $(e.target).parents(".card").fadeOut();
    generarCarrito();
}   

function generarCarrito(){
    //RENDER CARRITO (SALIDA DEL CARRITO SEGUN LA INFORMACION DEL ARRAY DE SELECCIONADOS)
    $("#carrito").empty();
    for (const producto of SELECCIONADOS) {
        $("#carrito").append(`<div  class="col-md-12">
                                <h5>${producto.nombre}- Cantidad ${producto.cantidad} 
                                Total: ${producto.getTotal()}<button id="${producto.id}" <button class="btnDelete">x</button></h5>
                             </div>`);
    }
    /*
    $('html, body').animate({
        scrollTop: $("#carrito").offset().top  
    }, 2000);
    
    $('#carrito').fadeIn(1000, ()=>{
        $('#carrito').fadeOut(1000);
    });
    */
   $(".btnDelete").click(function (e) { 
       e.preventDefault();
       eliminarFilter(e.target.id);
       //eliminarDelete(e.target.id);
       generarCarrito();
   });
   
    $('html, body').animate({
        scrollTop: $("body").offset().top  
    }, 400, ()=>{
        $('#carrito').fadeIn(400, ()=>{
            $('#carrito').fadeOut(4000);
        });
    });
}

//ELIMINAR ELEMENTO DEL ARRAY USANDO FILTER
function eliminarFilter(id){
    //RE-ASIGNAMOS EL ARRAY DE SELECCIONADOS USANDO FILTER
   SELECCIONADOS = SELECCIONADOS.filter(producto => producto.id != id);
}
//ELIMINAR ELEMENTO DEL ARRAY USANDO DELETE Y SLICE
function eliminarDelete(id){
    //PRIMERO IDENTICAMOS EL OBJETO SELECCIONADO
    const objeto = SELECCIONADOS.find(x => x.id == id);
    //LUEGO OBTENEMOS LA POSICION DEL OBJETO EN EL ARRAY
    const idObj  = SELECCIONADOS.indexOf(objeto)
    //PODEMOS HACER DELETE USANDO ESTA POSICION
    delete SELECCIONADOS[idObj];
    //PERO TAMBIEN ES NECESARIO HACER EL SPLICE PARA REDIMENSIONAR EL ARRAY DE SELECCIONADOS
    SELECCIONADOS.splice(idObj, 1);
}