class Node
{
   constructor(data,next)
   {
     this.data = data;
     this.next = next
   };
}

class  List
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

    hasloop (head) 
    {
        let current = head.next;
        let i = 0;
        let check;
        let j;
        do
        {
            check = head;
            j = 0;
            do {
                if (check === current) 
                {
                    return true;
                }
                j += 1;
                check = check.next;
            } while (j < i && check);
            i += 1;

            current = current;
        } while (current);
        return false;
    };

}

let a = new List()

for(let i = 0; i < 10; i++)a.agregar(i+1); //Agregado automatico, para evitar agregar de uno en uno Xd

console.log(`List ${a.print()}`);
console.log("Tiene bucles? : ", a.hasloop(1))