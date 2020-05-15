let n=5;
let text = "";

for (i=0; i<n; i++) {
  for (j=0; j<n; j++){
    text += "*";
  }
  console.log(text);
  text = "";
}