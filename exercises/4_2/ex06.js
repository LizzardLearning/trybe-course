let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for(i in numbers){
   if(numbers[i]%2 != 0) odd++;
}

console.log(odd);