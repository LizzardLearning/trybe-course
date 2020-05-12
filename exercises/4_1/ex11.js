let salario = 3000;
let roubo1 = 0, roubo2 = 0;

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

console.log(salario.toFixed(2));