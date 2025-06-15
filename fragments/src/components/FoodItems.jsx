import Item from "./Item";
function FoodItems({items}){
  
  return (
     <ul className="list-group">
          {items.map(item =>  <Item foodItem = {item } handleBuyButton={()=>{
            console.log("clicked")
          }}/>
         )}
         
          
        </ul> 
  )
}

export default FoodItems ; 