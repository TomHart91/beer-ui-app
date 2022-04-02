import React from 'react'
import './SideBar.css'

import { Row, Col } from 'react-bootstrap';


const SideBar = (props) => {

    const {searchText, handleChange, filterByABVZero } = props

    return (
      <div class='filter-menu'>
        <input type="text" id="name-search" value={searchText} onChange={handleChange} placeholder="Search by name..."/>
        <br/>
        <span>Filter by ABV</span>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abvZero" name="abvZero" />
          <label htmlFor="abvZero">0-1%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abv1" name="abv1" />
          <label htmlFor="abv1">1-2%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abv2" name="abv2" />
          <label htmlFor="abv2">2-3%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abv3" name="abv3" />
          <label htmlFor="abv3">3-4%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abv4" name="abv4" />
          <label htmlFor="abv4">4-5%</label>
        </div>
        <div class="filter-check">
          <input onClick={filterByABVZero} type="checkbox" id="abv5" name="abv5" />
          <label htmlFor="abv5">5% +</label>
        </div>

      </div>
    ) 
}

export default SideBar

