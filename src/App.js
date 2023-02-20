import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';
const c = console.log.bind(document);

function App() {
  const [inputTask, setInputTask] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  let content;

  if (todoArray.length > 0) {
    content = 
    <Table
    todoArray={todoArray}
    setTodoArray={setTodoArray}
    />
  }


  return (
    <div className=''>
      <div className="text-center">
        <h1 className='display-4'>To-do List</h1>
      </div>

      <div className="my-5 d-flex justify-content-center">
        <Form
        inputTask={inputTask}
        setInputTask={setInputTask}
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        />
      </div>

      {content}
    </div>
  )
}

export default App;
