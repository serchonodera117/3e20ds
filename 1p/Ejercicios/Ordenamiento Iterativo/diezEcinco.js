//mi pc es de bajos recursos, por lo que opté por tomar un arreglo de 5
//numeros aleatorios entre 0 y 10e5. 
//traté de hacerlo, con este ejercicio no funcionó, se crasheaba el vsc


let n = [];
let x = 5; // x = 5 o cualquier numero que el usuario quiera
let inversiones = 0;

//generar valores aleatorios y guardarlos en el array
for(i = 0; i < x; i++) //generamiento de X numeros aleatorios
{
    n.push(Math.round(Math.random()*Math.pow(10,5)))//rango de 0 a 100,000
}

//imprimir original
console.log("Arreglo original :") 
for(i = 0; i < n.length; i++)
{
   console.log( "posición [",i,"] =",n[i] )
}


//ordenamiento por metodo burbuja
function ordenamiento ()
{
 for(i = 0; i < n.length; i++)
   for(j = 0; j< n.length ; j++)
   {
      if(n[j]>n[j+1])
      {
          let a = n[j]        //guardo el valor de esa posicion en una variable
          n[j] = n[j + 1];    //puesto que se guardará la siguiente posición 
          n[j + 1] = a        //y en la siguiente posicion guardo el valor de la variable
      
          inversiones++;
        }
    }


//Imprimir ordenado
 console.log("\nArreglo ordenado : ")
 for(i = 0; i < n.length; i++)
{
   console.log( "posición [",i,"] =",n[i] )
}
}
console.time()
ordenamiento()
console.timeEnd();

console.log("Inversiones : ", inversiones)

//Para el caso de tener un arreglo de x elementos donde x = 5:
//el promedio de las inversiones que se hacen en este caso es:  5.2 Inversiones.

//¿se puede mejorar el tiemo de ejecución?
//si... Existen más y mejores algoritmos que el método de la burbuja,
// como lo es el metodo recursivo quic-sort o la función sort.