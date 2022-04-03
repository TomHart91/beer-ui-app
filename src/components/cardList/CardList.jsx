import React, { useState, useEffect } from 'react';
import Card from '../card/Card'
import './CardList.css'

const CardList = (props) => {

    const {beerList, clickFunction} = props
    const listOfBeers =  beerList.map(b =>
    <Card  id={b.id} img={b.image_url} name={b.name} vol={b.volume.value} unit={b.volume.unit} abv={b.abv} malt={b.ingredients.malt[0].name} 
        hops={b.ingredients.hops[0].name} yeast={b.ingredients.yeast} description={b.description} food={b.food_pairing[0]} 
        brewery={b.brewers_tips}clickFunction={clickFunction}/>
    ) 
    return(
        <div className="main">
            {listOfBeers}     
        </div>
    )
}

export default CardList