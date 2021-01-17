class Node 
{
  constructor(data)
  {
  this.data = data;
  this.children = []; //hijos
  }
}



class Tree
{
    constructor()
    {
        this.root = null; //raíz 
    }
    add(data, toNodeData)  //añadir, el segundo parametro es el primero de la anterior.
    {
        let node = new Node(data);
         let parent = toNodeData ? this.findBFS(toNodeData) : null; //si hay nodeData se llama la función FindBfs (busqueda por amplitud)
        
         if(parent)      //si parent se encuentra , se agrega un nodo al hijo.
         {
          parent.children.push(node);
         } 
         else 
         {
            if(!this.root)  //si la raíz no es nula, se agrega un nodo
              {
               this.root = node;
               } 
            else 
            {
               return 'Root node is already assigned';
            }
        }
    }

    remove(data)
    {
        if(this.root.data === data)  //si el dato de la raíz es igualal nuevo dato
        {
          this.root = null;           //se nulifica
        }
      
        let queue = [this.root];  //se guarda la ruta en queue
        
        while(queue.length) 
         {
           let node = queue.shift();
           for(let i = 0; i < node.children.length; i++) 
            {
             if(node.children[i].data === data)  //si el nodo iterado es igual al parametro 
             {
              node.children.splice(i, 1); //cambia el contenido en uno con forme a la iteración para recorrerlo en el lugar eliminado;
             } 
             else 
             {
              queue.push(node.children[i]); //si no, se guaarda el nodo indice de children en queue
             }
          }
        }
    };

    contains(data) { return this.findBFS(data) ? true : false;};

    findBFS(data) //busqueda por amplitud 
    {
     let queue = [this.root]; //queue es un array que almacena la raíz
        
     while(queue.length)
     {
        let node = queue.shift(); //node recupera el primer elemnto 
         if(node.data === data)
         {
            return node; //si el nodo.data es igual que el dato que introdujo se devuelve un nodo 
          }
           for(let i = 0; i < node.children.length; i++)
            {
            queue.push(node.children[i]); //se almacena en queue el nodo hijo 
            }
         }
        return null;//si no se devuelve null
    };

    _preOrder(node, fn) 
    {
        if(node) //si nodo no está vacío
         {
           if(fn) //si fn no está vacio 
            {
              fn(node); //se usa el metodo con node para imprimir
            }
          
            for(let i = 0; i < node.children.length; i++) //si no, se hace recursión el numer de hijos nodo veces
            {
               this._preOrder(node.children[i], fn);
            }
        }
    };

    _postOrder = function(node, fn) 
    {
        if(node)
         {
          for(let i = 0; i < node.children.length; i++)
           {
            this._postOrder(node.children[i], fn);
           }
          if(fn) 
          {
            fn(node);
          }
        }
      };

     traverseDFS(fn, method) //busqueda por profundidad 
      {
        let current = this.root; //se guarda la raíz
        if(method) 
        {
          this['_' + method](current, fn);
        } 
        else 
        {
          this._preOrder(current, fn);
        }
      };

      traverseBFS(fn) 
      {
        let queue = [this.root];
        while(queue.length)
         {
          let node = queue.shift(); //en la variable node se guarda el primer valor del queue[]
          if(fn) {
            fn(node);
          }
          for(let i = 0; i < node.children.length; i++) 
          {
            queue.push(node.children[i]);
          }
        }
      };

      print() //imprimir
      {
        if(!this.root) 
        {
          return console.log('No root node found');
        }

        let newline = new Node('|');
        let queue = [this.root, newline];
        let string = '';
        while(queue.length) 
        {
          let node = queue.shift();
          string += node.data.toString() + ' ';
          if(node === newline && queue.length) 
          {
            queue.push(newline);
          }
          for(let i = 0; i < node.children.length; i++) 
          {
            queue.push(node.children[i]);
          }
        }
        console.log(string.slice(0, -2).trim());
      };

      printByLevel() 
      {
        if(!this.root)
         {
          return console.log('No root node found');
         }
        let newline = new Node('\n');
        let queue = [this.root, newline];
        let string = '';
        
        while(queue.length) 
        {
          let node = queue.shift();
           string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
           if(node === newline && queue.length)
          {
            queue.push(newline);
          }
          for(let i = 0; i < node.children.length; i++)
           {
             queue.push(node.children[i]);
           }
        }
        console.log(string.trim());
      };

}

let tree = new Tree();
tree.add('ceo');
tree.add('cto', 'ceo')
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');

tree.print()
tree.printByLevel()
console.log('Contiene el árbol [dev1] ?:', tree.contains('dev1')); 
console.log('Contiene el árbol  [dev4] ?:', tree.contains('dev4'));
console.log('--- BFS')
tree.traverseBFS(node => {console.log(node.data)})

console.log('---DFS preOrder');
tree.traverseDFS(node => {console.log(node.data)},'preOrder')

console.log('--- DFS postOrder');
tree.traverseDFS(node=> {console.log(node.data)},'postOrder');

tree.remove('cmo');
tree.print(); 
tree.remove('cfo');
tree.print(); 