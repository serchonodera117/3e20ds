function nAleatorios()
{
 let almacen = new Map();
 var text = ""; 
 var consonantes = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
 var vocales = "AEIOU"
 for(j = 0; j < 10;j++)
 {  
  longitud =  Math.round(Math.random()*6);
  if (longitud < 2)longitud = 2;  
 for (var i = 0; i < longitud; i++) 
  {
     text += consonantes.charAt(Math.floor(Math.random()* consonantes.length));
     text += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  if (j ==0 )almacen.set('Nombre1', text);
  else if (j ==1 )almacen.set('Nombre2', text)
  else if (j ==2 )almacen.set('Nombre3', text)
  else if (j ==3 )almacen.set('Nombre4', text)
  else if (j ==4 )almacen.set('Nombre5', text)
  else if (j ==5 )almacen.set('Nombre6', text)
  else if (j ==6 )almacen.set('Nombre7', text)
  else if (j ==7 )almacen.set('Nombre8', text)
  else if (j ==8 )almacen.set('Nombre9', text)
  else if (j ==9 )almacen.set('Nombre0', text);
  
   text = "";
}

  return almacen;
}


console.log(nAleatorios())