let n = 10;
let a = [];
for (i = 1; i<=10;i++)
{
    a.push(Math.sin(i));
}
for(i = 0; i < a.length; i++)
{
  console.log("seno de [",i+1,"] = ",a[i])
}