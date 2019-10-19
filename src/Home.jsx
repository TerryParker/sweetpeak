import React from 'react';
import {Image, Row, Col} from 'react-bootstrap';
import hl from './assets/HL3.jpg';
import styled from 'styled-components';
import './Home.css';


export const Home = () => (
     <div>
         <center><h1 className="header">Welcome to Sweet Peak</h1></center>
      <Row>   
      <Col>  
      <Image src={hl} style={{width:450, height:480}}/>
      </Col>
      <Col>
      <br/>
      <br/>
      <br/>
      <h3>Our snoballs are made of our delicious flavors and the softest ice. Sweet Peak is located in the heart of Amite next to the Tangipahoa Parish Library.</h3>
      </Col>
     </Row>
    
     </div>

)