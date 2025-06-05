
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodItems from './components/FoodItems';
import ErrorMessage  from './components/ErrorMessage';

function App() {
  

  let foodItems = ['dal' ,'dosa' , 'rice' , 'vegetables '];
  // let foodItems = [];

  // if (foodItems.length === 0) {
  //  return <h2>I am still hungry</h2>
  // }
 
  return (
    
    <>
        <center>
          
       <h1> Healty Food </h1>

       <ErrorMessage items={foodItems}></ErrorMessage>

       <FoodItems items={foodItems}> </FoodItems>
       

      
      
        </center>
    </>
    
  )
}

export default App
