let piece = "Bispo";

piece = piece.toLowerCase();

if(piece === "torre") console.log("Horizontal");
else if(piece === "bispo") console.log("Diagonal");
else if(piece === "peao") console.log("1 casa vertical");
else if(piece === "cavalo") console.log("L");
else if(piece === "rainha") console.log("Livre");
else console.log("1 casa livre");