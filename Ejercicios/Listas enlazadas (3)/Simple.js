"use stric";
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
        this.head = null; //primera posición o cabeza (head) de la lista, no se tiene ningun Node hasya que se agrega uno
        this.size = 0; //Tamaño
    }

    agregar(data)
    {
        let nuevoNode = new Node(data,null); //se crea un objeto del Node y el parametro next
        if(!this.head) //si la lista está vacía    //se deja nulo por que aún no se apunta al next Node
        {
            this.head = nuevoNode //si, sí, se usa el nuevo Node como head o cabeza
        }
        else
        {
            let actual = this.head;
            while (actual.next) //mientras que el Node actual tenga referencia al next
            {
                actual = actual.next; //se comienza en el head del Node, y así sucesivamente
            }                             //hasta que se encuentre un Node que no referencíe al next
            actual.next = nuevoNode;
        }
        this.size++; //incrementa en uno el size del Node al agregar

    }

    insertAt(data, index)
    {
      if(index < 0 || index > this.size) null; //si en indice es mas pequeño o mas grande, regresa null

      const newNode = new Node(data);
      let current = this.head;
      let previous

      if(index === 0)
        {
         newNode.next = current; //aúnta a la cabeza actual de la lista
         this.head = newNode;
        }
        else 
        {
            for(let i = 0; i < index; i++)
            {
                previous = current;
                current = current.next; //en caso de que no sea cero, recorre todo
            }                           //hasta encontrar la posicon deseada
            newNode.next = current //el nodo siguiente guarda el valor actual
            previous.next = newNode; //el anterior guarda el nuevo nodo
        }
        this.size++;
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

    removeData(data)
    {
        let current = this.head;
        let previous = null;

        while(current != null)
        {
            if(current.data === data)
            {
                if(!previous)//si no hay valores previos
                {
                    this.head = current.next  //si no hay valores previos la cabeza pasa a ser el siguiente
                }
                else 
                {
                    previous.next = current.next; // el siguiente del anterior pasa a ser el actual siguiente
                }
                this.size--;
                return current.data;
            }
            previous = current; //el anterior toma el valor del siguiente
            current = current.next // y el actual el del siguiente.
        }
        
        return null
    }

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
                current = current.next
            }
            previous.next = current.next //el valor siguiente del anterior es igual a valor diguiente del actual
        }
        this.size--;
        return current.data
    }

    getSize(){return this.size}

    isEmpty(){return this.size === 0 ? true : false} 
    
}

let lista = new listaEnlazada();
console.log("Lista vacía : ", lista.print());


lista.agregar(12);
lista.insertAt(10,1)
lista.agregar(99)
lista.agregar(7)
lista.agregar(2)
lista.agregar(3)

console.log("Está vacía? :",lista.isEmpty())

console.log(lista)
lista.removeData(10)
console.log(lista.print())
console.log(lista)
