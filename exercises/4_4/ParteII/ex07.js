function isSufix(str, sufix){

  if(typeof(str) != "string" || typeof(sufix) != "string") return false;
  str = str.toLowerCase();
  sufix = sufix.toLowerCase();

  return str.substr(sufix.length) === sufix;
}
console.log(isSufix("luis", "is"));