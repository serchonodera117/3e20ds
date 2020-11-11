let L1 = 2;
let L2 = 1;
let Ln =  1;
let a = [];
console.log(L1);
for(i = 1; i<= 9; i++)
{
    a.push(Ln)
    Ln =  L1 + L2;
    L1 = L2;
    L2 =Ln;
}
for(i = 0; i<=a.length; i++)
{
    console.log(a[i]);
}