import React from 'react';
import Homepage from './pages/Homepage';
import {  Route ,Routes} from 'react-router-dom';
import Quiz from './pages/Quiz';
import Success from './pages/Success';
import Failed from './pages/Failed';

function App() {
  return (

    <div style={container}>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='quiz' element={<Quiz/>}></Route>
        <Route path='success' element={<Success/>}></Route>
        <Route path='failed' element={<Failed/>}></Route>
      </Routes>
    </div>  
  );
}

const container={
  backgroundColor:'#363A66',
  minHeight:'100vh',
}
export default App;
