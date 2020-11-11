//desarrollo de la formula "n! / (n-r)!*r!"   ~combinacion sin repetición (suponemos que una persona no pued saludarse a si misma)

let N = 3         //invitados
let R = 2         //dos personas interactuando

function combinaciones()
{
    let numerador = permutacion(N)
    let denominador = permutacion(N-R) * permutacion(R)

    let division = numerador / denominador;

    return division; 
}

//calculo de permutaciones 
function permutacion (P)
{
    for(i = P-1; i >=1; i-- )
   {
     P = P*i
   }
   return P;
}

console.log(combinaciones(),"Saludos");