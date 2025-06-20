import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

import styles from './TodoItems.module.css';

const TodoItems = ({onDeleteClick})=>{

 const {todoItems , deleteItem}=  useContext(TodoItemsContext);



  return <div className={styles.itemsContainer}>

    {todoItems.map (item =>
      
      <TodoItem todoItem={item.item} todoDate={item.date} ></TodoItem>)}
          
        </div>
}


export default TodoItems;