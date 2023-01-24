export default function BasketItem({ id, name, price, quantity, clearBasket }) {
  return (
    <li className="collection-item BIwrapper">
      <span>
        {name.toLowerCase()} &nbsp;&nbsp; x{quantity} = {price * quantity}
        <b>$</b>
      </span>
      <i
        className="material-icons  basket-delete"
        onClick={() => clearBasket(id)}
      >
        delete_forever
      </i>
    </li>
  )
}
