import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";

import './App.css';


import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";



function App() {
  const [todoItems,setTodoItems] = useState([]);

  const addNewItem = (itemName , itemDueDate)=>{
    console.log(`New item added: ${itemName} and due date : ${itemDueDate}`);

    const newTodoItems = [...todoItems , {item: itemName , date : itemDueDate}];

    setTodoItems(newTodoItems);

    
  }

  const deleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item => item.item !== todoItemName);
    setTodoItems(newTodoItems);
   

  };


  
  return (
     <TodoItemsContext.Provider value={{
      todoItems  : todoItems , 
      addNewItem : addNewItem,
      deleteItem : deleteItem,
     }}>
    <center className='todo-container'>

      <AppName></AppName>
    

      <div className="container text-center">
      
      <AddTodo></AddTodo>

    <WelcomeMessage ></WelcomeMessage>
      
      <TodoItems></TodoItems>

        
      </div>



    </center>
  </TodoItemsContext.Provider>
  );
}

export default App
