function fibonacci (x)
{
    if(x <= 1)return x;
    else return (fibonacci(x-1) + fibonacci(x-2))
}

console.log(fibonacci(10))