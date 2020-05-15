function isPalindrome(str){

  if(str.length % 2 == 0 || typeof(str) != "string") return false;
  str = str.toLowerCase();

  let middle_letter_index = Math.floor(str.length/2);
  let first_part = str.substring(0, middle_letter_index);
  let last_part = str.substring(middle_letter_index+1);
  
  let first_part_index = 0;
  for(let i=last_part.length-1; i>0; i--){
    if(last_part[i] != first_part[first_part_index]) return false;
    first_part_index++;
  }
  return true;
}

console.log(isPalindrome("arara"));