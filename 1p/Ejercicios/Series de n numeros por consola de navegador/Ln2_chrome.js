let x = Number(prompt("escriba el tamaño de la sucesión : "));

console.log(har(x))

function har(x)
{
    if (x == 1)console.log("1");
   else 
   {
       console.log("1")
    for(i = 2; i <= x ; i++)
    {
       
        if (i%2 == 0) console.log("- 1/"+i);
        else if (i%2 != 0) console.log("+ 1/"+i);
    }
 }
}
