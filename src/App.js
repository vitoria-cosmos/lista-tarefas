import React, { useState } from 'react';
import './App.css';

function App() {
  // aqui estamos criando um componente que se chama App

  const [tarefas, setTarefas] = useState([]);
  // aqui estamos criando um estado que vamos estar mundando, ele se chama tarefas
  // o set tarefas vai ser a função que vai nos permitir mudar o valor do estado tarefas
  // o useState que nos permite criar esses estados de forma mais simples
  // useState([]) significa que estamos começamos a declarar nosso estado tarefas com um valor padrão de uma lista vazia
  const [input, setInput] = useState('');
  // aqui estamos criando outro estado que vai ser chamado de input
  // a função que vai lidar a atualização desse estado é o setInput
  // esse estado vai ser iniciado com um valor vazio

  function handleAdd() {
    // aqui estamos criando uma função que vai ser responsável por atualizar a nossa lista de tarefas
    setTarefas([...tarefas, input]);
    // aqui é a nossa função que atualiza o nosso estado tarefas
    // ela vai pegar todos os itens da lista e adicionar novos com os valores do input
    setInput('');
    // depois que apertamos no botão e adicionamos mais uma nova tarefa, o valor do input vai ficar vazio
  }

  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <div className='container_tarefas'>
        <ul className='tarefas'>
          {tarefas.map((tarefa) => (
            <li key={tarefa} className='tarefa'>{tarefa}</li>
          ))}
        </ul>
        {/* aqui estamos criando a nossa lista, com cada li representando um item da nossa lista
        Para que cada item que criamos por meio do input apareça,
         a gente tem que rodar a lista e selecionar cada tarefa criada e colocar ela como se fosse um item da lista*/}
      </div>
      <div className='container_input'>
        <input type='text'value={input} onChange={(e) => setInput(e.target.value)} className='input' placeholder='Digite uma tarefa'/>
        {/* aqui é o input que digitamos as tarefas
        o onChange serve para que possamos mudar o valor do input
        setInput vai atualizar o valor do estamos input  */}
        <button onClick={handleAdd} className='botao'>Adicionar</button>
        {/* quando clicamos no botão, ele vai adicionar a tarefa que digitamos no input a lista */}
      </div>
    </div>
  );
}

export default App;
