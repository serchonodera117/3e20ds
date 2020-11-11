function dia(x)
{
    día = 0
    let ÙnÚ =  día - x%7;  

    if (ÙnÚ < 0 )ÙnÚ * 1; 
    if (ÙnÚ  < -7)ÙnÚ  + 7;
    

    if (ÙnÚ == -7)return "lunes";
    else if (ÙnÚ == -6)return "martes";
    else if (ÙnÚ == -5)return "miercoles";
    else if (ÙnÚ == -4)return "jueves";
    else if (ÙnÚ == -3)return "viernes";
    else if (ÙnÚ == -2)return "sabado";
    else if (ÙnÚ == -1)return "domingo";
    
    
}

console.log(dia(11))