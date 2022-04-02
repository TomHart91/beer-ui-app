import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar/SideBar'
import { TopBar } from './components/topBar/TopBar';

function App() {

  const [beersArray, setBeersArray] = useState([])
  const [searchText, setSearchText] = useState('')
  const [abvZero, setAbvZero] = useState(false)
  const [abvOne, setAbvOne] = useState(false)
  const [abvTwo, setAbvTwo] = useState(false)
  const [abvThree, setAbvThree] = useState(false)
  const [abvFour, setAbvFour] = useState(false)
  const [abvFive, setAbvFive] = useState(false)
  const [selectedBeerData, setSelectedBeerData] = useState(false);
  const [showFullCard, setShowFullCard] = useState(false);
  
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    .then(response => {return response.json()})
    .then(jsonObject => {
        const beersObj = jsonObject;
        setBeersArray(beersObj)
    })
}, [])

const handleChange = event => {
  const input = event.target.value.toLowerCase();
  setSearchText(input)
}

const filterByABVZero = () => {
  setAbvZero(!abvZero)
}

const filterByABVOne = () => {
  setAbvOne(!abvOne)
}

const filterByABVTwo = () => {
  setAbvTwo(!abvTwo)
}

const filterByABVThree = () => {
  setAbvThree(!abvThree)
}

const filterByABVFour = () => {
  setAbvFour(!abvFour)
}

const filterByABVFive = () => {
  setAbvFive(!abvFive)
}

const filterResults = beersArray.filter(result => {
  let beerHasMatched = true;

  if (searchText) {
    beerHasMatched = result.name.toLowerCase().includes(searchText);
  }

  if (abvZero) {
    beerHasMatched = beerHasMatched && result.abv >= 0 && result.abv < 1;
  }

  if (abvOne) {
    beerHasMatched = beerHasMatched && result.abv >= 1 && result.abv < 2;
  }

  if (abvTwo) {
    beerHasMatched = beerHasMatched && result.abv >= 2 && result.abv < 3;
  }

  if (abvThree) {
    beerHasMatched = beerHasMatched && result.abv >= 3 && result.abv < 4;
  }

  if (abvFour) {
    beerHasMatched = beerHasMatched && result.abv >= 4 && result.abv < 5;
  }

  if (abvFive) {
    beerHasMatched = beerHasMatched && result.abv > 5;
  }
  
  return beerHasMatched;
});


  return (

   <Row>
     <Row><TopBar/></Row>
        <Col xs={2}><Sidebar searchText={searchText} handleChange={handleChange} filterByABVZero={filterByABVZero} filterByABVOne={filterByABVOne}
        filterByABVTwo={filterByABVTwo} filterByABVThree={filterByABVThree} filterByABVFour={filterByABVFour} filterByABVFive={filterByABVFive}
        /></Col>
        <Col xs={9}>
      <CardList beerList={filterResults} /></Col>
      </Row>
  );
}

export default App;
