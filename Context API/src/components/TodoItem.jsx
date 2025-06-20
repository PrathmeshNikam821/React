 import { useCallback, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";


function TodoItem({ todoItem, todoDate }) {

  const { deleteItem} = useContext(TodoItemsContext);

  return <div className="row my-row">
          <div className="col-4">
          {todoItem}
          </div>
          <div className="col-4">
          {todoDate}
          </div>
          <div className='col-2'>
            <button className="btn btn-danger my-button"  onClick={() => deleteItem(todoItem)} > <MdDelete></MdDelete>  Delete</button>
          </div>
        </div>
      
}

export default TodoItem;