function maximo ()
{
    let s = [3,1,4,2,3]
let minimo = Math.min(s[0],s[1],s[2],s[3],s[4]);
console.log(minimo)
}

console.time()
maximo ();
console.timeEnd();
console.log("complejidad lineal")