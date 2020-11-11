// formula N!
function permutacion (n)
{
    for(i = n-1; i >=1; i-- )
   {
     n = n*i
   }
   return n;
}

console.log(permutacion(5),"Saludos");