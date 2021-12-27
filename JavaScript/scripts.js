/* desafio

Dado um valor inteiro n, complete o código abaixo de acordo com as condições:
Se n for ímpar, exiba no console: "Estranho";
Se n for par e for menor que 10, exiba no console: "Não é estranho";
Se n for par e estiver entre 10 e 20, exiba no console: "Estranho";
Se n for par e for maior que 20, exiba no console: "Não é estranho". */


// if (n1 > n2) {
//   console.log("n1 é maior");
// } else {
//   console.log("n1 é menor");
// }

// var num = n;

// if (num % 2 !== 0){
//     console.log("Estranho");break;
//   } else if (num % 2 == 0 && num < 10){
//     console.log("Não é estranho"); break;
//   } else if (num % 2 == 0 && num >= 10 && num <= 20){
//     console.log("Estranho");break;
//   } else if (num % 2 == 0 && num > 20){
//     console.log("Não é estranho");break;
// }

//--------------desafio vogal ou consoante

// var letter = 'f';

// switch (letter) {
//   case 'a':
//     console.log("A - É UMA VOGAL");break;
//   case 'e':
//     console.log("E - É UMA VOGAL");break;
//   case 'i':
//     console.log("I - É UMA VOGAL");break;
//   case 'o':
//     console.log("O - É UMA VOGAL");break;
//   case 'u':
//     console.log("U - É UMA VOGAL");break;
//   default:
//     console.log("A LETRA DIGITADA É UMA CONSOANTE");
// }

//------------------------outro jeito de fazer o desafio

// var letter = 's',
//     isVowel = false;

// switch(letter){
//     case 'a': isVowel = true; break;
//     case 'e': isVowel = true; break;
//     case 'i': isVowel = true; break;
//     case 'o': isVowel = true; break;
//     case 'u': isVowel = true; break;
// }

// if(isVowel){
//     console.log('É UMA VOGAL');
// }else{
//     console.log('É UMA CONSOANTE');
// }

//------------------------

// var n1 = 3;
//     n2 = 5;

/*
if (n1 > n2){
    console.log('n1 é maior');
} else{
    console.log("n1 é menor");
}

n1 > n2 ? console.log('n1 é maior') : console.log('n1 é menor') */

// var maior = n1 > n2 ? n1 : n2;

//------------------

//  var n1 = 500;

//  switch(n1){
//     case 1000:
//          console.log('GANHA UMA SMART TV'); break;
//     case 500:
//          console.log('GANHA UM NOTEBOOK'); break;
//     case 300:
//          console.log('GANHA UM CELULAR'); break;
//     default: console.log('Outro valor');
//  }

//--------------desafio par ou impar

// var num = 5;

// if (num % 2 === 0) {
//     console.log("O numero é par");
// } else {
//     console.log("O numero é impar");
// }


//--------------laços for e loops

// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

//-------laços

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// var resposta = '';

// while(resposta !== 'sair'){
//     resposta = prompt('Digite sua resposta');
//     console.log('sua resposta foi ' + resposta);
// }

//--------DO WHILE

// var resposta = '';

// do{
//     resposta = prompt('DIGITE SUA RESPOSTA');
//     console.log('sua resposta foi '+ resposta);
// } while(resposta !== '')

//----- DO WHILE

// for(var i = 0; i < 5; i++){    
//     if(i === 2){
//         continue;
//     }
//     console.log(i);
// }

//-----desafio triangulo

// for(var i = 0; i < 10; i++){
//     var line = '';
//     for(var j = 0; j < i; j++){
//         line += '*';
//     }
//     console.log(line);
// } 

// for (var i = 10; i > 0; i--) {
//   var line = "";
//   for (var j = 0; j < i; j++) {
//     line += "*";
//   }
//   console.log(line);
// } 


//------ tabuada

// {
//   for (var i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + n * i);
//   }
// }

// function sum(n1, n2){
//     var total = n1 + n2;
//     return total;
// }

// function myFunc(){
//     console.log('Hello World');
//     return 5;
// }

// setTimeout(myFunc, 5000);


//funcoes anonimas

// setTimeout(function(){
//     console.log('ABC');
// }, 2000);

// setTimeout(() => {
//     console.log('Def')
// }, 2000);

//arrow function - diferenca de uma funcao normal: 

// function myFunc(otherFunc){
//     console.log(otherFunc());
// }

// myFunc( myFunc2 => 10 + 5); //arrow function
 
// myFunc(function(myFunc2){ //function normal
//     return 10 + 5;
// })

//DESAFIO SE O NUMERO É OU NAO PRIMO

// function isPrime(num){
//     for(var i = 2; i < num; i++){
//         if (num % i === 0){
//             return false;
//         }
//     } return num !== 1;
// }


//desafio factorial

// function fatorial(n) {
//   if (n === 0) return 1;

//   return n * fatorial(n - 1);
// }

// function main(n) {
//   console.log(fatorial(n));
// }



//

// function arrowfunction() {
//   return (s) => (s % 2 === 0 ? s * 2 : s * 3);
// }

// function main(valores) {
//   let transformacao = arrowfunction();
//   try {
//     new transformacao();
//     console.log("É necessário definir uma arrow function");
//   } catch (e) {}

//   console.log(valores.map(transformacao).toString().split(",").join(" "));
// }


//objetos

// var myObj = {
//     lengh: 15,
//     color: 'yellow',
//     write: function(){
//         console.log('Hello');
//     }
// }

//trabalhando com arrays

