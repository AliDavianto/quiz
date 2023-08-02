import React from 'react'
import Header from '../parts/Header';
import QuizParts from '../parts/quizParts';

const Quiz = () => {
  return (
    <div>
      
   
    <Header />
    <div  style={Wrap}>
    <div style={container}>

            <QuizParts />
      
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
export default Quiz
