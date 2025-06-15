
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';
import ErrorMessage  from './components/ErrorMessage';

import Container from './components/Container';

import { useState } from 'react';

function App() {
  

 let [foodItems, setFoodItems] =  useState(['dal' ,'dosa' , 'rice' ])

   const onKeyDown = (event)=> {

    if(event.key === 'Enter'){
      let newFoodItem = event.target.value ; 
      event.target.value = '' ; 

      let newItems = [...foodItems, newFoodItem];

      setFoodItems(newItems) ; 
      console.log(`Food value entered is ${newFoodItem}`);

    }
   
   }




  return (
    
    <Container>
    
        <center>
          
       <h1 > Healty Food </h1>      

       <ErrorMessage items={foodItems}></ErrorMessage>

       <FoodInput handleKeyDown={onKeyDown}></FoodInput>

       <FoodItems items={foodItems}> </FoodItems>

        </center>
    </Container>
    
  )
}

export default App
