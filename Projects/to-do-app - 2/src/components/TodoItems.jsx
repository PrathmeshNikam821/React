import TodoItem from "./TodoItem";

import styles from './TodoItems.module.css';

const TodoItems = ({todoItems})=>{


  return <div className={styles.itemsContainer}>

    {todoItems.map (item =>
      
      <TodoItem todoItem={item.item} todoDate={item.date}></TodoItem>)}
          
        </div>
}


export default TodoItems;