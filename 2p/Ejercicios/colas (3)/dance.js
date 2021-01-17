class colaDancer
{
    constructor()
    {
        this.dataStore = {}
        this.front = 0;
        this.end = 0
    }

    discoverSex(nombres,mujeres,hombres)
    {
        let h = 0
        let m = 0
      for(let i = 1; i <= nombres.length; i++)
      {
          if(i%2 == 0)
           {
             hombres[h] = nombres[i];
             h++;
           }
          if (i%2 > 0)
          {
             mujeres[m] = nombres[i];
             m++;
          }
       }
    }

    emparejamiento(mujeres, hombres, parejas)
    {
        for(let i = 0; i < 7;i++)
        {
            let h = Math.round(Math.random()*10);
            let m = Math.round(Math.random()*10);
            
             parejas[i] =  mujeres[i] +" bailará con "+ hombres[i];
        }
    }
    enqueue(data)//datos
    {
        this.dataStore[this.end] = data;
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

       
}

let nombres = [,"Allison","Joseph","Violett","Jonathan","Hanna","Sergio","Emilia","Roswald","Lumi","Hiro","Echidna","Samuel","Marceline","PedritoSola"]
let mujeres = [];
let hombres = [];
let parejas = [];
let emp = new colaDancer();
emp.discoverSex(nombres,mujeres,hombres);
emp.emparejamiento(mujeres,hombres,parejas);
for(let a = 0; a < parejas.length; a++) emp.enqueue(parejas[a])

console.log("Participantes : ",nombres.length -1)
console.log("Nombres : ", nombres)

console.log("Bailarinas : " , mujeres.toString())
console.log("Bailarines :" , hombres.toString())

console.log("Cola de parejas", emp)

for(let a = 0; a < parejas.length; a++)console.log("Pareja ",a+1," : ",parejas[a])
