import { useState } from 'react';
import logo from './logo.svg';
import Table from './components/Table';
import TableForm from './components/TodoForm/TodoForm';
import './App.css';
const c = console.log.bind(document);

function App() {
  const [todoArray, setTodoArray] = useState(
    [
      {
        id : 1,
        list : "do the dishes",
        status : false,
      },
      {
        id: 2,
        list : "read 512",
        status : true,
      },
    ]
  )

  const saveDataHandler = (data) => {
    // c(data);
    setTodoArray([...todoArray, data]);
    // setTodoArray(prevState => {
    //   return [...prevState, data]
    // })
    c(todoArray)
  }

  return (
    <div className=''>
      <div className="text-center">
        <h1 className='display-4'>To-do List</h1>
      </div>

      <div className="my-5 d-flex justify-content-center">
        <TableForm
        onSaveTaskData={saveDataHandler}
        />
      </div>

      <Table
      tableData={todoArray}
      />

    </div>
  )
}

export default App;
