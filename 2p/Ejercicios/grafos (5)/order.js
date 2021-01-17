class matriz
{
    constructor()
    {
        this.elements = [];
        this.size = 0
    }
  add(x)
  {
      this.elements[this.size] = x;
      this.size++
  } nodes(){return this.size}

  order (arr)
    {
      for(let i = 0; i < arr.length; i++)
      for(let j = 0; j< arr.length ; j++)
      {
         if(arr[j]>arr[j+1])
         {
             let a = arr[j]        
             arr[j] = arr[j + 1];   
             arr[j + 1] = a        
              
          }
        } return "numero de elementos : " + this.nodes()
    }
    
    a2b(arr)
    {
      for(let i = 0; i < this.size; i++)
      {
        arr[i] = this.elements[i];
      }
    }

}

let a = new matriz();
let arr = []

for(i = 0; i < 10; i++) a.add(Math.round(Math.random()*10));
a.a2b(arr);

console.log(a)
console.log(arr.toString());

console.log(a.order(arr));
console.log(arr.toString())
