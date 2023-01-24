export default function BasketItem({ id, name, price, quantity }) {
  return (
    <li className="collection-item BIwrapper">
      <span>
        {name.toLowerCase()} x{quantity} = {price}
        <b>$</b>
      </span>
      <i className="material-icons basket-delete">delete_forever</i>
    </li>
  )
}
