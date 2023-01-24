import { useContext } from "react"
import { shopContext } from "../context"


export default function BasketItem({id,name,price, quantity,clearBasket, incrDecr,}) {

  const {example} = useContext(shopContext)

  console.log(example);


  return (
    <li className="collection-item BIwrapper">
      <span>
        {name.toLowerCase()} &nbsp;&nbsp; x{quantity} = {price * quantity}
        <b>$</b>
      </span>
      <div className=" basket-delete">
        <button onClick={() => incrDecr(id, 1)}>+1</button>
        <button onClick={() => incrDecr(id, -1)}>-1</button>
        <i className="material-icons " onClick={() => clearBasket(id)}>
          delete_forever
        </i>
      </div>
    </li>
  )
}


