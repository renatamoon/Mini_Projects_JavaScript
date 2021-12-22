//alert('Hello World 2')

//-----------------

var myValue = 5;

myValue = myValue + 2;
myValue += 2;

//-----------------------desafio do professor

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim();
  
  stdin.pause(); // stop reading
  
  main(Number(textoLido));
});

//Função
function main(textoLido)
{
    console.log(Number.isInteger(textoLido));
}

//-----------------soma e subtraçao

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split(' ');
  
  stdin.pause(); // stop reading
  
  main(Number(textoLido[0]), Number(textoLido[1]));
});

//Função
function main(valor1, valor2)
{
    console.log(valor1 + valor2);
    console.log(valor1 - valor2);
}

//-------------------divisao e multiplicação

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split(' ');
  
  stdin.pause(); // stop reading
  
  main(Number(textoLido[0]), Number(textoLido[1]));
});

//Função
function main(valor1, valor2)
{
    console.log((valor1 / valor2).toPrecision(4));
    console.log((valor1 * valor2).toPrecision(4));
}

//----------------comparações

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split(' ');
  
  stdin.pause(); // stop reading
  
  main(Number(textoLido[0]), Number(textoLido[1]));
});

//Função
function main(valor1, valor2)
{
    console.log(valor1 !== valor2 ? 0 : 1);
}

//------------v