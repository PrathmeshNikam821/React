function Hello(){

  let name = "Pratham";

  let fullName = () =>{
    return 'Pratham Nikam';
  }

  return <p>
    This is the futute spaking . My name is {name}.
    <br />
    My full name is {fullName()}.
  </p>
}

export default Hello ; 