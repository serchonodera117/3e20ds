class Trasposicion
{
    constructor() {}
    transponer (M)
    {
        let matrizTranspuesta = M[0].map((_, colIndex)=>M.map(row => row[colIndex]))
        console.log("Matriz Inicial : ", M)
        console.log(M.toString())
        console.log("Matriz transpuesta :", matrizTranspuesta);
        console.log(matrizTranspuesta.toString());

    }
}
let matriz = [[1,2,3],
    [4,5,6],
    [7,8,9]];
let a = new Trasposicion();
a.transponer(matriz);


