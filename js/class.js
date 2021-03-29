class productos1 {

    constructor(id,nombre, precio, contenido,img) {
        this.id= id;
        this.nombre= nombre;
        this.precio= parseFloat(precio);
        this.contenido= contenido;
        this.img= img;

    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

}


