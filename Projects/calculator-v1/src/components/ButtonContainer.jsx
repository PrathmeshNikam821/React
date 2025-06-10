import styles from './ButtonContainer.module.css';

const ButtonContainer = () =>{
  return (

     <div className={styles.buttonsContainer}>

      <button  className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
      {/* <button>4</button> */}
    </div>
  )
}

export default ButtonContainer;