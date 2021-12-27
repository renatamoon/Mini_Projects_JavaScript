//[...myArray, ...myArray2] - unindo dois arrays
// var myArray = [1, 2, 3];
// var myArray2 = [4, 5, 6];


// for of

// var myArray1 = [5, 10, 15, 20];
// var myObj = {
//     d: 10,
//     e: 20,
//     f: 30
// }

// for(let a of myArray){
//     console.log(a)
// }

//qual o menor numero?

// function min(numbers){
//     var min = numbers[0];
//     for(var i = 0; i < numbers.length; i++){
//         if(numbers[i] < min){
//             min = numbers[i];
//         }
//     } return min;
// }

//desafio elevador - objetos

// var Elevator = {
//     floor: 0,
//     total: 3,

//     up(){
//         if(this.floor < this.total){
//             this.floor++;
//         } this.print();
//     },

//     down(){
//         if(this.floor > 0){
//             this.floor--;
//         } this.print();
//     },

//     print(){
//         console.log(`Andar: ${this.floor}`);
//     }
// }

// Elevator.print();

//funcao que retorna o segundo maior valor

// function segundoMaior(numeros) {
//   let maior = numeros[0];
//   let segMaior = numeros[0];
//   for (let num of numeros) {
//     if (num > maior) {
//       segMaior = maior;
//       maior = num;
//     } else if (num > segMaior && num != maior) segMaior = num;
//   }
//   return segMaior;
// }

// function main(linhas) {
//   for (let valores of linhas) {
//     console.log(segundoMaior(valores.split(" ").map(Number)));
//   }
// }



//objetos

function meuObjeto(a, b) {
  return {
    largura: a,
    comprimento: b,
    perimetro: 2 * (a + b),
    area: a * b,
  };
}

function main(valores) {
  let obj = meuObjeto(valores[0], valores[1]);
  console.log(obj.largura);
  console.log(obj.comprimento);
  console.log(obj.perimetro);
  console.log(obj.area);
}