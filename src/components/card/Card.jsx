import React, { useState, useEffect } from 'react';
import './Card.css'
import { Row, Col } from 'react-bootstrap';
import FullCard from '../fullCard/Fullcard'


const Card = (props) => {
    const [beerSelected, setSelectedBeer] = useState({})
    const [beerSelectedDetails, setSelectedBeerDetails] = useState(false)

    const {img, name, vol, malt, abv, hops, yeast, id, description, food, brewery, unit} = props

    function fetchBeer(){
        setSelectedBeerDetails(!beerSelectedDetails)
    }

    return (
        <>
        <div className="beer-card" id={id} onClick={fetchBeer}>
            <div className="card-mg-div">
                <img src={img} alt={name} className="card-img"/>
            </div>
            <Row className="beer-title py-0" title={name}>{name}</Row>
            <Row class="point8">Abv: {abv}</Row>
            <Row class="point8">Vol:{vol + ' ' + unit}</Row>
            <Row class="point8">Yeast: {yeast}</Row>

        </div>
            {beerSelectedDetails && (       
                <FullCard img={img} name={name} vol={vol} malt={malt} abv={abv} hops={hops} 
                yeast={yeast} id={id} description={description} food={food} brewery={brewery} clickFunction={fetchBeer}/>
            )}
     </>
    )


   
}

export default Card

