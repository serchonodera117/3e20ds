console.log("agregue el número de factoriales : ");
f = process.openStdin();

f.addListener("data",function(n){
    factorial(n)
    process.exit();
})

function factorial(x)
{
   for(i = x-1; i >=1; i--)
   {
      x = x*i

      console.log("n  = ",x)
   }
}