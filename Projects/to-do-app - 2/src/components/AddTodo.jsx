function AddTodo(){
  return <div class="row my-row">
          <div class="col-4">
            <input type="text" placeholder="Enter to do " />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class='col-2'>
            <button class="btn btn-success my-button">Add</button>
          </div>
      </div>
}

export default AddTodo; 