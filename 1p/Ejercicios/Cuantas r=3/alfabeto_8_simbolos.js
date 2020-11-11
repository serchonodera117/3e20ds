//ejecución de la formula (n+r-1)! / r!(n-1)!  ~combinación con repetición
function combinaciones()
{
//como en este caso son 8 letras y palabras de 8 caracteres, R = N

  let numerador = factorial(8+8-1);             //obtencion de la percusión del numerador
  let denominador = factorial(8) * factorial(8-1);//obtención de la percusión del denominador

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



console.log("Hay [",combinaciones(),"] combinaciones posibles")