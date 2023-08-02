import React from 'react'
import Header from '../parts/Header';
import Quiz from '../pages/Quiz';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate()
  return (
    <div>
      
   
    <Header />
    <div  style={Wrap}>
    <div style={container}>

         <div style={illustartionStyle}>
            
         </div>
        <button type="button" style={buttonStyle}onClick={() => navigate('/')}>Kembali ke Homepage</button>
    </div>
    </div>
    </div>
  )
}

const container ={
 
    display: 'flex',
    flexDirection: 'column', // Align the elements vertically within the container
    justifyContent: 'center', // Center elements horizontally
    alignItems: 'center', //
    
  }
  
  
  
  const Wrap={
    marginTop:'100px',
    
      marginLeft:'80px',
      marginRight:'80px'  
    
  }

  const illustartionStyle ={
    width :'640px',
    height :'390px',
    backgroundColor: '#4CAF50',
  }

  const buttonStyle ={
    marginTop:'40px',
    width:'640px',
    height: '40px',
    borderRadius: '20px',
    border:'none',
    color:'white',
    backgroundColor: '#4CAF50',
    cursor: 'pointer',
  }
export default Success
