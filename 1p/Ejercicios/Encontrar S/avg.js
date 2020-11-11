function promedio ()
{
    let s = [3,1,4,2,3]
let avg = (s[0] + s[1] + s[2] + s[3] + s[4])/5;
console.log(avg);
}

console.time()
promedio ()
console.timeEnd()
console.log("complejidad lineal")