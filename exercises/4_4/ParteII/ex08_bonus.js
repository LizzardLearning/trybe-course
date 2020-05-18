function romanToNumber(roman){
  roman = roman.toLowerCase();
  let n = 0;
  let table = {
    i : 1,
    v : 5,
    x : 10,
    l : 50,
    c : 100,
    d : 500,
    m : 1000
  };

  //Verifica que as letras dadas correspondem aos números romanos
  for(i in roman){
    if(!table.hasOwnProperty(roman[i])) return -1;
  }

  //Verifica se o número tem apenas 1 caractere
  if(roman.length == 1) return table[roman];

  //Verifica se o penúltimo algarismo é 1 e maior que o último e faz a compactação das unidades se necessário
  if(table[roman[roman.length-2]] == 1 && table[roman[roman.length-1]] > 1){
    n = table[roman[roman.length-1]] - table[roman[roman.length-2]];
    roman = roman.slice(0, roman.length-2);
  }

  let last_char = "";
  for(i in roman){
    if(i == 0){
      last_char = roman[i];
      n += table[roman[i]];
    } else {
      //atual e último
      if(table[roman[i]] > table[last_char]){
        n -= table[roman[i]];
      } else {
        n += table[roman[i]];
      }
      last_char = roman[i];
    }

    n = Math.abs(n);
  }
  return n;
}

console.log(romanToNumber("CD"));