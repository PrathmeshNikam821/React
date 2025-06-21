import { useContext, useRef} from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo(){

 

  const todoNameElement = useRef();

  const dueDateElement = useRef();

  const {addNewItem} = useContext(TodoItemsContext); 


 

  const handleAddButtonClicked = ( event) =>{
    
    event.preventDefault();
    const todoName = todoNameElement.current.value; 
    const dueDate = dueDateElement.current.value; 
    todoNameElement.current.value="";
    dueDateElement.current.value="";


    addNewItem(todoName, dueDate); 
 
  }

  return <div className="container text-center">
        <form action=""  onSubmit={handleAddButtonClicked} className=" row my-row">
          <div className="col-4">
            <input type="text" ref={todoNameElement}
            placeholder="Enter to do "   />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement}
             />
          </div>
          <div className='col-2'>
            <button className="btn btn-success my-button"
           
            > <BiSolidAddToQueue></BiSolidAddToQueue>  Add</button>
          </div>
        </form>
      </div>
}

export default AddTodo; 