import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import background from "../img/backlights.jpg";
import '../styles/NeonText.css'

const About = () => {
  // UseEffect to reset global styles for <html> and <body>
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        width: '100vw',           // Full viewport width
        height: '100vh',          // Full viewport height
        backgroundSize: 'cover',  // Resize to cover the viewport
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent tiling
        display: 'flex',          // Center the content
        justifyContent: 'center', // Horizontally center content
        alignItems: 'center',     // Vertically center content
      }}
    >
        
      
      
      {/* Light Rectangle 1 */}
      <div
       style={{
        position: "absolute", // Positioned relative to the parent container
        top: "10.7%", // Adjust this value to place the rectangle where the first lamp is
        left: "13%", // Adjust this value for horizontal positioning
        width: "15%", // Width of the rectangle
        height: "78%", // Height of the rectangle
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light effect with transparency
        borderRadius: "35px",
        boxShadow: "0 0 60px rgba(255, 255, 255, 0.3), 0 0 150px rgba(255, 255, 255, 0.2)"      }}
      ><NavBar /></div>

        {/* Light Rectangle 2 */}
      <div
        style={{
          position: "absolute",
          top: "10.9%", // Adjust this value to match the position of the second lamp
          left: "45.5%",
          width: "41%",
          height: "77.5%",
          
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Light effect with transparency
        borderRadius: "35px",
        boxShadow: "0 0 80px rgba(255, 255, 255, 0.3), 0 0 150px rgba(255, 255, 255, 0.2)"
        }}
      >
        <h2 className='neonTextMain' style={{
        fontSize: '2vw', // Scales with the viewport width
        textAlign: 'center',
        padding: 0,
      }}>About</h2>
        <p className='neonTextMain'
        style={{
            fontSize: '2vw', // Scales with the viewport width
            textAlign: 'center',
            padding: 0,
            marginLeft: "5%",
            marginRight: "5%"
            
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit eros porta 
          erat hendrerit volutpat. Proin ullamcorper nisl eu pulvinar sagittis. Nullam tellus velit, fermentum 
          id felis et, sagittis suscipit nisl. Etiam fringilla diam a magna pellentesque, a eu a ipsum.
        </p>
      </div>

      
    </div>
  );
};

export default About;
