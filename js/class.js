class productos1 {

    constructor(id,nombre, precio, contenido) {
        this.id= id;
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.contenido= contenido;

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

}


