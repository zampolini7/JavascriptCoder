// Variables
// let variable1 = "Soy una variable";

// let variable2;

// variable2 = 15;

// variable1 = "Ahora tengo otro valor";

// const CONSTANTE = "Soy una constante";

//  ====================================================== //


// si no le pongo un valor a la variable??

// Tipos de variables
// let tipoString = "Hola soy un string";

// let tipoNumberInt = 15;
// let tipoNumberFloat = 15.512312;

// let tipoBoolean1 = true;
// let tipoBoolean2 = false;

// let comparacion; -> FALSE
// let comparacion = undefined; -> FALSE
// let comparacion = null; -> FALSE
// let comparacion = ""; -> FALSE
// let comparacion = 0; -> FALSE

// console.log("=== Variable Original ===")
// console.log(typeof comparacion)
// console.log(comparacion)

// let comparacionBool = Boolean(comparacion)

// console.log("=== Variable Parseada Booleana ===")
// console.log(typeof comparacionBool)
// console.log(comparacionBool)

// console.log("=== Resultado del if ===")
// if (comparacion) {
// 	console.log("Comparacion VERDADERA")
// } else {
// 	console.log("Comparacion FALSA")
// }

// Comparaciones

// Igual
// let resultado = (10 == 5);

// Estrictamente igual
// let resultado = (10 === "10");

// Distinto
// let resultado = (10 != 5);

// Estrictamente distinto
// let resultado = (10 !== "10")

// let saldo = 500;
// let tarjeta = false;

// AND (y)
// let resultado = (saldo > 500 && tarjeta)

// OR (o)
// let resultado = (saldo >= 500 || tarjeta)

// console.log(resultado)

// let mostrado = false;
// let usuario = true;

// let texto = "test1";

// if ( (mostrado && usuario) || texto != "test1" ) {
// 	console.log("Condicion Verdadera")
// } else {
// 	console.log("Condicion Falsa")
// }

// =============================== Funciones ===============================

// sumar(33, 1); /* Paso argumentos a la funcion */
// restar();

// Function declaration
// function sumar(a, b) { /* "a" y "b" son los parámetros de la función */
// 	// console.log(`El resultado de la suma ${suma}`)
// 	return a + b;
// }

// let resultadoSuma = sumar(12, 7);
// console.log(`El resultado de la suma ${resultadoSuma}`)

// Function expression
// const restar = function () {
// 	let a = 25;
// 	let b = 13;
// 	let resta = a - b;
// 	console.log(`El resultado de la resta es ${resta}`)
// }

// Arrow function (con RETURN implícito)
// const restar = (a, b) => a - b;

// let resta = restar(30, 13);
// console.log(`El resultado de la resta es ${resta}`)

// =============================== Ciclos ===============================

// Ciclo FOR
// for (let i = 0; i <= 10; i++) {
// 	if (i == 5) {
// 		// Paso a la iteración siguiente i = 6
// 		continue;
// 	}

// 	console.log(`El valor de "i" es ${i}`);

// 	if (i == 8) {
// 		break;
// 	}
// }

// console.log("Después del for")

// let i = 1;
// let nombre = "Martin"

// Ciclo WHILE
// while (nombre == "Martin") {
// 	if (i == 5) {
// 		nombre = "Carlos"
// 	}
// 	console.log(`El valor de "i" es ${i}`);
// 	i++;
// }

// console.log("Luego del while")

// Ciclo DO-WHILE (Se ejecuta por lo menos una vez)
// do {
// 	console.log(`El valor de "i" es ${i}`);
// 	i++;
// } while (i <= 10)

// console.log("Luego del while")


// Switch-Case para evitar hacer muchos if-else if
// let numero = 13

// switch (numero) {
// 	case 1:
// 		console.log(`La variable numero vale 1`);
// 		break;
// 	case 2:
// 		console.log(`La variable numero vale 2`);
// 		break;
// 	case 3:
// 		console.log(`La variable numero vale 3`);
// 		break;
// 	case 4:
// 		console.log(`La variable numero vale 4`);
// 		break;
// 	case 5:
// 		console.log(`La variable numero vale 5`);
// 		break;
// 	default:
// 		console.log("El numero no es 1, 2, 3, 4 o 5");
// 		break;
// }

/* ================================ Repaso ================================ */

// Variables
// let producto = "Monitor 20 pulgadas";
// let frase = "Y entonces dijo: \"no hagas nada\" ";

// console.log(typeof producto);
// console.log(producto);
// console.log("================");

// producto = 20;
// console.log(typeof producto);
// console.log(producto);
// console.log("================");

// producto = true;
// console.log(typeof producto);
// console.log(producto);

/* ================================ Funciones (Continuación) ================================ */


