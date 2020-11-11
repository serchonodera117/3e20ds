function dia(x)
{
    día = 1
    let ÙnÚ =  día + x%7;  

    if (ÙnÚ>7)ÙnÚ-7; 
    
    if (ÙnÚ == 1)return "lunes";
    else if (ÙnÚ == 2)return "martes";
    else if (ÙnÚ == 3)return "miercoles";
    else if (ÙnÚ == 4)return "jueves";
    else if (ÙnÚ == 5)return "viernes";
    else if (ÙnÚ == 6)return "sabado";
    else if (ÙnÚ == 7)return "domingo";
    
}

console.log(dia(11))