let n = 10;
let array = [];
for(let i = 1; i<=10;i++)
{
    if(i%2 != 0)array.push(i);     
}
for(i = 0; i < array.length; i++)
{
    console.log("n [",i+1,"]= "+array[i] );
}