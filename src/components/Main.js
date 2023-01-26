import '../App.css'
import Loader from './Loader'
import GoodList from './GoodList'
import Cart from './Cart'
import BasketList from './BasketList'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { shopContext } from '../context'
import { API_KEY, API_URL } from '../config'


export default function Main() {

  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)

  

 const {isBasketShow, order} = useContext(shopContext)

 useEffect(() => {
  fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((data) => data.json())
    .then((data) => {data.featured && setGoods(data.featured)
                    setLoading(false)})
  }, [])


  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? (<Loader /> ) : ( <GoodList goods={goods}/>)}
      {isBasketShow && ( <BasketList/>)}
    </div>
  )
}
