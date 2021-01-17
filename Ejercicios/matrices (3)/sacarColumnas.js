class Columna
{
    constructor(dataUser)
    {
        this.dataUser = dataUser;
    }
    seleccionarColumna()
   {
       this.dataUser =  Number(prompt("Inserte el numero de la columna que desea obtener de la matriz"));
       while (this.dataUser <  1 || this.dataUser > 3)
       {
           alert("La matriz es de 3x3, el dato que ha ingresado no se encuentra en los rangos");
           this.dataUser = Number(prompt("Inserte el numero de la columna que desea obtener de la matriz"))
       }
       return this.dataUser;
   }
   sacarColumna(matriz)
   {
       let ind = this.dataUser -1;
       console.log('usted ha seleccionado la columna ',this.dataUser,':')
       let columna = matriz.map(function(matriz)
       {
           console.log(matriz[ind]);
       });
   }
}

let    matriz = [[1,2,3],
                 [4,5,6],
                 [7,8,9]];


let miMatriz = new Columna();
miMatriz.seleccionarColumna();
miMatriz.sacarColumna(matriz);


















