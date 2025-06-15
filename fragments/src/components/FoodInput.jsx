import styles from './FoodInput.module.css';

const FoodInput = ({handleOnChange}) =>{
  
 

  return <input type="text"  placeholder="Enter foood Item here" className={styles.foodInput}  onChange={handleOnChange}/>



}

export default FoodInput ; 