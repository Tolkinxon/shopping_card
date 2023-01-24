import '../App.css'
import { API_KEY, API_URL } from '../config'
import Loader from './Loader'
import GoodList from './GoodList'
import { useState, useEffect } from 'react'
import Cart from './Cart'
import BasketList from './BasketList'
import { toast } from 'react-toastify'

export default function Main() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setIsBasketShow] = useState(false)
  

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow)
  }

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem
        }
      })
      setOrder(newOrder)
    }
    toast.success('added new items')
  }

  const incrDecr = (id, number) => {
   const index = order.findIndex((orderItem) => orderItem.id === id)

    
   const newArr = order.map((item, id) => {
    if(number == -1 && item.quantity === 0) {return item}
    return  index === id ? {...item, quantity:  item.quantity + number} : item
   })
    setOrder(newArr)
  }


  const clearBasket = (id) => {
    const index = order.findIndex((orderItem) => orderItem.id === id)
 
    order.splice(index, 1)

    setOrder([...order])
    toast.error('the item is deleted')
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        data.featured && setGoods(data.featured)
        setLoading(false)
      })
  }, [])






  return (
    <div className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          clearBasket={clearBasket}
          incrDecr={incrDecr}
        />
      )}
    </div>
  )
}
