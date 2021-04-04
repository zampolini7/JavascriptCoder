class productos1 {

    constructor(id,nombre, precio, contenido, img, cantidad) {
        this.id= id;
        this.nombre= nombre;
        this.precio= parseFloat(precio);
        this.contenido= contenido;
        this.img= img;
        this.cantidad= cantidad;

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

    descuento(resta){
        this.precio -= resta;
    }

    sumarCantidad(){
        this.cantidad++; 
      }

}


