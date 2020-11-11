//Weakset
let x = new WeakSet();
x.add({});

let Objeto1 = {nombre:'Serch'};
let Objeto2 = {nombre:'Emilia'};
x.add(Objeto1);
x.add(Objeto2);
console.log("<<<<<<<<<<<<< WeakSet >>>>>>>>>>>>>>>")
 for (i = 0; i <2; i++)
 {
  console.log(x)//imprimir para ver si tiene valores

  console.log(x.has(Objeto1))//función has()para ver
  console.log(x.has(Objeto2),"\n")//si tiene esos elementos


    x.delete(Objeto1)//si no tiene imprimirá in false
    x.delete(Objeto2)
}
//Solo almacena objetos, y la forma de guardado es muy debil, 
//nulificando un valor se elimina


//Set
 console.log("<<<<<<<<<<<<<<<<< Set >>>>>>>>>>>>>>>>>")
let y = new Set(['Papas']);  //cual array, se puede iniciar con elementos dentro
 y.add('Pan');
  y.add('Carne');
  y.add('Queso');
  y.add('Lechuga');
  y.add('Pepinillos');
  y.add('tocino');
  y.add('Pan')    //Cuando un valor es identico a otro, o se repite
                  //El set solo lo cuenta una vez

let arreglo = [...y] //Un set se puede combertir en un array 
console.log(y) 
for (i = 0; i < 2; i++) //se puede iterer
 {                                 
    console.log(y.has('Papas'));
    console.log(y.has('Pan'));
    console.log(y.has('Carne'));
    console.log(y.has('Queso'));
    console.log(y.has('Pepinillos'));
    console.log(y.has('Lechuga'));
    console.log(y.has('tocino'),"\n");   
    y.clear();     //al igual que weakset(), se le pueden eliminar valores
                   //sin embargo, con set se pueden eliminar todos  a la vez
     
 }

 
