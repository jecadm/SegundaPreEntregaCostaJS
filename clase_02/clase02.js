let stock = prompt('ingrese cantidad de produncto= ');
let totalAPagar =  (stock * 67);
let total = totalAPagar;
let dinero = prompt('TOTAL '+' $' + total +" ingrese  monto para pagar= ");
let tarjeta = prompt('tiene tajeta ingrese si o no = ');

let fondo = prompt('sino tiene tajeta ni efectivo y tiene fondos ingrese monto de los fondos=');





if ((stock >= 1) && (dinero >= total
    || dinero + tarjeta  || tarjeta + fondo ) ){

    console.log("compra correcta");
    alert("compra correcta, vuelto: " + (dinero - total )) ;
    
}  else  {
    console.log("no cumple con la condicion");
    
} 