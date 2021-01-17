class colaSort
{
    constructor()
    {
        this.item = {};
        this.front = 0
        this.end = 0;
    }

    enqueue(data)//datos
    {
        this.item[this.end] = data;
        this.end++;
    }
    dequeue()//sacar el primero
    {
        let f;
        if(this.size === 0) return null;
        f= this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return f;
    }
    size(){return this.end - this.front}//tamaño 

    isEmpty() //vacío?
    {
        if(this.size() === 0)return true; 
        else return false 
    }

    peek()//saber cual es el primero
    {
      if(this.size === 0) return null;
      return this.item[this.front];
    }

  
    print() //imprimir
    {
        if(this.size === 0)return null;//vacío si se cumple
        let result = '';
        for(let i = this.front; i < this.end; i++)//desde el primero hasta el final
        {
          result += this.item[i];
        }
        return result
    }

    clear()//borrar todo;
    {
        this.item = [];
        this.front = 0;
        this.end = 0;
    }


    distribute(nums, queues, n, digit) //dígito representa el lugar de 1 o 10 
    { 
        for (var i = 0; i < n; ++i) 
        {
          if (digit == 1) { queues[nums[i]%10].enqueue(nums[i]);}
        else {queues[Math.floor(nums[i] /10)].enqueue(nums[i]);}
        }
    }
    collect(queues,nums) //recolectar numeros del array queues
    {
    
      let i = 0;
      for(let j = 0; j < 10; j++)
      {//el for es para incrementar el indice i
          while(!queues[j].isEmpty())  
          {               
              nums[i++] = queues[j].dequeue(); //mientras que no esté vacío
          }                                        //nums almacena queues
      } 
      return nums
    }
    dispArray(arr) //espaciar el array 
    {
        for (var i = 0; i < arr.length; ++i) 
        {
            putstr(arr[i] + " ");
        }
    }
}



let queues = [];
for (let i = 0; i < 10; ++i) 
{
 queues[i] = new colaSort();//generar y guardar 10 objetos colaSort
}
let nums = [];
for (let i = 0; i < 10; ++i) {
 nums[i] = Math.floor(Math.floor(Math.random() * 101)); //generar y guardar  10 numeros random
}



let mySort = new colaSort();
console.log("Antes del sort :")
console.log(nums.toString());

mySort.distribute(nums,queues,10,1);
mySort.collect(queues,nums);
mySort.distribute(nums,queues,10,10);
mySort.collect(queues,nums);

console.log("Después del sort : ")
console.log(nums.toString())


