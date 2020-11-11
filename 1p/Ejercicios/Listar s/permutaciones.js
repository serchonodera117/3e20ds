let s = [3,1,4,2,3];

function permutacionesPosibles (s) 
{
    const permutaciones = [];
    const permutar = (arr, permutacion = []) =>{
        if (!arr.length)
        {
            permutaciones.push(permutacion)
            return
        }
        for(let i in arr)
        {
            let curr = arr.slice();
            let next = curr.splice(i,1)
            permutar(curr, permutacion.concat(next))
        }
    } 
    permutar(s);
    return permutaciones;
}
console.time()
permutacionesPosibles(s)
console.timeEnd()
console.log("complejidad cuadrática")
console.log(permutacionesPosibles(s))