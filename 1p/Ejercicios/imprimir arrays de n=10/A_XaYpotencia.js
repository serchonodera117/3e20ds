let n = 10;
let a = []
for (i = 1; i <= 10; i++)
{
     a.push(Math.pow(10,i));
}
for(i = 0; i < a.length; i++)
{
  console.log("10 ^ [",i+1,"] = ",a[i])
}
