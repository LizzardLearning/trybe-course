//Declara as variáveis básicas
let n=5;
let text = "";

//Calcula o tamanho da mediana da linha para identificar a coluna central
let median = Math.floor(n/2);

/*
**  Imprime o número de colunas que coincide com n asteríscos
**  para isso, uso como N a mediana somado a 2
*/

for (i=0; i<median+2; i++) {
  for (j=0; j<n; j++){
    //para imprimir as linhas, uso a mediana como referência
    if(i==1 || i==median+1){
      if(j<=median-i || j>=median+i){
        text += " ";
      } else {
        text += "*";
      }
    } else if(i!=0){
      if(j==median-i+1 || j==median+i-1){
        text += "*";
      } else {
        text += " ";
      }
    }
  }
  //Imprime cada linha já formatada
  console.log(text);
  text = "";
}
