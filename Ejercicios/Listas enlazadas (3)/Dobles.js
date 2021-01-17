class Node
{
    constructor(data, next, prev) //armado de un constructor con sus debidos atributos
    {
        this.data = data;
        this.next = next;
        this.prev = prev;
    };
};

class listaDobleEnlazada
{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addToHead(data)
    {
        const nevouNodo= new Node(data, this.head, null);  //para añadir a la cabeza, se deja la cola vacía

        if (this.head)                   //si hay una cabeza
        {
            nevouNodo.next = this.head;  //en el nuevo nodo siguiente, se guarda la cabeza
            this.head.prev = nevouNodo;  //y en la cabeza anterior el nuevo nodo
            this.head = nevouNodo;      //para finalmente guardar el nodo en la cabeza
        }
        else
            {
            this.head = nevouNodo;    //si no, tanto la cabeza como la cola, le guardan
            this.tail = nevouNodo;
        };
        this.size++; //el incremento de esta propiedad es para saber el tamaño
    };

    addToTail(data)
    {
        const nuevoNodo = new Node(data, null, this.tail); //para añadir la cola se instancia nodo con la cabeza en null

        if (this.tail)                       //si hay una cola
        {
            nuevoNodo.prev = this.tail;    //el nuevo nodo apunta al anterior, y guarda la cola
            this.tail.next = nuevoNodo;     //la cola que apunta al sifuiente, guarda el nodo nuevo. en su retaguardia, baya
            this.tail = nuevoNodo;         //la cola en sí, almacena el nodo nuevo
        } else
            {
            this.tail = nuevoNodo;      //si no, guarda en cola y en cabeza el nodo nuevo-.
            this.head = nuevoNodo;
        };
        this.size++;
    };

    insertAt(data, index)
    {
        if (index < 0 || index > this.size)                       //en caso de que el indice esté fuera de rango
        {
            return null
        };

        const newNode = new Node(data, null, null);   //de lo contrario, se instancia el nodo con el dato
        let current = this.head;      //se guatda la cabeza     // la cola nula y la cabeza nula
        let previous;

        if (index === 0)
        {
            newNode.next = current;        //si el indice es igual a cero, en el nodo nuevo se almacena el nodo actual
            current.prev = newNode;        // y en el nodo anterior el nuevo nodo
            this.head = newNode;           //a la vez que e nuevo nodo en la primera posición
        }
        else
        {
            for (let i = 0; i < index; i++)      // de lo contrario, a corde al indice
            {
                previous = current;             //la posicion anterior guarda la actual
                current = current.next;         //y la actual gyarda la siguiente
            };

            newNode.next =current;  //de esta forma el siguiente nodo,el actual, el anterior la anterior posicion
            newNode.prev = previous;// el actual que apunta al anterior, el nuevo nodo, y el anterior el siguiente
            current.prev = newNode;//nuevo nodo
            previous.next = newNode;  //1,2,3,[6],4
        };                                   //^ mas o menos de esa forma.
        this.size++;
    };



    print()
    {
        let current = this.head;       //en el segmento actual se guarda la cabeza o primer posición
        let result = '';               //en result se reserva una cadena de caracteres donde se guarda
        while(current) {
            result += current.data + ' <-> ';  //si se encuentra en la actual posicion, el resultado almacena
            current = current.next;           //en la variable actual se almacena la siguiente o el nodo siguiente
        };

        return result += ' Fin ';
    };

    reversePrint() {
        let current = this.tail;        // en el segmento actual se guarda la cola de la lista
        let result = '';
        while(current) {
            result += current.data + ' <-> ';
            current = current.prev;      //mismma dinámica, solo que apunta al nodo anterior
        };

        return result += ' Fin ';
    };

}

const doubleLinkedList = new listaDobleEnlazada();
doubleLinkedList.addToHead(3);
doubleLinkedList.addToHead(2);
doubleLinkedList.addToTail(7);
doubleLinkedList.addToTail(8);
doubleLinkedList.insertAt(4, 2);


console.log("Lista de cabeza a cola :",doubleLinkedList.print())
console.log("Lista de cola a cabeza : ",doubleLinkedList.reversePrint())
console.log(doubleLinkedList)

