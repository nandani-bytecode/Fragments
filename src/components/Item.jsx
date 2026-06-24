import styles from "./Item.module.css";
const Item = ({fooditem}) => {

   const handleBuyButtonClicked = (event) => {
      console.log(`${fooditem} being bought`)
   }
   return ( 
    <li className="list-group-item">{fooditem}
    <button
     className={`${styles.button} btn btn-info`}
     onClick = {(event) => handleBuyButtonClicked(event) }
     >Buy</button>
    </li>
   
 )
};
export default Item;