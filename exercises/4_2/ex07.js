let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minor = numbers[0];

for(i in numbers){
   if(numbers[i] < minor) minor = numbers[i];
}

console.log("O menor número é", minor);