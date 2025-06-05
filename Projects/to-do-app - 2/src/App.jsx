import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import './App.css';

import TodoItems from "./components/TodoItems";



function App() {


  const todoItems=[
    { item: 'Buy Milk', date: '3/5/2025' },
    { item: 'Buy Coffee', date: '3/5/2025' },
    { item: 'Buy Bread', date: '3/5/2025' }
  ];
    

  return <center className='todo-container'>

    <AppName></AppName>
  

    <div className="container text-center">
     
     <AddTodo></AddTodo>
     <TodoItems todoItems={todoItems}></TodoItems>

  

      
      
    </div>



  </center>
}

export default App
