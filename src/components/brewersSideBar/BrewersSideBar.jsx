import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './BrewersSideBar.css'
import DownArrow from './down-arrow.svg'

export default function BrewersSideBar(){
    const [breweries, showBreweries] = useState(false)
    const [searchText,setSearchText] = useState('')
    const breweriesArray = ["Spitting Feather", "Blueball", "Weetwood Ales", "Love Lane", "Cloudwater Brew Co", "BrewDog", "Franciscan Well"]
    const filteredBreweries = breweriesArray.filter(result => result.toLowerCase().includes(searchText))
    const handleChange = e => {
        const input = e.target.value.toLowerCase();
        setSearchText(input)
      }

    return(
        <div className="brewers-bar-container">
            <div className="brewers-menu">
            <Row> <input type="text" id="name-search" value={searchText} onChange={handleChange} placeholder="Find a Brewery..."/></Row>
            <Row className="brewers-menu-items" onClick={()=>showBreweries(!breweries)}><p>breweries  <img src={DownArrow} height="20px" width="20px" alt="down arrow"/></p></Row>
            {breweries && (
            <div>
                {filteredBreweries.map(breweries=>
                    <Row className='brewery-sub-menu'>{breweries}</Row>)}
            </div>
            )}
            <Row className="brewers-menu-items">request a brewery</Row>
            <Row className="brewers-menu-items">about us</Row>
            <Row className="brewers-menu-items">FAQs</Row>
            <Row className="brewers-menu-items">careers</Row>
            <Row className="brewers-menu-items">contact</Row>
            </div>
        </div>
    )
}
