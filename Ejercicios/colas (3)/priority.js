class ColaPriority
{
    constructor()
    {
        this.item = {};
        this.front = 0
        this.end = 0;   //fin o anchura de la cola
    }

    size(){return this.end - this.front}

    enqueuePriority(data, priority)  //entrada de datos por prioridad
    {
           if(this.item[priority === null]) this.item[this.end] =  this.item[priority];
           else{
           this.item[this.end]=  this.item[priority] ;
            this.item[priority] = data; 
             this.end++;
           }
    }

    enqueue(data)
    {
     if(this.item[this.end] === null) this.item[this.end] = data;
      else{ 
        this.item[this.end] = data;
        this.end++;
       }
    }


    dequeue() //sacar o devolver datos prioritarios
    {
        if(this.front === this.end) return null + "Cola vacía";
        const data = this.item[this.front];//recibe el valor mas prioritario o el primero que llegó
         delete this.item[this.front]//eliminar 
         this.front++;       //al salir este, el fe¿ront incrementa, siendo el siguiente el mas importante
        
        return data;
    }
    isEmpty() //saber si está vacío
    {
        if(this.size() === 0)return true; // está vacío
        else return false  //no está vacío;
    }

    peek()
    {
      if(this.size === 0) return null;
      return this.item[this.front];
    }
    print()
    {
        if(this.size === 0)return null;//vacío si se cumple
        let result = '';
        for(let i = this.front; i < this.end; i++)//desde el primero hasta el final
        {
          result += this.item[i];
        }
        return result
    }

    get(index)
    {
        if(this.isEmpty()) return null;
        let mem = this.item[index];
        delete this.item[index];
        return mem;
    }

    clear()
    {
        this.item = [];
        this.front = 0;
        this.end = 0;
    }
}


let uwu = new ColaPriority();
uwu.enqueue(" primero : "+1+" ")
uwu.enqueue(" segundo : uwuwuwu"+" ");
uwu.enqueue(" Tercero : "+3+" ")
uwu.enqueue(" cuarto : "+5+" ")
uwu.enqueue(" quinto : " + 5 +' ')
uwu.enqueuePriority(" prioritario : B)",0)
//uwu.clear()

console.log("<<<cola: ",uwu.print())

console.log("El siguiente en la fila es : ", uwu.peek())
uwu.dequeue()

console.log("Prioridad por indice ",uwu.get(4))


console.log("tamaño de la cola : ",uwu.size())
console.log("<<<cola: ",uwu.print())
console.log("El siguiente en la fila es : ", uwu.peek())

uwu.dequeue()
console.log("tamaño de la cola : ",uwu.size())
console.log("<<<cola: ",uwu.print())
console.log("El siguiente en la fila es : ", uwu.peek())

uwu.dequeue()
console.log("tamaño de la cola : ",uwu.size())
console.log("<<<cola: ",uwu.print())
console.log("El siguiente en la fila es : ", uwu.peek())