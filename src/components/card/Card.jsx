import React from 'react'
import './Card.scss'

const Card = (props) => {

    const {img, name, vol, malt, abv, hops, yeast } = props

    return (
        <div className="beers__card">
            <img src={img} className="beers__card__img" alt="" />
            <h3 className="beers__card__title">{name}</h3>
            <h5>Abv: {abv}</h5>
            <h5>Volume: {vol}</h5>
            <h5>Ingredients: Malt:{malt}, Hops:{hops}, Yeast:{yeast} </h5>
        </div>
    ) 
}

export default Card

