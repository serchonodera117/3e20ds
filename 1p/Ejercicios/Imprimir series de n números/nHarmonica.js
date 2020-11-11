console.log("numero de la suma armónica : ")
h = process.openStdin();

h.addListener("data",function(n){
    
    har(n);
    process.exit()
})

function har(x)
{
    for(i = 1; i <= x ; i++)
    {
        if (i == 1)console.log("1")
        else console.log("+ 1/"+i);
    }
}