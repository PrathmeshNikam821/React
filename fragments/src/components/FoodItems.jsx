
import { act, useState } from "react";
import Item from "./Item";


function FoodItems({items}){

  let [activeItems , setActiveItems] = useState([]); 

  let onBuyButton = ( item , event) =>{

    let newItems = [...activeItems , item];
    setActiveItems(newItems);

  }
  
  return (
     <ul className="list-group">
          {items.map(item => ( <Item  key={item}   bought={activeItems.includes(item)} foodItem = {item } handleBuyButton={(event) => onBuyButton(item , event )}/>
         ))}
         
          
        </ul> 
  )
}

export default FoodItems ; 