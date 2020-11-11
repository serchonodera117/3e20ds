let n = 10;
let a = []
for(i = 1; i<=n;i++)
{
 a.push(Math.round(Math.random()*10));  
}
for(i = 0; i < a.length; i++)
{
    console.log("n[",i+1,"] = ",a[i])
}
