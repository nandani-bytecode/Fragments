import Item from "./Item";
function Fooditems(){
     let fooditems = ["dal","green vegetables","protein"];
    return ( 
              <ul className="list-group">
                  {fooditems.map((items) =>( <Item key={items} fooditem={items}></Item>) )
                  }
              </ul>
            )
}
export default Fooditems;