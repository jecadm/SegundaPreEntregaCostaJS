/* switch well dowille for */


const FOOD = prompt('Whats you need, piza , hamburger o lomo?');
/* compara para dar opciones al uruario */

switch(FOOD){

    case `hamburger`: 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "pizza":
            console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "potato": 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    case "lomo": 
        console.log(`Vas a cenar  ${FOOD}`)
        break;
    default:
        console.log(`Vas a cenar nada`)
        break;

//Template literals 
// `` backtics   se utliza para realizar de manera dinamica un determinado texto

}




let pelicula = prompt(`Elija una peli: 
1: Batman
2: superman
3: Spiderman`
)
switch(pelicula){
    case '1':
        console.log('Batman')
        break;
    case '1':
        console.log('Batman')
        break;
    default: 
        console.log('defalut salidas')
        break
}

/* siclo WHILE */

/* while(cindition){
    "Corpus of bucle"

} */
/* let iterador = 0


while (iterador <= 3) {
    alert(iterador)
    iterador++
    
}

let entrada = prompt('Ingrese un texto o ESC para interrumpir');
let texto = '';

while (entrada != "ESC" && entrada != 'esc') {
   
    texto += entrada + ' '
    entrada = prompt('Ingrese un texto o ESC para interrumpir')
    

    
}
alert(texto) */


// CICLO DO WHILE esta bueno para alerta o aviso de stock bajo o alto o de un determinado timepo

let y = 0


do{
    console.log(`'el valor de ${y}'`)
    y++

}while (y <= 10); {
    alert(' Peligro llegaste a 10')
    
}

//CICLO fro

/* for (let i = 0; index <= 5; i++) {
    
    alert(`' Peligro llegaste a 10 ${i}'`)
    
}
 */
/* 
let numero = parseInt(prompt('Ingrese un numero'));

for (let i = 1; i)
 */

for (let i = 1; i <= 10; i++){
    if (i === 6){
        alert(`El valor de ojo llegaste a 6${i}`);
      continue
    }
    alert(`El valor de ${i}`);
}

function divideCuotas (monto, cuotas)
    resultado = monto / cuotas

function calculaInteres (divideCuotas , interes){

    resultado = divideCuotas * interes;
    return resultado;
    

}

function calculoIva(){
	//tasa de impuesto
  let tasa = 12;
  
  //monto a calcular el impuesto
  let monto = $("input[name=monto]").val();
  
  //calsulo del impuesto
  let iva = (monto * tasa)/100;
  
  //se carga el iva en el campo correspondien te
  $("input[name=iva]").val(iva);
  
  //se carga el total en el campo correspondiente
  $("input[name=total]").val(parseInt(monto)+parseInt(iva));
   
}