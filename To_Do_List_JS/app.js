'use strict';



let database = []; 



/* caso seja vazio, retorna um array vazio. O ?? significa 'se não' */
const getDatabase = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
const setDatabase = (database) => localStorage.setItem('todoList', JSON.stringify(database));


/* essa função adiciona um item e renderiza dentro do HTML*/
/* recebe uma tarefa e status, caso o status estiver como vazio, não
    da o checked e se passar, da o checked*/
/* pega cada item dentro do array */
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}


const limparTarefas = () => {
  const todoList = document.getElementById('todoList');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}


/* essa classe atualiza o banco de dados e atualiza a tela*/
const atualizarTela = () => {
    limparTarefas();
    const database = getDatabase();
    database.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice)); /* pega cada item dentro do array */
}



const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const database = getDatabase(); //pega do banco de dados
        database.push ({'tarefa': texto, 'status': ''}); //puxa os dados do banco de dados
        setDatabase(database); //seta o banco
        atualizarTela(); //depois atualiza
        evento.target.value = ''; /* limpando a tarefa*/
    }
}


const removerItem = (indice) => {
    const database = getDatabase();
    database.splice (indice, 1);
    setDatabase(database);
    atualizarTela();
} /* adicionando o item que acabou de criar */





const atualizarItem = (indice) => {
    const database = getDatabase();
    database[indice].status = database[indice].status === '' ? 'checked' : '' ;
    setDatabase(database);
    atualizarTela();
}



/* funcao para remover o item e também acessar qual elemento está sendo clicado*/
const clickItem = (evento) => {
    const elemento = evento.target;
    console.log (elemento.type);
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type ==='checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}




document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);



atualizarTela();