import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import styled from 'styled-components';
import LOGO from '../assets/SweetPeak.png';

const Styles = styled.div`
  .navbar {
      background-color: #242424;
  }

  .navbar-brand, .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
          color: white;
      }
  }
  .navbar-toggler {
      color: white;
  }

`;

export const NavBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><Image src={LOGO} style={{width:70, height: 70}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                       <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                       <Nav.Item><Nav.Link href="/book">Book Us</Nav.Link></Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)