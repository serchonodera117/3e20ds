console.log("escribe el número de aleatorios: ")
let c = process.openStdin();

c.addListener("data",function(n){

       aleatorio(n);
       process.exit();

});

function aleatorio(x)
{
 for(i= 1; i<= x; i++)
 {
    console.log("numero [",i,"] : ",Math.round(Math.random()*x))
 }
}