console.log("numero máximo de la serie : ");
a = process.openStdin();




a.addListener("data", function(n)
{   console.log("Escribe el exponente k: ")
    b = process.openStdin();
     
    b.addListener("data", function (k)
      {
        let exp = k;
          potenciacion(n,k);
          process.exit();
      });     
});

function potenciacion(x,y)
{
    for(i = 1; i <= x ;i++)
    {
     u = y;
      console.debug("n "+i+"^"+y+"   = "+Math.pow(i,y)+ "\n")
    }
}