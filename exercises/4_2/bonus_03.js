let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let new_numbers = [];

for(let i=0; i<numbers.length; i++){
    if(i === numbers.length - 1){
        new_numbers.push(numbers[i] * 2);
    } else {
        new_numbers.push(numbers[i] * numbers[Number(i+1)]);
    }
}

console.log(new_numbers);  