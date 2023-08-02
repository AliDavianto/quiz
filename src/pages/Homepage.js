import React from 'react';
import Header from '../parts/Header';
import Content from '../parts/Content';
import Footer from '../parts/footer';
function Homepage() {
  return (

    <div>
          <Header />
        <div style={Wrap}>
              
            <Content />
            </div>
            <Footer />
    </div>  
  );
}

const Wrap={
  marginLeft:'80px',
  marginRight:'80px',
}
export default Homepage;
