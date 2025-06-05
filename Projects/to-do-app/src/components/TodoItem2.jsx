function TodoItem2(){

  let todoItem ='Buy Milk';
  let todoDate =' 2/6/2025'; 

  return <div className="row my-row">
          <div className="col-4">
             {todoItem}
          </div>
          <div className="col-4">
           {todoDate}
          </div>
          <div className='col-2'>
            <button className="btn btn-danger my-button">Delete</button>
          </div>
        </div>
}

export default TodoItem2 ; 