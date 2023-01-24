import '../App.css'
import BasketItem from './BasketItem'
export default function BasketList({ order = [], handleBasketShow, clearBasket}) {
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <di className='backgroundSide'>

    <ul className="collection collectionDiv">
      <li className="collection-item active">
        Basket
        <i class="material-icons clear" onClick={handleBasketShow}>
          clear
        </i>{' '}
      </li>
      {order.length > 0 ? (
        order.map((item) => <BasketItem key={item.id} {...item} clearBasket={clearBasket}/>)
      ) : (
        <li className="collection-item ">Basket is empty</li>
      )}

      <li className="collection-item active">
        Total Price: {totalPrice}
        <b>$</b>{' '}
      </li>
    </ul>
    </di>
  )
}
