let n = Number(prompt("escribe la cantidad de numeros primos : "));

console.log(nPrimo(n))

function nPrimo(n)
{
for(let i = 2; i<=n; i++)
  {
     var primo= 1;
     var xd= 2;
     while (xd <= i/2 && primo)
   {
     if ( i % xd ===0) primo = 0;    
      xd++;
   }
     if (primo) console.log("n = ",i);
 }
}
