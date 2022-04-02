import React, { useState, useEffect } from 'react';
import './FullCard.css'
import { Row, Col, Container } from 'react-bootstrap';


const FullCard = (props) => {
    const {img, name, vol, malt, abv, hops, yeast, id, description, food, brewery, clickFunction } = props

    return (
        <Container>
        <div className="container" onClick={clickFunction}>
        <div className="beer-info" id={id} >
            
           <Row>
                <Col xs={3} className="flex-start"><img src={img} className="card-img-full-card" alt="" /></Col>
                <Col xs={9} className="ps-3">
                <Row className="name-row">{name}</Row>
                <Row>Abv: {abv}</Row>
                <Row>Volume: {vol}</Row>
                </Col>
            </Row>
            <Row className="titles"><Col  xs={6}>Yeast: </Col><Col>Malt: </Col><Col>Hops:</Col></Row>
            <Row className="info"><Col xs={6}>{yeast}</Col><Col>{malt}</Col><Col>{hops}</Col></Row>

            <Row className="descrition">{description}</Row>
            <Row className="info"><b>Food Pairing:</b>{food}</Row>
            <Row><b>Brewery Tips:</b> {brewery}</Row>
           
        </div>  
        </div>
        </Container>
    )

}

export default FullCard

