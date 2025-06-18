import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";

import './App.css';

import TodoItems from "./components/TodoItems";
import { useState } from "react";



function App() {
  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName , itemDueDate)=>{
    console.log(`New item added: ${itemName} and due date : ${itemDueDate}`);

    const newTodoItems = [...todoItems , {item: itemName , date : itemDueDate}];

    setTodoItems(newTodoItems);

    
  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item => item.item !== todoItemName);
    setTodoItems(newTodoItems);
   

  }

  return <center className='todo-container'>

    <AppName></AppName>
  

    <div className="container text-center">
     
     <AddTodo onNewItem={handleNewItem}></AddTodo>

     {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage> }
     
     <TodoItems key={todoItems} todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
     

     

  

      
      
    </div>



  </center>
}

export default App
