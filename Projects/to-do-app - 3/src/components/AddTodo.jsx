import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";


function AddTodo({onNewItem}){

  const [todoName , setTodoName] = useState("");

  const [dueDate , setDueDate] = useState("") ; 

  const handleNameChange =(event) =>{

    setTodoName(event.target.value);
  }

  const handleDateChange = (event) =>{

    setDueDate(event.target.value);
   
  }

  const handleAddButtonClicked = ( event) =>{
    
    event.preventDefault();

    onNewItem(todoName, dueDate); 
     setDueDate("");
      setTodoName("");
  }

  return <div className="container text-center">
        <form action=""  onSubmit={handleAddButtonClicked} className=" row my-row">
          <div className="col-4">
            <input type="text" placeholder="Enter to do " value={todoName} onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange}/>
          </div>
          <div className='col-2'>
            <button className="btn btn-success my-button"
           
            > <BiSolidAddToQueue></BiSolidAddToQueue>  Add</button>
          </div>
        </form>
      </div>
}

export default AddTodo; 