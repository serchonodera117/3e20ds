function Imprimir()
{
    let nombres = new Map();
      nombres.set('10e4',Math.pow(10,4))
             .set('10e5',Math.pow(10,5))
             .set('10e6',Math.pow(10,6))

    console.log(nombres)
}

console.time();
Imprimir();
console.timeEnd();
