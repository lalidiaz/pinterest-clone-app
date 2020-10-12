import React from 'react';
import './styles.scss';

function Card(props) {
    const {img, name} = props;

    return(
        <div className='cardContainer'>
            <div className='imgContainer'>
            <img src={img} />
            </div>
            <div className='dataContainer'>
            <p>{name}</p>
            </div>
        </div>
    )
}
export default Card;
