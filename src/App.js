import React, { useState, useEffect } from 'react';
import CardList from './components/cardList/CardList';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar/SideBar'
import { TopBar } from './components/topBar/TopBar';
import BrewersSideBar from './components/brewersSideBar/BrewersSideBar';

function App() {

//States
const [beersArray, setBeersArray] = useState([])
const [searchText, setSearchText] = useState('')
const [abvZero, setAbvZero] = useState(false)
const [abvOne, setAbvOne] = useState(false)
const [abvTwo, setAbvTwo] = useState(false)
const [abvThree, setAbvThree] = useState(false)
const [abvFour, setAbvFour] = useState(false)
const [abvFive, setAbvFive] = useState(false)
const [page, setPage] = useState(1)
const [prevPage, setPrevPage] = useState(0)
const [nextPage, setNextPage]= useState(2);
const [sideMenu, setSideMenu] = useState(false)

//Api called here  
useEffect(() => {
  fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=15`)
  .then(response => {return response.json()})
  .then(jsonObject => {
      const beersObj = jsonObject;
      setBeersArray(beersObj)
  })
},[page])

//Search bar function
const handleChange = e => {
  const input = e.target.value.toLowerCase();
  setSearchText(input)
}

//Page Functions
function prevPageFunc(){
  if(prevPage-1 !== -1){
    setPage(page-1)
    setPrevPage(prevPage-1)
    setNextPage(nextPage-1)
  }
}

//Data breaks on page 13 not sure why this is happening and will have to look at it further
function nextPageFunc(){
  if(nextPage+1 !== 13){
    setPage(page+1)
    setPrevPage(prevPage+1)
    setNextPage(nextPage+1)
  }
}

//Check boxes Functions - need to look into cleaning it up
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

//filtered results
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

//burger menu
function burgerMenu(){
  setSideMenu(!sideMenu);
}

  return (
   <Row className="mx-0">
     <Row className="mx-0"><TopBar burgerMenu={burgerMenu}/></Row>
     
      <Col xs={2} className="mx-0">
        <Sidebar searchText={searchText} handleChange={handleChange} filterByABVZero={filterByABVZero} filterByABVOne={filterByABVOne}
        filterByABVTwo={filterByABVTwo} filterByABVThree={filterByABVThree} filterByABVFour={filterByABVFour} filterByABVFive={filterByABVFive}
        prevPage={prevPage} nextPage={nextPage} currentPage={page} prevPageFunc={prevPageFunc} nextPageFunc={nextPageFunc}
        />
      </Col>
      <Col xs={7} className="mx-0">
        <CardList beerList={filterResults} />
      </Col>
      {sideMenu && (
        <Col xs={3} className="mx-0">
          <BrewersSideBar />
        </Col>
       )}
    </Row>
  );
}

export default App;
