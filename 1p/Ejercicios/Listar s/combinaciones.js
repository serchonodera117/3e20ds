let S = [3,1,4,2,3]

function combinar (S)
{
    let result = [];
 
    const combinador = (arr, m = []) => {
        if (arr.length === 0) 
        {
            result.push(m)
        }
         else 
         {
            for (let i = 0; i < arr.length; i++) 
            {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                combinador(curr, m.concat(next))
            }
        }
    }
 
    combinador(S)
    return result;
}

console.time()
combinar(S)
console.timeEnd()
console.log("complejidad exponencial")
console.log(combinar(S))
