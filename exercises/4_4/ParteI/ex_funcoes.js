
function sum (a, b){
    return(a+b);
}

function multiply (a, b){
    return(a*b);
}

function divide (a, b){
    return(a/b);
}

function module (a, b){
    return(a%b);
}

function printBetTwo(a, b){
    if(a > b) return(a);
    else return(b);
}

function greaterBetThree(a, b, c) {
    if(a < b) a = b;
    if(a < c) a = c;
    
    return(a);    
}

function posOrNeg(a){
    if(a > 0) return("Positive");
    else return("negative");
}

function isTriangle(a, b, c){
    return((a+b+c == 180));
}

function checkChessPiece(piece){
    piece = piece.toLowerCase();

    if(piece === "torre") return("Horizontal");
    else if(piece === "bispo") return("Diagonal");
    else if(piece === "peao") return("1 casa vertical");
    else if(piece === "cavalo") return("L");
    else if(piece === "rainha") return("Livre");
    else return("1 casa livre");
}

function checkPercent(percent){
    if(percent > 100 || percent < 0) return("Error!");
    else if(percent >= 90) return("a");
    else if(percent >= 80) return("b");
    else if(percent >= 70) return("c");
    else if(percent >= 60) return("d");
    else if(percent >= 50) return("e");
    else return("f");
}

function evenInthree(a, b, c){
    return((a%2==0 || b%2==0 || c%2==0)); 
}

function calcProfit(custo, preco){
    if(custo < 0 || preco < 0 || preco < custo) return("erro!");
    else{
        custo *= .8;
        lucro = (preco - custo)*1000;
    }
    
    return(lucro.toFixed(2));
}

function calcTheft(){
    // calcula o roubo1 (INSS)
    if(salario < 1556.94) roubo1 = salario * .08;
    else if(salario < 2594.92) roubo1 = salario * .09;
    else if(salario < 5189.82) roubo1 = salario * .11;
    else roubo1 = 570.88;

    salario -= roubo1;

    // calcula o roubo2 (IR)
    if(salario < 1903.98) roubo2 = 0;
    else if(salario < 2826.65) roubo2 = (salario * .075) - 142.8;
    else if(salario < 3751.05) roubo2 = (salario * .15) - 354.8;
    else if(salario < 4664.68) roubo2 = (salario * .225) - 636.13;
    else roubo2 = (salario * .275) - 869.36;

    salario -= roubo2;

    return(salario.toFixed(2));
}