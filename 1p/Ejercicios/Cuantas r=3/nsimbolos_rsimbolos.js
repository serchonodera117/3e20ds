let n = 10;
let r = n;

function combinaciones()
{
//R<=N

  let numerador = factorial(n+r-1);             //obtencion de la percusión del numerador
  let denominador = factorial(r) * factorial(n-1);//obtención de la percusión del denominador

  let resultado = numerador/denominador;       //división.

    return resultado;
}


//calculo de factoriales/permutaciones 
function factorial (F)
{
    for(i = F-1; i >=1; i-- )
   {
     F = F*i
   }
   return F;
}