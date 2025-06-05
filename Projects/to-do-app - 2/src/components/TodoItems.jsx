import TodoItem from "./TodoItem";

const TodoItems = ({todoItems})=>{


  return <div className='items-container'>

    {todoItems.map (item => <TodoItem todoItem={item.item} todoDate={item.date}></TodoItem>)}
          
        </div>
}


export default TodoItems;