// let nombre = prompt("Hola!, ingresa tu nombre");
// saludar(nombre);

// let operacion = prompt("Qué operación quiere realizar? Las opciones son: \"sumar\", \"restar\", \"multiplicar\" y \"dividir\" ");

// let numero1 = Number(prompt("Ingrese el primer número"));
// let numero2 = Number(prompt("Ingrese el segundo número"));

// let resultado;

// operar(numero1, numero2, operacion);

// function operar(n1, n2, op) {
// 	switch (op) {
// 		case "sumar":
// 			resultado = sumar(n1, n2);
// 			break;
// 		case "restar":
// 			resultado = restar(n1, n2);
// 			break;
// 		case "multiplicar":
// 			resultado = multiplicar(n1, n2);
// 			break;
// 		case "dividir":
// 			resultado = dividir(n1, n2);

// 			break;
// 		default:
// 			resultado = "No existe esa opción, intente nuevamente";
// 	}

// 	mostrarResultado(resultado);
// }

// function mostrarResultado(resultado) {
// 	console.log(`El resultado de la operación es: ${resultado}`)
// 	alert(`El resultado de la operación es: ${resultado}`)
// }

// function saludar(nombre = "Sin nombre") {
// 	console.log(`Bienvenido "${nombre}" a la clase`)
// 	alert(`Bienvenido "${nombre}" a la clase`);
// }

// function sumar(a, b) {
// 	return a + b;
// }
// function restar(a, b) {
// 	return a - b;
// }
// function multiplicar(a, b) {
// 	return a * b;
// }
// function dividir(a, b) {
// 	return a / b;
// }


/* ================================ Objetos ================================ */
// Object literal
// let persona = {
// 	nombre: "Juan",
// 	altura: 1.75,
// 	peso: 75,
// 	img: 'img/imagen.jpg',
// 	saludar: function () {
// 		console.log(`Hola, mi nombre es ${this.nombre}`)
// 	}
// }

// console.log(persona);

// persona.nombre = prompt("Ingrese un nuevo nombre");

// function imprimirMensaje(mensaje) {
// 	console.log(`${mensaje} (desde la funcion imprimirMensaje)`);
// }

// Object constructor
// function Cliente(nombre, altura, peso) {
// 	// Definimos las propiedades o atributos
// 	this.nombre = nombre;
// 	this.altura = altura;
// 	this.peso = peso;

// 	// Definimos los métodos (acciones)
// 	this.saludar = () => {
// 		console.log(`Hola, mi nombre es ${this.nombre}`)
// 	}

// 	this.arrancar = imprimirMensaje;
// }

// let cliente1 = new Cliente("Diego", 1.71, 73);
// let cliente2 = new Cliente("Gabriel", 1.85, 90);

// Con la palabra reservada "new"
// let objetoNew = new Object();
// objetoNew.nombre = "Raul";
// objetoNew.altura = 1.75;
// objetoNew.peso = 76;

// console.log(cliente1.altura)
// console.log(cliente2["peso"])

// Uso de sintaxis objeto[propiedad]
// function accederPropiedad(prop) {
// 	console.log("La propiedad es " + cliente1[prop]);
// }

// Function
// accederPropiedad("otro");

// Metodo
// cliente1.saludar();

// Borrar una propiedad
// delete cliente1.nombre;

// Crear una nueva propiedad
// cliente1.edad = 26;

// Modificar una propiedad
// cliente1.edad = 32;
// console.log(cliente1);

// Destructuring
// const nombre = cliente1.nombre;
// const altura = cliente1.altura;
// function imprimirPropiedades(objeto) {
// 	const { nombre, altura } = objeto
// 	console.log(`Extraemos ${nombre} y ${altura} del objeto`)
// }
// imprimirPropiedades(cliente2)
// imprimirPropiedades(objetoNew)

/* ========================= Repaso Objetos ========================= */

// let nombreProducto1 = "Teclado RGB";
// let precioProducto1 = 12000;
// let tipoProducto1 = "TKL";
// let anchoProducto1 = 25;
// let largoProducto1 = 12;


// Object literal
// const producto1 = {
// 	nombre: "Teclado RGB",
// 	precio: 12000,
// 	tipo: "TKL",
// 	ancho: 25,
// 	largo: 12,
// 	cant: 1,

// 	mostrarInfo: function () {
// 		console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
// 	}
// }

// const producto2 = {
// 	nombre: "Monitor 28 pulgadas",
// 	precio: 52000,
// 	tipo: "IPS",
// 	ancho: 35,
// 	largo: 20,
// 	cant: 1,

// 	mostrarInfo: function () {
// 		console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
// 	}
// }

// let nombre = producto1.nombre;
// console.log(nombre);

