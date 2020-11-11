function Imprimir()
{
    let numeros = new Set();
      numeros.add(Math.pow(10,4))
      numeros.add(Math.pow(10,5))
      numeros.add(Math.pow(10,6))

    console.log(numeros)
}

console.time();
Imprimir();
console.timeEnd();