import '../App.css'
import { API_KEY, API_URL } from '../config'
import Loader from './Loader'
import GoodList from './GoodList'
import { useState } from 'react'

export default function Main() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)


      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        }
      })
        .then((data) => data.json())
        .then((data) => {data.featured && setGoods(data.featured)
                          setLoading(false)})

        




  
    return (
        <div className='container content'>
          {loading ? <Loader /> : <h1>something went wrong</h1>}
        </div>
    )
}