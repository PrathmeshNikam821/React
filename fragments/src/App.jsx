
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';
import ErrorMessage  from './components/ErrorMessage';

import Container from './components/Container';

function App() {
  

  let foodItems = ['dal' ,'dosa' , 'rice' , 'vegetables '];
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //  return <h2>I am still hungry</h2>
  // }
 
  return (
    
    <Container>



    
        <center>
          
       <h1> Healty Food </h1>

       <ErrorMessage items={foodItems}></ErrorMessage>

       <FoodInput></FoodInput>

       <FoodItems items={foodItems}> </FoodItems>
       

      
      
        </center>
    </Container>
    
  )
}

export default App
