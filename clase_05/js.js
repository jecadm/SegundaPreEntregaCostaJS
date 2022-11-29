// Oj

const nombre = "monitor de 24 pulgadas ";
const precio = 300;
const disponible = true;


const producto= {
    nombre: "monitor de 24 pulgadas",
    precio: 300,
    disponible: true,
    
};

console.log(producto.nombre);

console.log(producto.disponible);
console.log(producto.precio);


//ejemplo para quitar agregar o modificar opjetos
producto.imagen = "link o img.jpg";
delete producto.disponible;
producto.disponible = false;


//destructuring dentro de la ultima version de javaS

/* const {nombre, precio, disponible} = producto;


console.log(nombre) */

//objet constructor

function Producto(nombre, precio, status){
    this.nombre = nombre;
    this.precio = precio;
    //valor por defecto
    this.disponible = true;

}

const producto2 = new Producto("Teclado", 1000);

const producto3 = new Producto("Mouse", 500);

let texto = "cantidad de caracteres con lengt";

console.log(texto.length)
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())






function Cliente(nombre, edad, domicilio){
    this.nombre =nombre;
    this.edad = edad;
    this.domicilio = domicilio;
    this.saludar = function(){
        console.log("saludos" + this.nombre)
    };

};

const cliente1 = new Cliente("coder", 20, "montecarlos");
cliente1.saludar();