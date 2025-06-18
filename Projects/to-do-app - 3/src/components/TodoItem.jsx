 import { MdDelete } from "react-icons/md";


function TodoItem({ todoItem, todoDate , onDeleteClick }) {


  return <div className="row my-row">
          <div className="col-4">
          {todoItem}
          </div>
          <div className="col-4">
          {todoDate}
          </div>
          <div className='col-2'>
            <button className="btn btn-danger my-button"  onClick={() => onDeleteClick(todoItem)} > <MdDelete></MdDelete>  Delete</button>
          </div>
        </div>
      
}

export default TodoItem;