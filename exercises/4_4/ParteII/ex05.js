function mustCommon(array){
  if(array.length == 0) return -1;

  let caracters = {};

  for(index in array){
    if(!caracters.hasOwnProperty(array[index])){
      caracters[array[index]] = 0;
    }
    caracters[array[index]]++;
  }
  return caracters;
}

console.log(mustCommon([2, 3, 2, 5, 8, 2, 3]));