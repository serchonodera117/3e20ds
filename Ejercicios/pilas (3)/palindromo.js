class Palindromo
{
    constructor()
    {
        this.items = {};
        this.top = 0;
    }
    push(data)
    {
        this.top++;
        this.items[this.top] = data;
    }
    getAndDelete() {
        let deleteData;
        if (this.top) {
            deleteData = this.items[this.top];
            delete this.items[this.top];
            this.top--
        }
        return deleteData;
    }

    getSize(){return this.top}
    isEmpty()
    {if(!this.getSize()) return true;  //saber si está vacío
    else return false;}


    peek()
    {
        if(this.isEmpty())return null;
        else return this.items[this.top]; //decir cual es el de la pila
    }

    print()
    {
        if(this.isEmpty())return null,"pila vacía"
        let result = '';
        for(let i = this.top; i>0 ; i--)
        {
            result += this.items[i] + ' '
        }
        return result;
    }
    clear()
    {
        this.items = [];
        this.top = 0;
    }

    isPalindrome(word)
    {
        let arr = word.split("");
        let inverse = arr.reverse();
        this.push(word)
        return word == inverse.join("")? "es palindromo" : "no es palindromo"
    }
}

let palabras = new Palindromo();
console.log(palabras.isPalindrome("oso"));
console.log(palabras.isPalindrome("perro"))

console.log("pila : ", palabras.print().toString())