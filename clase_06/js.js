/* let frutas = [""] */
//reempazando elementos del arry
//frutas[3] = "elemento";

//recorrer elemento de un array
/* let numeros = [1, 3 ,4, 5, 6, 7, 7]

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    console.log(element)
    
} */

//METODOS
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numeros.length);

//push agrega el final

numeros.push(10);

//unshift agrega al principio
numeros.unshift(0);

console.log(numeros.length);

//pop elimina el ultimo
/* numeros.pop(); */

//shift elimina el primer elemento
/* numeros.shift(); */

//splaice elimina elementos  primera posicion es desde donde y la segunda posicion que cantidad
/* numeros.splice(1 ,2) */

//join cambia con que se unen o separan lso elementos
/* console.log(numeros.join('.-'))

//CONCAT UNE ARRAY
nombresNum = ['uno','dos','tres','cuatro']
let connomnbres = numeros.concat(nombresNum) */

//CORTA O DEVUELVE  DESDE DONDE Y HASTA DONDE LLEGA SIN INCLUIRLO

/* let separar = numeros.slice(1,2);
 */

//index of

console.log(numeros.indexOf(7)); //que indice tienen ese dato en el array

console.log(numeros.includes(9)); //si no esta en false y si esta es true

const objeto1 = { id: 1, producto: "monitor" };
const arr = [objeto1, { id: 2, producto: "teclado" }];

const productos = [
  { id: 1, nombre: "algop" },
  { id: 2, nombre: "pro2" },
  { id: 3, nombre: "prod3" },
  { id: 4, nombre: "prod4" },
  { id: 5, nombre: "prod5" },
];

for (const elemento of productos) {
  console.log(elemento.id);
  console.log(elemnto.nombre);
}

