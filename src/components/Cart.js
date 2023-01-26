import { useContext } from 'react'
import { shopContext } from '../context'

import '../App.css'
export default function Cart(props) {
  const { quantity = 0 } = props

  const {handleBasketShow} = useContext(shopContext)

  return (
    <div className="cart blue-text card-panel #e6ee9c lime lighten-3" onClick={handleBasketShow}>
      <i className="material-icons ">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}
