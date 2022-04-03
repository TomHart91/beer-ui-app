//This page does not use react bootstrap to demonstrate that I am not reliant on it - Tom H
import React from 'react'
import './SideBar.css'

const SideBar = (props) => {

    const {searchText, handleChange, filterByABVZero, filterByABVOne, filterByABVTwo, filterByABVThree, filterByABVFour, filterByABVFive,
      prevPage, currentPage, nextPage, prevPageFunc, nextPageFunc } = props

    return (
      <div class='filter-menu'>
        <div className="page-selector">
          <span className="unselected-page"onClick={prevPageFunc}>{(prevPage) === 0 ? '-' : prevPage}</span>
          <span className="selected-page">{currentPage}</span>
          <span className="unselected-page" onClick={nextPageFunc}>{(nextPage) === 12 ? '-' : nextPage}</span>
        </div>
        <input type="text" id="name-search" value={searchText} onChange={handleChange} placeholder="Search by name..."/>  
        <br/>
        <span className="filter-by-abv-title">Filter by ABV</span>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abvZero" name="abvZero" />
          <label htmlFor="abvZero">0-1%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVOne} type="checkbox" id="abvOne" name="abvOne" />
          <label htmlFor="abvOne">1-2%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVTwo} type="checkbox" id="abvTwo" name="abvTwo" />
          <label htmlFor="abvTwo">2-3%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVThree} type="checkbox" id="abvThree" name="abvThree" />
          <label htmlFor="abvThree">3-4%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVFour} type="checkbox" id="abvFour" name="abvFour" />
          <label htmlFor="abvFour">4-5%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVFive} type="checkbox" id="abvFive" name="abvFive" />
          <label htmlFor="abvFive">5% +</label>
        </div>

      </div>
    ) 
}

export default SideBar

