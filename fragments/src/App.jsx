
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';
import ErrorMessage  from './components/ErrorMessage';

import Container from './components/Container';

import { useState } from 'react';

function App() {
  

  let foodItems = ['dal' ,'dosa' , 'rice' , 'vegetables '];

  let textStateArr = useState();
  let textStateValue = textStateArr[0];
  let textStateMethod = textStateArr[1];
  
  

  let textToShow = 'Food item entered by user' ; 



   const handleOnChange = (event)=> {
    console.log(event.target.value);

    textToShow = event.target.value ; 
   }
  return (
    
    <Container>



    
        <center>
          
       <h1 > Healty Food </h1>

       

       <ErrorMessage items={foodItems}></ErrorMessage>

       <FoodInput handleOnChange={handleOnChange}></FoodInput>

       <p>{textToShow}</p>

       <FoodItems items={foodItems}> </FoodItems>
       

      
      
        </center>
    </Container>
    
  )
}

export default App
