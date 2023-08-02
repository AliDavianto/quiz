import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
    
    <h1 style={logoStyle}>Logo</h1>
    <div style={linkWrap}>
      <a href="https://www.youtube.com/watch?v=DneC8YbqmXA" style={linkStyle}>About</a>
      <a href="https://www.youtube.com/watch?v=DneC8YbqmXA" style={linkStyle}>Contact</a>
    </div>
      
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#383D70',
  color: '#fff',
  height: '50px',
  display: 'flex', // Set display to 'flex'
  justifyContent: 'space-between', // Align the elements with space between them
  alignItems: 'center', // Vertically center the elements within the header

};

const logoStyle = {
  margin: '0',
  marginLeft: '80px', 
  color:'#fff',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  marginLeft: '64px', 

};

const linkWrap = {
    textDecoration: 'none',
    color: '#fff',
    marginRight: '80px'
  
  };
  

export default Header;
