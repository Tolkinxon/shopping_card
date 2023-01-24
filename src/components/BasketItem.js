export default function BasketItem({
  id,
  name,
  price,
  quantity,
  clearBasket,
  incrDecr,
}) {
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


