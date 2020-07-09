import React from 'react';
import './card.css';

const typeColor = {
  electric:  'rgb(211, 211, 0)',
  fire:  'rgb(211, 60, 0)',
  bug:  'rgb(130, 211, 0)',
  poison:  'rgb(127, 0, 211)',
  psychic:  'rgb(0, 43, 56)',
  normal:  'rgb(107, 107, 107)',
  dragon:  'rgb(3, 64, 194)'
};

class Card extends React.Component {
  render() {
    const {name, type, image, averageWeight} = this.props.pokemon;
    const alt = `image-${name}`;
    const bgColor = {backgroundColor: typeColor[type.toLowerCase()]};

    return (
      <div className='card'>
        <div className="image-container" style={bgColor}>
          <div className="image-circle">
            <img src={image} alt={alt} />
          </div>
        </div>
        <div className="info-container">
          <strong>{name}</strong>
          <p>{type}</p>
          <p>Average Weight - {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
      </div>
    )
  }
};

export default Card;