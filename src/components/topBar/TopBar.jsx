import React from 'react'
import './TopBar.css'
import Globe from './globe.svg'
import BrewDog from './brewdog.png'
import Burger from './burger.svg'

import { Row, Col } from 'react-bootstrap';

export function TopBar({burgerMenu}){
    return (
        <Row className="top-row">
            <Col className="p-0 globe" xs={1}><img src={Globe} height="100px" width="100px"/></Col>
            <Col className="p-0 beer-atlas" xs={1}>the <br/> beer <br/> atlas</Col>
            <Col className="ps-5 brew-dog-img text-end"><img src={BrewDog} height="100px" /></Col>
            <Col className="p-0 mt-4 text-end burger-menu" onClick={burgerMenu}><img src={Burger} height="50px" /></Col>
        </Row>
    ) 
}

