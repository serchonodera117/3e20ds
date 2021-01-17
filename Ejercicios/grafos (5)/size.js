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
        return result;
    }
    getSize(){return this.size} //

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

    _size()
     {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
}

let myLinkedlist = new listaEnlazada()
myLinkedlist.agregar(1)
myLinkedlist.agregar(2)
myLinkedlist.agregar(3)
myLinkedlist.agregar(4)
myLinkedlist.agregar(5)
myLinkedlist.agregar(6)

console.log("lista : ",myLinkedlist.print());

                                 //myLinkedlist.getSize() forma uno
console.log("numeros de nodos :", myLinkedlist._size())//forma dos