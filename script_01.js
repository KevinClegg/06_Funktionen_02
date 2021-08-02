
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung 
2. Auswahl Rechenart 
3. Fkt. Grundrechenarten : Check ! 
4. Ausgabe in Konsole : Check !
*/



//Modul: Rechenart auswählen | Test :
ausgabe(rechner(10,"+",4));
ausgabe(rechner(10,"-",4));
ausgabe(rechner(10,"*",4));
ausgabe(rechner(10,"/",4));
ausgabe(rechner(10,"/",0));
function rechner(a,op,b) 
{        // a,b -----> Operanden / Operatoren : +,-...


        switch (op) {
            case "+": 
                return addieren(a,b);
            case "-": 
                return subtrahieren(a,b);
            case "*": 
                return multiplizieren(a,b);
            case "/": 
                return dividieren(a,b);
            default:
                return "Irgentwas ging schief";
        }

}



// Modul : Division a / b | Test:
// ausgabe(dividieren(4,2));
// ausgabe(dividieren(4,-2));
// ausgabe(dividieren(1,4));
// ausgabe(dividieren(0,2));
// ausgabe(dividieren(2,0));
function dividieren(a,b) 
{
    
    if(b != 0) {
        return a/b;
    } return "Error"
    
    
    
    
    // if (b == 0) {
    //     return "Error"
        
    // } else {
    //     return a/b
        
    // }
    
}



//Modul: Multiplikation a * b | Test :

// ausgabe(multiplizieren(2,0))
function multiplizieren(a,b) 
{
    return a * b ;   
}



//Modul: Subtraktion a - b | Test :

// ausgabe(subtraktion(3,10))
function subtrahieren(a,b) 
{
    return a - b;  
}


// Modul: Addition a + b| Test :

// ausgabe(addieren(2,2));
function addieren(a,b) 
{
    
    return a + b ;
}


// Modul : Konsolenausgabe | Test:

// ausgabe("Hallo Welt");
// ausgabe(20);
function ausgabe(outputStr) 
{   
    // if (typeof outputStr == typeof 1)
    if (typeof outputStr == "number") {
        outputStr = "Das Ergebnis ist: " + outputStr
    }

    
    console.log(outputStr);   
}
