let x = Number(prompt("numero de la suma armónica : "));

console.log(har(x))

function har(x)
{
    for(i = 1; i <= x ; i++)
    {
        if (i == 1)console.log("1")
        else console.log("+ 1/"+i);
    }
}
