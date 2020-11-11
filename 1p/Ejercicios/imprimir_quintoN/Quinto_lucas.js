
let L1 = 2;
let L2 = 1;
let Ln =  1;
for(i = 1; i<= 9; i++)
{
   if (i == 4) console.log("El quinto numero de lucas es : ",Ln)
    Ln =  L1 + L2;
    L1 = L2;
    L2 =Ln;
    
}
