/* Switch, Es un mecanismo de control, que dado el valor de
una variable, permite ejecutar una acción. */  

/*  Estructuta 
switch (key) {  <- la variable que se evalua
    case value: <- Las posibles respuestas esperadas
        
        break; <- rompe el caso

    default: <- Por defecto, permite responder a un caso no esperado
        break;
}
*/

alert("Vamos a realizar una operacion matematica! ");

var operacion= prompt("Escoge entre: suma, resta, multiplicacion y division.")

var num1= prompt("Digite el primer numero")
var num2= prompt("Digite el segundo numero")

num1= parseFloat(num1);
num2= parseFloat(num2);

operacion= operacion.toLowerCase(); 
switch (operacion) {
    case "suma":
        var suma=(num1+num2)
        alert(suma)
        break;
    case "resta":
        var resta=(num1-num2)
        alert(resta)
        break;
    case "multiplicacion":
        var multiplicacion=(num1*num2)
        alert(multiplicacion)
        break;
    case "division":
        var division=(num1/num2)
        alert(division)
        break;

    default:
        alert("Error, no es una de las opciones esperadas")
        break;
}

/* Opciones numericas */

var dia= 7;

switch (dia) {
    case 1:
         console.log("El dia es Lunes")
        break;
    case 2:
         console.log("El dia es Martes")
        break;
    case 3:
         console.log("El dia es Miercoles")
        break;
    case 4:
         console.log("El dia es Jueves")
        break;
    case 5:
         console.log("El dia es Viernes")
        break;
    case 6 && 7:
         console.log("Es fin de semana")
        break;

        /* No siempre debe haber un default */
}




