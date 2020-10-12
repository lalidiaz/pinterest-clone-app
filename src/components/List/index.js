import React, { useState, useEffect } from 'react'
import Card from '../Card'
import './styles.scss'

function List(props) {
    const [cards, setCards] = useState([]);

    const { filter } = props;

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData(){
        const getCards = await fetch('http://localhost:3001/api/card')
        const cards = await getCards.json();
        setCards(cards);
    }

    return(
        <section className='listContainer'>
        {cards.filter((card) => {
            const { name } = card;
            const lowerName = name.toLocaleLowerCase() 
            const lowerFilter = filter.toLocaleLowerCase()
            return lowerName.includes(lowerFilter)
        }).map((card) => {
            return(
                <Card key={card._id} img={card.img} name={card.name} />
            )
        })}
        </section>
    )
}

export default List
