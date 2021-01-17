class Node
{
    constructor(elm, next = null, prev=null){
        this.element = elm;
        this.next = next;
    }
}

class circularLinkedList
{
    constructor(){
        this.length = 0;
        this.head = null;
    }

    //obtener un elemento de un indice específico
    getElementAt = function(index)
    {
        if(index >= 0 && index <= this.length)
        {
            let node = this.head;
            for(let i = 0; i < index && node != null; i++)
            {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    //agregar un nuevo nodo
    append = function(element)
    {
        //Create new node
        const node = new Node(element);
        let current;

        //sí está vacío
        //crea un nuevo nodo a la cabeza
        if(this.head === null){
            this.head = node;
        }
        else
        {
            //si no, agrega el nodo nuevo como el siguiente nodo
            //y marcar el siguiente del siguiente nodo al actual
            current = this.getElementAt(this.length - 1);
            current.next = node;
        }

        node.next = this.head;
        this.length++;
    }

    //Inserta en la posicón dada
    insert = function(element, index)
    {
        if(index >= 0 && index <= this.length)
        {
            const node = new Node(element);
            let current = this.head;

            //insertar en la cabeza
            if(index === 0)
            {
                if(this.head === null)
                {
                    this.head = node;
                    node.next = this.head;
                }
                else
                {
                    node.next = current;
                    current = this.getElementAt(this.length);
                    this.head = node;
                    current.next = this.head;
                }
            }
            else
            {
                //insertar el indice dado (men la mitad o al final)
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }

            this.length++;
            return true;
        }
        return false;
    }


    //imprimir los elementos
    toString = function()
    {
        let current = this.head,
            string = '';

        //mantener un seguimiento al nodo cabeza
        const temp = this.head.element;

        while(current)
        {
            //si la cabeza está en el siguiente elemento da fin
            if(temp === current.next.element)
            {
                string += current.element + (current.next ? '\n' : '');
                break;
            }

            string += current.element + (current.next ? '\n' : '');
            current = current.next;
        }

        return string;
    }
}

let listaCircular = new circularLinkedList();

listaCircular.insert(1,0);
listaCircular.insert(2,1);
listaCircular.insert(3,2);

console.log("valores de la lista : \n",listaCircular.toString())
console.log("lista : ", listaCircular);
listaCircular.insert("esta es la posicion especifica  Uwu",3)
console.log("Posición específica de la lista : ",listaCircular.getElementAt(3));