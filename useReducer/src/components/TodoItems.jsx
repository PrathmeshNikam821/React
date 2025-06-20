import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

import styles from './TodoItems.module.css';

const TodoItems = ()=>{

 const {todoItems}=  useContext(TodoItemsContext);



  return <div className={styles.itemsContainer}>

    {todoItems.map (item =>
      
      <TodoItem  key={item.itemName+item.dueDate} todoItem={item.name} todoDate={item.dueDate} ></TodoItem>)}
          
        </div>
}


export default TodoItems;