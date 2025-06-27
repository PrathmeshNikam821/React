const LoadingSpinner = () =>{
  return(
     <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '150px' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="mt-2">Loading...</div>
    </div>
  )
}

export default LoadingSpinner;