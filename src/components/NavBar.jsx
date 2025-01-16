import React from 'react';
import '../styles/NeonText.css';  // Make sure your CSS is correctly imported
import { Link } from 'react-router-dom';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
const NavBar = () => {
  return (
    <nav style={{
        textAlign: 'center',
        margin: 0,
        padding: 0
        
      }}>
        <Link className='neonTextNav' to="/">Homepage</Link>
        <Link className='neonTextNav' to="/skills">Skills</Link>
        <Link className='neonTextNav' to="/about">About</Link>
        <Link className='neonTextNav' to="/contacts">Contacts</Link>
        
        <Link to="https://www.linkedin.com/" target="_blank">
        <img style={{
        height: "150px"
        }}
        src={linkedin} alt="some example image" />
        </Link>
        <Link to="https://github.com/" target="_blank">
        <img style={{
        height: "200px"
        }}
        src={github} alt="some example image" />
        </Link>
         
        
        
        
    </nav>
  );
}

export default NavBar;