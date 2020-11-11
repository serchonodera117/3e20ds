let L1 = 2;
let L2 = 1;
let Ln =  1;
console.log(L1);
for(i = 1; i<= 9; i++)
{
    console.log(Ln)
    Ln =  L1 + L2;
    L1 = L2;
    L2 =Ln;
    
}