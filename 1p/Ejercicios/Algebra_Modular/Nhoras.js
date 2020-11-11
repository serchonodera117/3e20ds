function queHoraSerá(x)
{
   
   let fecha = 10;
   let UnU = fecha + x%24; //25mil en división sintetica, da los días exactos
                                      //pero, denecesitar el resultado, decimal,
                                      //el residuo sería las horas del día
   if (UnU > 24)return UnU - 24;
   else if (UnU == 24) return UnU = 0;
   else if (UnU < 0) return UnU = 24- x%24;
   else return UnU;
}

console.log("que hora fue hace 25,000 horas: ", queHoraSerá(15));


