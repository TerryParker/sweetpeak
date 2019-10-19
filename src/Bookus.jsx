import React from 'react'
import image from './assets/Bookus.jpg';
import { Image} from 'react-bootstrap';
import './Home.css';

export const Bookus = () => (
     <div>
         <center><h2 className="header">Book Us</h2></center>
        <center><Image src={image} style={{width:450, height: 450}}/>
        <h3>Book Us for your special events!</h3>
        
       </center>
     </div>

)