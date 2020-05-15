function somatory(n){
  let num = 0;
  for(let i=1; i<=n; i++){
    num += i;
  }
  return num;
}
console.log(somatory(5));