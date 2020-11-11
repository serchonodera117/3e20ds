let n=10
d = 0
for(let i=1;i <=  n*2 ;i++)
{
    if(i%2 > 0)
    {
       d++
        if ((d%2) > 0) console.log( "n  [",d,"] = ",i-(i*2) ); 
        else console.log("n  [",d,"] = ",i);
    }   
}