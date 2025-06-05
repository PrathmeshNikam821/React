import styles from './Item.module.css'

function Item(props){

  return <li   className={`${styles['kg-items']} list-group-item`}>{props.foodItem}</li>
}

export default Item ; 