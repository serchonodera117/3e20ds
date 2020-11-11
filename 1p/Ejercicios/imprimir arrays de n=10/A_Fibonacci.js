let N = 10;
let Fibo1 = 1;
let Fibo2 = 0;
let Fn =  0;
let a = [];
for(i = 0; i< N; i++)
{
    if (i >0 )fibo2 = 1

    Fn =  Fibo1 + Fibo2;
    Fibo1 = Fibo2;
    Fibo2 = Fn;

    a.push(Fn)   
}

for(i = 0; i < a.length; i++)
{
    console.log("n [",i+1,"]= "+a[i] );
}
