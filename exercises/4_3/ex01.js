let value = 5;
let txt = "";

for(i=0; i<value; i++){
    for(j=0; j<value; j++){
        txt += "*";
    }
    console.log(txt);
    txt = "";
}