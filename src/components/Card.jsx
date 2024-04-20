import '../Card.css'
import PropTypes from 'prop-types';

export default function Card(props) {
  const cardData = props.item

  Card.propTypes = {
    item: PropTypes.shape({
      linkUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired, // Added prop validation for 'endDate'
      description: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <a href={cardData.linkUrl} target="_blank" rel="noreferrer">
      <div className="card">
        <img src={cardData.imageUrl} alt={cardData.title} width="100px" />
        <div className="description">
          <h2>{cardData.title}</h2>
          <p>{cardData.location}</p>
          <p>{cardData.startDate} - {cardData.endDate}</p>
          <p>{cardData.description}</p>
        </div>
      </div>
    </a>
  );
}
