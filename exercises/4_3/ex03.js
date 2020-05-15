let n=5;
let text = "";

for (i=n; i>=0; i--) {
  for (j=0; j<n; j++){
    text += (j>=i) ? "*" : " ";
  }
  console.log(text);
  text = "";
}