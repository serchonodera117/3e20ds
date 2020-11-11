let s = [3,1,4,2,3]

function Potencia(datos) 
{
    return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
}

console.time()
Potencia(s)
console.timeEnd()
console.log("complejidad exponencial")

console.log(Potencia(s))