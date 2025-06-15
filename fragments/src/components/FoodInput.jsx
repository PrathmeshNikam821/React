import styles from './FoodInput.module.css';

const FoodInput = ({handleKeyDown}) =>{
  
 

  return <input type="text"  placeholder="Enter foood Item here" className={styles.foodInput}  onKeyDown={handleKeyDown}/>



}

export default FoodInput ; 