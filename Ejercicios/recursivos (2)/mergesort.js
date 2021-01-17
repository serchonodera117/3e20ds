let arreglo_merge = [5,4,2,8,10,11,7];
function mergeSort(arreglo_merge)//ordenar el arreglo
{
    const half = arreglo_merge.length / 2
    //caso base
    if(arreglo_merge.length < 2)
    {
        return arreglo_merge
    }

    const left = arreglo_merge.splice(0, half) //cambiar contenido
    return merge(mergeSort(left),mergeSort(arreglo_merge))
}
function merge(left, right) //Romper el arreglo en dos
{
    let arr = []
    //en el caso de que un bucle esté vacío, se sale
    while (left.length && right.length) {
        // toma los elementos mas pequeños de los trozos mas pequeños para crear sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    // Contacta a los elementos sobrantes
    // esto en el caso de que no se pueda pasar por toda la matriz de izquiera a derecha
    return [ ...arr, ...left, ...right ]
}

console.log(mergeSort(arreglo_merge));