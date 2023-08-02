import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2023 Universitas Gunadarma. All Rights Reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '22vh',
};

export default Footer;
