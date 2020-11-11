console.log("escrinir el numero de elementos a generar")
let a = process.openStdin();
a.addListener("data",function (n){
    Ln(n)  
    process.exit();
})

function Ln(x)
{
  if (x == 1)console.log("x");
  else 
  {
    console.log("x");
    for(i = 2; i <= x ; i++)
    {
        if (i%2 == 0) console.log("- x^ "+i+"/"+i);
        else if (i%2 != 0) console.log("+ x^ "+i+"/"+i);
    }
  }
}