
// Funcion creadora de objetos del carrito

function creaProducto (nombre, precio){

    this.nombre = nombre;
    this.precio = precio;
}


// objetos del carrito creados

let producto1 = new creaProducto ('wineBox', 2500);

let producto2 = new creaProducto ('teaTime', 2600);

let producto3 = new creaProducto ('movieNigth', 2400);

let producto4 = new creaProducto ('parriBox', 3000);

let producto5 = new creaProducto ('dealiMets', 2800);

let producto6 = new creaProducto ('wakeUp', 3000);

let producto7 = new creaProducto ('beerBox', 3200);

let producto8 = new creaProducto ('aperolBox', 3200);

let producto9 = new creaProducto ('ginBox', 3500);

let producto10 = new creaProducto ('memoriesBox', 3200);

let producto11 = new creaProducto ('provoBox', 2900);




const producto1 = new productos1 ;

const producto2 = new productos1  ('teaTime', 2600);

const producto3 = new productos1  ('movieNigth', 2400);

const producto4 = new productos1  ('parriBox', 3000);

const producto5 = new productos1 ('dealiMets', 2800);

const producto6 = new productos1  ('wakeUp', 3000);

const producto7 = new productos1  ('beerBox', 3200);

const producto8 = new productos1  ('aperolBox', 3200);

const producto9 = new productos1  ('ginBox', 3500);

const producto10 = new productos1  ('memoriesBox', 3200);

const producto11 = new productos1  ('provoBox', 2900);

const producto12 = new productos1 ('wineBox', 2500);

console.log ('Usted a creado un nuevo producto', producto1 );

console.log ('Usted a creado un nuevo producto', producto2 );





// Voy a necesitar almacenar los datos del carrito en un array, y también manipular sus datos.


let carrito = [producto1, producto2, producto3, producto4, producto5, producto6, 
    producto7, producto8, producto9, producto10, producto11];

console.log (carrito);

let carritoCompra = [ ];


// Tengo dudas de sobre como operar sobre el carrito, pero calculo que cuando veamos el DOM, y algunas 
// cosas más entenderemos el como vincular todo.


// Por ahora pienso que creando los objetos, teniendo un array que los contenga, y otro donde pueda ir
// sumando o restando objetos, por ahí creo que viene la cosa. Por supuesto que para recorrerlos
// voy a necesitar algun que otro forEach, if, y seguramente alguna linea de manipulación de datos en el array.
