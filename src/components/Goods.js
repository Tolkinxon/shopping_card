
export default function Goods({id, name, description, price, full_background })



{
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">{description}</div>
      <div className="card-action">
      <span className="card-title">{name}</span>
        <button className="btn">Buy</button>
        <span className="right"></span>
      </div>
    </div>
  )
}
