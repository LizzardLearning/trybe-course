function greaterValueIndex(array){
  if(array.length == 0) return -1;
  let greater_index = 0;
  for(index in array){
    if(typeof(array[index]) != "number") return -1;
    if(array[index] < Number(array[greater_index])){
      greater_index = index;
    }
  }
  return greater_index;
}

console.log(greaterValueIndex([2, 4, 6, 7, 10, 0, -3]));