import styles from "./Item.module.css";

const Item = ({ foodItem }) => {

  const handleBuyButton = (foodItem) =>{

    console.log(`${foodItem} is getting bought`)

  }


  return (
    <li
      className={`${styles["kg-item"]} list-group-item `}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}

        onClick={() =>  handleBuyButton(foodItem)}
       
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
