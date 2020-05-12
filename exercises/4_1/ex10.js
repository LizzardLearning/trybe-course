let custo = 12, preco = 15;
let lucro = 0;

if(custo < 0 || preco < 0 || preco < custo) console.log("erro!");
else{
    custo *= .8;
    lucro = (preco - custo)*1000;
}

console.log(lucro.toFixed(2));