var n=5; //número de filas  

//creación de matríz
var A= new Array(n);  
for (var i=1;i<=n;i++) 
{  
 A[i] = new Array(n);  
}  


//llenado de matriz
for(i=1;i<=n;i++)  
 for(j=1;j<=i;j++)
 { 
  A[i][j]=combina(i-1,j-1);  
 }  

//impresión de los resultados  
console.log("El quinto renglón del triangulo de pascal es : ")

for(i=1;i<=n;i++)
{  
 for(j=1;j<=i;j++)
 {  
  if (i == 5 )
  {
    console.log(A[i][j]);   
  } 
}   
    
}  


//función que calcula el número combinatorio p sobre q  
function combina(p,q)
{  
 return  Math.round(fact(p)/(fact(q)*fact(p-q)));   
}  


//función que calcula el factorial  
function fact(h)
{  
 var f=1;  
 if (h!==0)
 {  
  for (k=1;k<=h;k++){  
   f*=k;  
  }  
 }  
 return f;  
}  