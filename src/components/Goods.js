export default function Goods(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
      } = props
  return (
    <div>
      <div>
        <img src={full_background}/>
        <h1>{price}</h1>
      </div>
    </div>
  )
}
