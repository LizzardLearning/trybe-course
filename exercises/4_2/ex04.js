let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let avarage = 0;

for(i in numbers){
    avarage += numbers[i];
}
avarage /= numbers.length;

(avarage > 20) ? console.log("Valor maior que 20") : console.log("Valor menor ou igual a 20");