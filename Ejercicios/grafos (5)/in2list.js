class Node
{
    constructor(data, next)
    {
        this.data = data;    //datos entrantes
        this.next = next; //referencia del next Node
    }
}

class listaEnlazada
{
    constructor()
    {
        this.head = null; 
        this.size = 0;
    }

    agregar(data)
    {
        let nuevoNode = new Node(data,null); 
        if(!this.head) 
        {
            this.head = nuevoNode 
        }
        else
        {
            let actual = this.head;
            while (actual.next) 
            {
                actual = actual.next; 
            }                           
            actual.next = nuevoNode;
        }
        this.size++; 

    }
    getSize(){return this.size} 
    removeFrom(index)
    {
    if (index < 0 || index > this.size) return null;

    let current = this.head;
    let previous = null;

    if(index === 0) current = this.head;
     else
     {
        for(let i = 0; i < index; i++) //recorre toda la lista hasya encontrar el indice
        {
            previous = current;
            current = current.next;
        }
        previous = current //el valor siguiente del anterior es igual a valor diguiente del actual
     }

      return current.data
    }

    print()
    {
        if(!this.size)return null;

        let current = this.head;
        let result = "";
        while(current)
        {
            result += current.data += " -> ";
            current = current.next;
        }
        result += "x";
        return (result);
    }
}

let lista = new listaEnlazada();
lista.agregar(1)
lista.agregar(2)
lista.agregar(3)
lista.agregar(4)
lista.agregar(5)


class matriz
{
    constructor(){}

    in2list(matriz,size,matrizB)
    {
        for(let i = 0; i < size; i++)
        {
            matriz[i] = lista.removeFrom(i);
            matrizB[i] = matriz[i]
        }
        
    }
}
let matrix = new matriz();
let matrizB = []
matrix.in2list(matrizB, lista.getSize(),matrizB)

console.log("Se ha convertido la lista", lista.print());
console.log(lista)
console.log("A una matriz",matrizB.toString());
console.log(matrizB)