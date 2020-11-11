console.log("<<<<<<<<<<<<< WeakMap() >>>>>>>>>>>>")
const miWeakmap = new WeakMap(); //la pariculiaridad de un weamap
let llave1 = {};                 // es que solo puede soprtar llaves  
let llave2 = {};                 //de tipo objeto, es decir sus atributos
let llave3 = {};                 // o propiedades.

miWeakmap.set(llave1,1)
         .set(llave2,2)
         .set(llave3,"Hallo welt \n\n")    //la forma en la que se le
                                      //añaden elementos, añadirlos
                                      //y asignandoles un valor.
 console.log(miWeakmap.get(llave1));
 console.log(miWeakmap.get(llave2));
 console.log(miWeakmap.get(llave3));   //cual objeto, Weakmap tiene 
                                       //metodos de tipo getter.
for(i= 0; i < 2; i++)
{
    console.log(miWeakmap.has(llave1)); //al igual que un weakset, un 
    console.log(miWeakmap.has(llave2)); //weak map tiene el metodo has,
    console.log(miWeakmap.has(llave3),"\n");//para marcar true o false
                                        //si cuenta con una llave o no
    miWeakmap.delete(llave1);
    miWeakmap.delete(llave2);
    miWeakmap.delete(llave3);           //su metodo para eliminar es .delet
}                                       //se borra de uno en uno.
  
console.log("<<<<<<<<<<<<<<<<<< Map >>>>>>>>>>>>>>>>>");

let miMap = new Map();
let prop = 'hm'  
miMap.set('propiedad1', 95)                               //la forma en la que las propiedades son 
     .set(prop, "hola mundo")                            //depositadas es diferente
     .set('bella', "ciao")
      console.log("Tamaño del map : [", Map.length,"] velores")
console.log(miMap)                                        // se puede imprimir sin necesidad de metodos geters


for(i = 0; i < 2; i++)
{
  console.log(miMap.has('hm'))
  console.log(miMap.has('propiedad1'))
  console.log(miMap.has('bella'))     //cuenta con el método "has()""
  console.log(miMap, "\n")
  miMap.clear();                       //al igual que Set, tiene un 
}                                      //método para limpiar todo el                      
                                       //objeto.