function nAleatorios()
{
 let almacen = new Set();
 var text = ""; 
 var consonantes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 var vocales = "AEIOU";
 for(j = 0; j < 10;j++)
 {  
    let longitud = Math.round(Math.random()*6);
    if (longitud < 2) longitud = 2;
 for (var i = 0; i < longitud; i++) 
  {
     text += consonantes.charAt(Math.floor(Math.random()* consonantes.length));
     text += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  almacen.add(text)
   text = "";
}

  return almacen;
}


console.log(nAleatorios())
