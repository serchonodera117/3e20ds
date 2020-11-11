let n =30
let a = [];
for(let i = 2; i<=n; i++)
{
    var primo= 1;
    var xd= 2;
    while (xd <= i/2 && primo)
  {
    if ( i % xd ===0) primo = 0;    
    xd++;
   }

    if (primo)
    {
         a.push(i);
    }
}

for(i = 0; i<a.length; i++)
{
    if (i ==4 )console.log("quinto primo es :",a[i])
}