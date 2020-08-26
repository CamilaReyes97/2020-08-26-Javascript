/* var se usa desde el standard ecmascript5 (ES5), let y const fueron añadidos desde ecmascript2015 (ES2015 o ES6)

La declaración de variables con var, te permite hacer modificaciones en los valores almacenados, en el caso de let, este cambio también es permitido, 

pero const hace referencia a una constante, así que el valor de esta no puede ser cambiado una vez sea declarado, por otro lado, al declarar una variable como const debes asignarle un valor en ese momento, no después. */

// ES5

var nombre5 = 'Diana Castaño';
var edad5 = 28;
nombre5 = 'Diana Foronda'; // Digamos que Diana se caso y cambio su apellido, así que la variable nombre5 ha cambiado su valor
console.log(nombre5)
// ES6

// const vacio; // lanza error, una constante debe tener un valor asignado en su declaración.
const nombre6 = 'Diana Castaño'; // Al declarar nombre6 como const, su valor no puede mutar o ser cambiado.
let edad6 = 28; // let puede mutar o ser cambiado
/* nombre6 = 'Diana Foronda' */// Esta vez Diana no se puede casar
// No se puede cambiar nombre6 si es const, obtenemos un error.

/* En el caso de var , las variables son function-scope
Alcance de la función de JavaScript
En JavaScript hay dos tipos de alcance:

Alcance local
Alcance global
*/
/* GLOBAL */
var x = 0; /* Variable x declarada como var */
function four5(){
	for (var i = 0; i < 5; i++){ // un for loop que va desde 0 hasta i menor a 5, osea 4
		x = i; // asignamos el valor de i a x, como vamos hasta 4, porque cuando i alcanza el valor de 5 el lopop termina, x tiene el valor 4
	}
}
four5();
console.log(x) //al imprimir x, efectivamente es 4
// La x declarada con el valor 0 y la x dentro de la funcion, son la misma x.


/* LOCAL */
function myFunction() {
    var carName = "Volvo";
  
    // code here CAN use carName
  
  }



/*mientras que const y let son block-scope :
La diferencia es el alcance de las variables.

let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando y var define una variable global o local en una función sin importar el ámbito del bloque. */

function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // misma variable! reemplaza el valor de la de arriba
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
   
  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente,  solo se queda entre sus llaves
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }


  /* FUNCIONES!! */

 /*  
 funciones tradicionales son aquellas que se definen con la palabra reservada function, ej:

function(){}

Funciones anonimas son las de tipo flecha porque no se les pone nombre

()=>{}


La buena practica es guardar esas funciones anonimas o tipo flecha en una variable para poder reutilizarlas

const miFuncioncita = ()=>{}
 
 Dentro de la función, en lugar de escribir function nombreFuncion() podemos sustituir la palabra function por una flecha. Este tipo de funciones se las conoce como función flecha. Os dejo un ejemplo de como sería la equivalencia:

Os dejo un ejemplo para que veáis cómo sería el caso práctico: */


// Función convencional
 
function sumar(a,b){
    return a+b;
}
console.log(sumar(3,5))
 
// Ahora vamos a realizar la equivalencia de función flecha:

/*  Funciones anónimas
Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla: */
 
var sumar = (a,b) => a+b;
console.log(sumar(7,3));
/* ¿Qué ventajas tiene la función flecha respecto a la convencional?

La función es anónima. Es decir, la estructura es como declarar una variable que nos permite reutilarlas las veces que queramos.
Sintaxis limpia y simple. Cada vez se están utilizando más este tipo de funciones ya que se ahorra bastante código respecto a la convencional. Aunque resulte este tipo de función para chinos, es adaptarse al medio */

 
// Función anónima "saludo"
var saludo = function () {
    return "Hola";
  };
  
console.log(saludo); // ƒ () { return 'Hola'; } me retorna la estructura 
console.log( saludo()); // 'Hola' me retorna el return

  /* Observa que en la última línea del ejemplo anterior, estamos ejecutando la variable, es decir, ejecutando la función que contiene la variable. Sin embargo, en la línea anterior hacemos referencia a la variable (sin ejecutarla, no hay paréntesis) y nos devuelve la función en sí. */
  