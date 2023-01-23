import Goods from './Goods'
export default function GoodList({ goods = [] }) {

  if(goods.length == 0){
    return <h3>NOTHING HERE</h3>
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <Goods key={item.id} {...item} />
      ))}
    </div>
  )
}
