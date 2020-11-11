let n=10
let d = 0
let a = []
for(let i=1;i <=  n*2 ;i++)
{
    if(i%2 > 0)
    {
       d++
        if ((d%2) > 0) a.push(i-(i*2) ); 
        else a.push(i);
    }   
}
for(i = 0; i<a.length; i++)
{
    console.log("n = [",i+1,"] = ", a[i])
}