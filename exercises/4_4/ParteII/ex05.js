function mustCommon(array){
  if(array.length == 0) return -1;

  let caracters = {};
  let winner = array[0];

  for(index in array){
    if(!caracters.hasOwnProperty(array[index])){
      caracters[array[index]] = 0;
    }
    caracters[array[index]]++;
  }

  for(index in caracters){
    if(caracters[winner] < caracters[index]){
      winner = index;
    }
  }

  return winner;
}

console.log(mustCommon([2, 3, 2, 5, 8, 2, 3]));