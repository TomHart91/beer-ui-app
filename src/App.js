import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar/SideBar'

function App() {

  const [beersArray, setBeersArray] = useState([])
  const [searchText, setSearchText] = useState('')
  const [abvZero, setAbvZero] = useState(false)
  const [selectedBeerData, setSelectedBeerData] = useState(false);
  const [showFullCard, setShowFullCard] = useState(false);
  
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    .then(response => {return response.json()})
    .then(jsonObject => {
        const beersObj = jsonObject;
        setBeersArray(beersObj)
    })
    .then(console.log(beersArray))
}, [])

const handleChange = event => {
  const input = event.target.value.toLowerCase();
  setSearchText(input)
}

const filterByABVZero = () => {
  setAbvZero(abvZero)
}


const filterResults = beersArray.filter(result => {
  let beerHasMatched = true;

  if (searchText) {
    beerHasMatched = result.name.toLowerCase().includes(searchText);
  }

  if (filterByABVZero) {
    beerHasMatched = beerHasMatched && result.abv > 0;
  }

  return beerHasMatched;
});


  return (

   <Row>
        <Col xs={2}><Sidebar searchText={searchText} handleChange={handleChange} filterByABVZero={filterByABVZero}/></Col>
        <Col xs={9}>
      <CardList beerList={filterResults} /></Col>
      </Row>
  );
}

export default App;
