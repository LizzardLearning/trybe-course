let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "sim";

let info2 = Object.create(info);

info2.personagem = "Tio Patinhas";
info2.origem = "Christmas on Bear Mountain, Dell’s Four Color Comics #178";
info2.origem += "O último MacPatinhas";

for(key in info){
  console.log(info[key] + " e " +info2[key]);
}
