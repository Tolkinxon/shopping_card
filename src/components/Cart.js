import '../App.css'
export default function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props
  return (
    <div className="cart blue-text card-panel #e6ee9c lime lighten-3" onClick={handleBasketShow}>
      <i className="material-icons ">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}
