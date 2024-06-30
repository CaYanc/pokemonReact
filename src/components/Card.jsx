import '../sass/card.scss'

const Card = (props) => {
  return (
    <div className='card_content'>
        <p className="card_name">{props.name}</p>
        <div className="card_circle"></div>
        <img className="card_img" src={props.imagen} alt="" />
    </div>
  )
}

export {Card}