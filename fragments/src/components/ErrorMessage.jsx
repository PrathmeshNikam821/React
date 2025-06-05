const ErrorMessage = ( {items})=>{
   


  return (
    <div className="alert alert-danger">
      {items.length === 0 ? <h2>I am still hungry</h2> : <h2>Food is available</h2>}
    </div>
  )
    

}

export default ErrorMessage ; 