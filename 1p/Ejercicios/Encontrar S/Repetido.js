function repetido ()
{
   let s =[3,1,4,2,3]
for(i=0;i < s.length; i++)
  for(j=i+1;j<s.length;j++)
  {
     if(s[i] == s[j]) console.log("numero repetido = [",s[j],"]");
  }
}


console.time()
repetido()
console.timeEnd()
console.log("Complejidad cuadrática");