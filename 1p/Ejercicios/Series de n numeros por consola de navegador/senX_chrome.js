let x = Number(prompt("cantidad de senos de 1-N a  imprimir"));

console.log(sen(x))

function sen(x)
{
    for(i = 1; i <= x; i++)
    {
        console.log("Seno de [",i,"] es =",Math.sin(i))
    }
}

