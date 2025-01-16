import React from 'react';



const footer = () => {
  return (
    <footer 
      style={{
        position: "fixed",         // Sticks the footer to the bottom
        bottom: 0,                 // Ensures it's always at the bottom
        width: "100%",             // Spans the entire width of the viewport
        textAlign: "center",       // Centers the text
        backgroundColor: "#000",   // Black background (adjust as needed)
        color: "#fff",             // White text color for contrast
        padding: "10px 0",         // Adds vertical spacing
        fontSize: "14px",          // Adjust font size
      }}
    >
      This version supports PC or Tablet for now.
    </footer>
  )
}

export default footer