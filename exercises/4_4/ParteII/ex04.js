function greaterName(array){
  if(array.length == 0) return -1;
  let greater_name = "";
  for(index in array){
    if(typeof(array[index]) != "string") return -1;
    if(array[index].length > greater_name.length){
      greater_name = array[index];
    }
  }
  return greater_name;
}

console.log(greaterName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));