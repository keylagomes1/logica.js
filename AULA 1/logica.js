// / / variaveis

// let nome = "joão";
// let idade = 22;
// let tamanho = 1.85;
// let aprovado = true;

// console.log("soma idade + tamanho =", idade + tamanho);
// console.log("subtração idade - tamanho =", idade - tamanho);
// console.log("mutiplicando idade * tamanho =", idade * tamanho);
// console.log("divisão idade / tamanho =", idade / tamanho);
// console.log("resto idade * idade / tamanho =", idade % tamanho);

// let idade1= 100;
// let idade2= 200;

// console.log("soma idade + idade2=", idade1 + idade2);
// console.log("subtração idade - idade2=", idade1 - idade2);
// console.log("mutiplicação idade * idade2=", idade1 * idade2);
// console.log("divisão idade / idade2=", idade1 / idade2);
// console.log("resto idade + idade2=", idade1 % idade2);

// && e
// || ou 
// ! not

let idade = 15;

if (idade<=10) {
    console.log("keylinha é uma criança");

} 
else if (idade>=10 && idade < 15) {
    console.log("keylinha é uma pré-adolecente");

} else if (idade >=15 && idade < 18){
    console.log("keyla se tornou um adolecente");

}else if (idade >=18 && idade <=60){
    console.log("keyla é uma adulta");

} else{
    console.log("keyla é uma idosa");
}



let tipousuario="hrfgbbgf"
if(tipousuario == "admin"){
    console.log("acesso total")
}
else if(tipousuario =="editor"){
    console.log("acesso limitado")
}
else if(tipousuario =="visitante"){
    console.log("acesso somente leitura")

}
else{
    console.log("tipo de usuario invalido")
}


