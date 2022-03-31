import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';

function App() {

  const [beersArray, setBeersArray] = useState([])
  
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    .then(response => {return response.json()})
    .then(jsonObject => {
        const beersObj = jsonObject;
        setBeersArray(beersObj)
    })
    .then(console.log(beersArray))
}, [])

  const beerListMap = beersArray.map(b=>
    b.img_url
  )

  function testFunction(){
    console.log(beersArray)
  }

  return (
    <div className="App">
      <button onClick={testFunction}>Press me</button>
      <CardList beerList={beersArray}/>
      
    </div>
  );
}

export default App;