// let precio = producto1['precio'];
// console.log(precio);

// Destructuring
// const { nombre, precio, alto } = producto1;
// const nombre = producto1.nombre;
// const precio = producto1.precio;
// const alto = producto1.alto;

// console.log(nombre);
// console.log(precio);
// console.log(alto);

// producto1.mostrarInfo();
// producto2.mostrarInfo();

// Object constructor
// function Producto(nombre, precio, img) {
// 	this.nombre = nombre;
// 	this.precio = precio;
// 	this.img = img;

// 	this.mostrarInfo = function () {
// 		console.log(`El producto ${this.nombre} tiene un precio de ${precio} pesos`);
// 	};
// 	this.obtenerNombre = function () {
// 		return this.nombre;
// 	};
// 	this.obtenerPrecio = function () {
// 		return this.precio;
// 	};
// }

// Pidiendo informacion al usuario para instanciar un nuevo objeto
// const nombre = prompt("Ingrese el nombre del producto");
// const precio = Number(prompt("Ingrese el precio del producto"));

// const productoUsuario = new Producto(nombre, precio, 'img/imagen.jpg');
// console.log(productoUsuario);

// const producto10 = new Producto("Celular Android", 65000, "img/celular.jpg");
// const producto20 = new Producto("Notebook 15 pulgadas", 90000, "img/notebook.jpg");

// producto20.mostrarInfo();

// const nombreP10 = producto10.obtenerNombre();
// const precioP10 = producto10.obtenerPrecio();

// console.log(`El producto10 es ${nombreP10} y su precio es ${precioP10}`);

// const { nombre, precio, alto } = producto10;
// console.log(`El producto10 es ${nombre} y su precio es ${precio}`)

/* Ultima parte de objetos */

// 'use strict'

// const producto = {
// 	nombre: "Mate DBZ",
// 	color: "Marrón"
// }

/* Freezando (congelando) el objeto */
// Object.freeze(producto);
// console.log(Object.isFrozen(producto))

/* Seal (sellando) un objeto -> Puedo modificar prop existentes pero no borrar/agregar*/
// Object.seal(producto);
// console.log(Object.isSealed(producto))

// Acceder una propiedad/atributo de un objeto
// console.log(producto.color);

// producto.color = "Celeste";
// console.log(producto.color);

// delete producto.nombre;
// producto.tipo = "Artesanal";
// delete producto.color;
// producto.forma = "Prisma"

// console.log(producto)

// producto.fabricante = "Algún artesano";
// console.log(producto.fabricante);

// const producto2 = {
// 	tipo: "Artesanal",
// 	forma: "Prisma"
// }

// const { tipo } = producto2;

/* Unir objetos */
// const resultado = Object.assign(producto, producto2)
// const resultado = { ...producto, tipo };
// console.log(resultado);

// const keys = Object.keys(producto2);
// console.log(keys)

// const values = Object.values(producto2);
// console.log(values);

// const entries = Object.entries(resultado);
// console.log(entries);

/* ==================== Arreglos ==================== */

/* Creación de Arreglos */
// const dias = ['Lunes', 'Martes', 'Miercoes', 'Jueves'];

// let meses = new Array('Enero', 'Febrero', 'Marzo');


// console.log(dias);
// console.table(meses);

// const cambalache = [13, 'Hola', true, { curso: "Javascript", plataforma: "Coderhouse" }, [1, "dos", 3]];

// console.log(cambalache)

/* Accediendo valores de un arreglo */
// console.log(cambalache[3].curso);

/* Modificando valores de un arreglo */
// cambalache[3].curso = "React";
// console.log(cambalache[3].curso)

/* Agregando nuevos valores en una posición específica del arreglo */
// meses[3] = "Abril"; // Especificar la posicion en la que se agrega el nuevo elemento
// console.table(meses);

/* Agregando nuevos valores al FINAL del arreglo */
// meses.push("Mayo");
// console.table(meses);
// meses.push("Junio");
// console.table(meses);

/* Agregar un valor al INICIO del arreglo */
// dias.unshift("Primer dia");
// console.log(dias)

/* Eliminar el ÚLTIMO elemento del arreglo */
// const eliminado = dias.pop();
// console.log(eliminado);

/* Eliminar el PRIMER elemento del arreglo */
// dias.shift();
// console.log(dias)

/* (Spread operator -> ES6) Reutilizando el arreglo original */
// meses = ["Primer mes", ...meses];
// console.table(meses);

/* (Spread operator) Creando un nuevo arreglo */
// const nuevoMeses = [...meses, "Ultimo mes"];
// console.log(nuevoMeses);

/* Calcular longitud de un arreglo */
// const longitud = dias.length;
// console.log(longitud);

