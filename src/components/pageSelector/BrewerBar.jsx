import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './PageSelector.css'

export default function PageSelector(props) {

    const {prevPage, currentPage, nextPage, prevPageFunc, nextPageFunc} = props

    return (
     <Row className="page-selector">
         <Row onClick={prevPageFunc}>{(prevPage) == 0 ? '-' : prevPage}</Row>
         <Row>{currentPage}</Row>
         <Row onClick={nextPageFunc}>{nextPage}</Row>
    </Row>
     
    ) 
}

