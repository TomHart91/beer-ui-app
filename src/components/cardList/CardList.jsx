import React from 'react'
import Card from '../card/Card'
import './CardList.scss'

const CardList = (props) => {
    const {beerList} = props
  const beerListJSX =  beerList.map(b =>
        <Card  img={b.image_url} name={b.name} vol={b.volume.value} abv={b.abv} malt={b.ingredients.malt[0].name} hops={b.ingredients.malt[0].name} yeast={b.ingredients.yeast}/>
        )

    return(
        <main className="main">
            {beerListJSX}
        </main>
    )

}

export default CardList