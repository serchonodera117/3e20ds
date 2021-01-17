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

    print() //imprimir
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
        return result;
    }
    getSize(){return this.size}

    isEmpty(){return this.size === 0 ? true : false} 

    removeData(data)
    {
        let current = this.head;
        let previous = null;

        while(current != null)
        {
            if(current.data === data)
            {
                if(!previous)
                {
                    this.head = current.next 
                }
                else 
                {
                    previous.next = current.next; 
                }
                this.else--;
                return current.data;
            }
            previous = current; 
            current = current.next 
        }
        return null
    }

    in2Matrix(matrix) 
    {
        let nuevoNode;
     for(let i = 0; i < matrix.length; i++)
     {
        nuevoNode = new Node(matrix[i],null); 
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
    }
}

let matriz = [1,2,3,4,5,6,7,8,9];

let list = new listaEnlazada();
list.in2Matrix(matriz)
console.log("Se ha convertido la matriz", matriz.toString())
console.log(matriz)
console.log("A la lista ",list.print());
console.log(list)