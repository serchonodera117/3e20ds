
class Fila
{
    constructor(dataUser)
    {
        this.dataUser = dataUser;
    }
    insertar()
    {
        this.dataUser =  Number(prompt("Inserte el numero de la fila que desea obtener de la matriz"));
        while (this.dataUser <  1 || this.dataUser > 3)
        {
            alert("La matriz es de 3x3, el dato que ha ingresado no se encuentra en los rangos");
            this.dataUser = Number(prompt("Inserte el numero de la fila que desea obtener de la matriz"))
        }
        return this.dataUser;
    }

    imprimirFila(matriz)
    {
        let ind = this.dataUser - 1;
        console.log('usted ha seleccionado la fila ',this.dataUser,':', matriz[ind]);
    }
}
let matriz = new Array([1,2,3],
                       [4,5,6],
                       [7,8,9]);
let col = new Fila();
col.insertar();
col.imprimirFila(matriz)
