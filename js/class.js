class productos1 {

    constructor(id,nombre, precio, contenido,imagen) {
        this.id= id;
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.contenido= contenido;
        this.imagen= imagen;

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

}


