import '../App.css'
import BasketItem from './BasketItem'
export default function BasketList({ order = [], handleBasketShow }) {
  return (
    <ul className="collection collectionDiv">
      <li className="collection-item active">headers <i class="material-icons clear" onClick={handleBasketShow}>clear</i> </li>
      {order.length > 0 ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item ">Basket is empty</li>
      )}

      <li className="collection-item active">footer</li>
    </ul>
  )
}

