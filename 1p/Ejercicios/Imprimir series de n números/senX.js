console.log("cantidad de senos de 1-N a  imprimir");
a = process.openStdin();
a.addListener("data", function(n){
         sen(n)
         process.exit()
})

function sen(x)
{
    for(i = 1; i <= x; i++)
    {
        console.log("Seno de [",i,"] es =",Math.sin(i))
    }
}