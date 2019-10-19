import React from 'react'
import aaron from './assets/Aaron.jpg';
import jess from './assets/Jess.jpg';
import josh from './assets/Josh.jpg';
import kris from './assets/Kris.jpg';
import { Image,Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import './Home.css'
import stand from './assets/TheStand.jpg'
export const About = () => (
     <div>

         <center><h2 className="header">About Us</h2></center>
         <center><Image src={stand} style={{width: 350, height: 450}}/>
         <h2>Hours</h2>
        <p>Monday-Saturday</p>
        <p>12:00 PM - 6:00 PM</p>
        <h2>Address</h2>
        <p>202 NE Central Avenue</p>
        <p>Amite, Louisiana 70422</p>
        <h2 className="header">Who put the Sweet in Sweet Peak</h2></center>
            
             <Row>
                 <Col>
                 <Image src={aaron} style={{width: 250, height: 350}}/>
                </Col>
                <Col>
                <br/>
                <br/>
                <br/>
        <h3>Aaron</h3>
                 <p>Meet Aaron! Co-owner and financial wizard of Sweet Peak Snoballs.
				He has his hands in almost every avenue of Sweet Peak.
				From working in the stand, to budgets, paying the bills,
                 future endeavors, and so much more, Aaron’s the man with a plan.
				You may not always see him at the stand, and that’s because 
                he is doing a lot of behind the scenes work.
				Aaron is an essential part of Sweet Peak!</p>
                </Col>
               </Row> 
               <br/>
               <Row>
                   <Col>
                <Image src={jess} style={{width: 250, height: 350}}/>
                    </Col>
                    <Col>
                    <br/>
                <br/>
                <br/>
        <h3>Jess</h3>
                 <p>Meet Jess! She is the final co-owner of Sweet Peak Snoballs.
				Along with working in the stand, she also manages all social media platforms and events.
				Like what you see on our Instagram and Facebook? Jess is the girl behind the scenes.
				All event inquiries and details are managed and overseen by Jess as well.
				Want to have Sweet Peak Snoballs at your next event? Jess is the one you’ll 
                be working with to make it happen!</p>
                </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                <Image src={josh} style={{width: 250, height: 350}}/>
                    </Col>
                    <Col>
                    <br/>
                <br/>
                <br/>
        <h3>Josh</h3>
                 <p>Meet Josh! He is an owner and the manager of Sweet Peak Snoballs.
						Interested in working for us? Contact him, he’s your guy! Just got hired?
						You’ll be communicating about scheduling and training with him!
						Are you a loyal customer with some compliments or suggestions?
						We’ll direct you to him! He’s the man who knows the stand.
						His main goal is making the stand run and operate efficiently and smoothly.
						Do you appreciate Sweet Peak Snoballs’s efficiency? He’s the man to thank.</p>
                    </Col>
                    </Row>
                    <br/>
                <Row>
                    <Col>
                <Image src={kris} style={{width: 250, height: 350}}/>
                    </Col>
                    <Col>
                    <br/>
                <br/>
                <br/>
        <h3>Kris</h3>
                 <p>Meet Kris! Apart from snoball quality and morale, Kris also serves as the inventory manager 
                     and flavor creator for Sweet Peak.
					Have an idea that you would like to see at Sweet Peak? Kris is your guy!
					That’s how our strawberry cheesecake snoball came to be a staple in our stand.
					A customer mentioned it, and he ran with it from there!</p>
                    </Col>
                </Row>
     </div>

)