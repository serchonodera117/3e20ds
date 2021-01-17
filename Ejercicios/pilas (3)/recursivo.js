m = [];
class Recursivo
{
    constructor()
    {
        this.item = {};
        this.top = 0;
    }

    add(data)
    {
        this.top++;
        this.item[this.top] = data;
    }

    getTop(){return this.item[data]}
    takeTop() 
    {
        let take;
        if(this.top)
        {
            take = this.item[this.top];
            delete this.item[this.top];
            this.top--
        }
    }

    size(){return this.top}

    getSize(){return this.top;} //devolver el tamaño de la pila

    isEmpty()
    {if(!this.getSize()) return true;  //saber si está vacío
        else return false;}

        print()
        {
            if(this.isEmpty())return null,"pila vacía"
            let result = '';
            for(let i = this.top; i>0 ; i--)
            {
                result += this.item[i] + ' '
            }
            return result;
        }
    Recursive(n,memo)//fibonacci
    {
      memo  =  memo  ||  { } ;
            // casos base
      if ( n <= 0 )  return  0 ;
      if ( n  ===  1 )  return  1 ;
      if ( n  in  memo ) return memo [ n ] ;
            
      memo [ n ]  =  this.Recursive(n-1,memo) + this.Recursive(n-2,memo) ;
     return  memo [ n ] ;
    }
         
       
}



let keiroRecursion = new Recursivo();
for(i = 0+1; i <= 10; i++ ){keiroRecursion.add(keiroRecursion.Recursive(i,m))}

console.log("tamaño de pila ",keiroRecursion.size())
console.log("pila fibonacci",keiroRecursion.print())

