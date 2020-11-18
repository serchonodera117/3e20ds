let x = Number(prompt("numero máximo de la serie : "));
let y = Number(prompt("Escriba el exponente : "));

console.log(potenciacion(x,y))

function potenciacion(x,y)
{
    for(i = 1; i <= x ;i++)
    {
     u = y;
      console.log("n "+i+"^"+y+"   = "+Math.pow(i,y)+ "\n")
    }
}
