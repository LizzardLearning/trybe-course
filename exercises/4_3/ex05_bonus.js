let n=5;
let text = "";
let median = Math.floor(n/2);

for (i=0; i<median+2; i++) {
  for (j=0; j<n; j++){
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
  console.log(text);
  text = "";
}