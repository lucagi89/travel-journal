import './Card.css'

export default function Card(props) {
  const cardData = props.item
  return (
    <a href={cardData.linkUrl} target="_blank" rel="noreferrer">
    <div className="card">
      <img src={cardData.imageUrl} alt={cardData.title} width="100px"/>
      <div className='description'>
        <h2>{cardData.title}</h2>
        <p>{cardData.location}</p>
        <p>{cardData.startDate} - {cardData.endDate}</p>
        <p>{cardData.description}</p>
      </div>

    </div>
    </a>
  )
}
