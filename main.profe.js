//  PLANTILLA CLASE 13 - jQuery
//----------------------------------EVENTOS----------------------------------//
$(document).ready(function () {
  //$("h2").hide();
  //$("h2").show();
  /*
  $("h2").fadeIn(2000, function(){
      console.log("Animacion Terminada")
      $("h2").fadeOut(2000);
  });
  */
  $("#dropdownMenuButton").click(function (e) { 
    $("#carrito").toggle();      
  });

  $("#queryLista").click(function (e) { 
      let min = $("#minQuery").val();
      let max = $("#maxQuery").val();
      const filtrados = DATOSAPP.filter(producto => (producto.precio > min) &&  (producto.precio < max));
      console.log(filtrados);
      generarProductos(filtrados);
  });
});
//----------------------------------PROGRAMA PRINCIPAL----------------------------------//
generarProductos(DATOSAPP);
