import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements'
import Logo from './Logo.png';

export default function Navbar() {
  return (<>
    <Nav>
        <NavLink exact to="/">
            <img src={Logo} alt="Mark Chen" width="50" height="50"/>
            <h1>Mark Chen</h1>
        </NavLink>
            <NavMenu>
            <NavLink to="/about" activeStyle>About</NavLink>
            <NavLink to="/projects" activeStyle>Projects</NavLink>
            <NavLink to="/youtube" activeStyle>YouTube</NavLink>
            <NavLink to="/blog" activeStyle>Blog</NavLink>
            <NavLink to="/courses" activeStyle>Courses</NavLink>
            <NavLink to="/contact" activeStyle>Contact</NavLink>
        </NavMenu>
    </Nav>
  </>);
}