/* Arreglo multidimensional */
// const tabla = [1, 2, 3, [4, 5], 6, 7, 8, 9];
// tabla[2].pop();
// console.log(tabla);
// console.log(tabla[1][2]);

/* Elimino X elementos desde una posicion inicial */
// const porcion = tabla.splice(2, 3);
// console.log(porcion);

/* Extraer una porción del arreglo */
// const porcion = tabla.slice(2, 5);
// console.log(tabla);
// console.log(porcion);

/* Unir arreglos con sintaxis ES6 */
// const nuevoArreglo = [...dias, ...meses];

/* Unir arreglos con sintaxis antigua */
// const nuevoArreglo = dias.concat(meses);
// console.log(nuevoArreglo)


/* ===================== Continuación arreglos ===================== */

// const cambalache = [13, 'Hola', { curso: "Javascript", plataforma: "Coderhouse" }, [1, "dos", 3]];

// const dias = ['Lunes', 'Martes', 'Miercoes', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// let meses = new Array('Enero', 'Febrero', 'Marzo');

/* Recorrer arreglo con FOR */
// for (let i = 0; i < dias.length; i++) {
// 	console.log(dias[i]);
// }

/* Recorrer arreglo con forEach */
// dias.forEach(function (elem, index, array) {
// 	console.log(`Indice ${index}, valor ${array[index]}`);
// });

/* For of */
// for (let elem of dias) {
// 	console.log(elem)
// }

// let producto1 = {
// 	nombre: "Monitor",
// 	color: "Negro"
// }
// let producto2 = {
// 	nombre: "Mouse",
// 	color: "Rojo"
// }
// let producto3 = {
// 	nombre: "Teclado",
// 	color: "Gris"
// }
// let producto4 = {
// 	nombre: "Teclado",
// 	color: "Gris"
// }

// let carrito = [producto1, producto2, producto3, producto4];

/* Metodos de arreglos */

/* Consultar si se incluye un valor */
// let resultado = dias.includes('Lunes');

// let resultado = carrito.some(function (prod) {
// 	return prod.color == "Gris" && prod.nombre == "Teclado";
// });

/* Busca el PRIMER elemento que cumpla la condicion */
// let resultado = carrito.find(prod => prod.color == "Rojo" && prod.nombre == "Teclado")

/* Busca TODOS los elementos que cumplan una condicion */
// let resultado = carrito.filter(prod => prod.color == "Rojo" && prod.nombre == "Teclado")

// console.log(resultado);

/* Igual que el forEach pero genera un nuevo arreglo */
// let carritoFinal = carrito.map();

// let palabra = "Una PaLabra"
// let mail = "correo@correo.com"
// console.log(palabra.length)
// console.log(mail.indexOf("@"))

// console.log(palabra.toLocaleLowerCase())
// console.log(palabra.toUpperCase())

/* ===================== storage & JSON ===================== */

/* Agregar informacion en LS */
// localStorage.setItem("curso", "Javascript");
// localStorage.camada = 11300;

/* Leemos informacion del LS */
// let curso = localStorage.getItem("curso")
// console.log(curso)
// let camada = localStorage.camada;
// console.log(`Camada ${camada}`)

/* Remover un item */
// localStorage.removeItem("curso")

/* Limpiar todo el LS */
// localStorage.clear()

let producto1 = {
	nombre: "Monitor",
	color: "Negro",
	precio: 12000
}
let producto2 = {
	nombre: "Mouse",
	color: "Rojo"
}
let producto3 = {
	nombre: "Teclado",
	color: "Gris"
}
let producto4 = {
	nombre: "Teclado",
	color: "Gris"
}

let carrito = [producto1, producto2, producto3, producto4];

// console.log(carrito);

/* Pasar a JSON */
let carritoJSON = JSON.stringify(carrito);
// console.log(carritoJSON);

// console.log('[{"nombre":"Monitor","color":"Negro"},{"nombre":"Mouse","color":"Rojo"},{"nombre":"Teclado","color":"Gris"},{"nombre":"Teclado","color":"Gris"}]')

let nuevoJSON = '[{"nombre":"Monitor","color":"Negro"},{"nombre":"Mouse","color":"Rojo"},{"nombre":"Teclado","color":"Gris"},{"nombre":"Teclado","color":"Gris"}]'

let carritoRecuperado = JSON.parse(nuevoJSON);
// console.log(carritoRecuperado)

localStorage.setItem("carrito", carritoJSON)

/* Recorrer un objeto (Quedó colgado) */
for (let prop in producto1) {
	// console.log(prop);
	// console.log(producto1[prop])
	console.log(`Propiedad: ${prop}, valor: ${producto1[prop]}`)
}