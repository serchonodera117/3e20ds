let N = 10
let a = []
for(i = 9; i>= 1;i--)
{
   N = N*i;
   a.push(N);
}
for(i = 0; i < a.length; i++)
{
    console.log(a[i]);
}
