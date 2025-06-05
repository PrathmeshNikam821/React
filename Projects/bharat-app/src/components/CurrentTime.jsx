

let CurrentTime = ()=>{

  let time = new Date();
  return <p className="lead">
    This  is the current time in Bharat: {time.toLocaleDateString()}- { "  "} {time.toLocaleTimeString()}
  </p>
}

export default CurrentTime  ; 