a = []
for (i = 1; i<=10;i++)
{
    a.push((i*(i+1))/2);
}
for(i = 0; i < a.length; i++)
{
    console.log("N [",i+1,"]",a[i])
}